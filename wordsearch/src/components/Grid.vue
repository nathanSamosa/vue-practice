<template>
    <div
        id="grid"
        v-if="grid.length"
    >
        <div
            class="grid-row"
            v-for="row in grid"
            :key="row"
        >
            <div
                class="grid-cell"
                v-for="cell in row"
                :key="cell"
            >
                <div v-if="cell">{{cell.letter}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import calculatesRandom from '../mixins/calculatesRandom';
    import restrictsWordBounds from '../mixins/restrictsWordBounds'
    import config from '../utilities/config'
    const { GRID } = config
    console.log(GRID)

    export default {
        name: "Grid",
        props: {
            library: Array
        },
        mixins: [calculatesRandom, restrictsWordBounds],
        data() {
            return {
                grid: [],
                gridSize: null
            }
        },
        methods: {
            newWord(grid, word) {
                let storedLetters = [];

                const dir = this.randomDir();
                const pos = this.restrictBounds(word, dir)
                
                for (let i = 0; i < word.length; i++) {
                    let gridCell = { ...grid[pos.y][pos.x] }

                    const isOccupied = Object.keys(gridCell).length > 0 && gridCell.constructor === Object;
                    const isMatching = gridCell.letter === word[i];
                    const isObstructed = isOccupied && gridCell.isPointing.includes(dir)

                    if ( isOccupied && (isObstructed || !isMatching) ) return this.newWord(grid, word)

                    storedLetters.push({
                        x: pos.x,
                        y: pos.y,
                        letter: word[i],
                        isPointing: isOccupied ? [ ...gridCell.isPointing, dir ] : [ dir ]
                    })

                    pos.x += dir.x;
                    pos.y += dir.y;    
                }

                return storedLetters
            },
            addWordToGrid(lettersToAdd) {
                lettersToAdd.forEach(cell => 
                    this.grid[cell.y][cell.x] = cell
                )
            },
            addLibraryToGrid() {
                this.library.forEach(word => {
                    const lettersToAdd = this.newWord(this.grid, word)  
                    this.addWordToGrid(lettersToAdd)
                })
            },
            fillEmptyCells() {
                this.grid = this.grid.map(row =>
                    row.map(cell => cell ? cell : { letter: this.randomLetter() })
                )
            },
            newGrid() {
                this.gridSize = Math.max(Math.floor(this.library.length * GRID.countSizeRatio), GRID.minSize)
                this.grid = Array.from(Array(this.gridSize), () => Array(this.gridSize).fill(null))
                this.addLibraryToGrid()
                this.fillEmptyCells()
            }
        },
        watch: {
            library() {
                this.newGrid()
            }
        }
    }
</script>

<style>
    #grid {
        display: grid;
        grid-auto-flow: row;
        grid-template-rows: repeat(v-bind('gridSize'), 50px);
        justify-content: center;
    }
    .grid-row {
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: repeat(v-bind('gridSize'), 50px);
    }
    .grid-cell {
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>