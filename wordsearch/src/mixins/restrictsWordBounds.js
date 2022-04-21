export default {
    methods: {
        dirMod(dir) { // 1 = 1, 0 = 0, -1 = 0
            return Number(dir > 0)
        },
        wordBounds(wordLength, dir) { // Restrict the base position to ensure the word wont overflow
            return {
                xMin: 0 + this.dirMod(dir.x * - 1) * wordLength,
                yMin: 0 + this.dirMod(dir.y * - 1) * wordLength,
                xMax: this.gridSize - this.dirMod(dir.x) * wordLength,
                yMax: this.gridSize - this.dirMod(dir.y) * wordLength,
            }
        },
        wordPos(bounds) {
            const { xMin, yMin, xMax, yMax } = bounds
            return {
                x: this.randomInt(xMin, xMax),
                y: this.randomInt(yMin, yMax)
            }
        },
        restrictBounds(word, dir) {
            return this.wordPos(this.wordBounds(word.length - 1, dir))
        }
    }
}