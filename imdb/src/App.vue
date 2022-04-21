<template>
    <div class="app">
        <button v-if="!game.active" @click="newGame()">New Game</button>
        <div v-if="game.active || game.lose" class="game-board">
            <div>
                <h2>{{currentMovie.fullTitle}}</h2>
                <p>{{currentMovie.imDbRating}}</p>
                <h2>{{nextMovie.fullTitle}}</h2>
                <p v-if="game.lose">{{nextMovie.imDbRating}}</p>
                <div v-if="game.active">
                    <button @click="guessRating('higher')">Higher</button>
                    <button @click="guessRating('lower')">Lower</button>
                </div>
            </div>
            
        </div>
        <h2 v-if="game.lose">Game over!</h2>
        <h2 v-if="game.win">Well done! You guessed them all.</h2>
        <h3>Score: {{score}}</h3>
        <h3>High score: {{highScore}}</h3>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { shuffleArray, compareValues } from './config/utils';


export default {
    name: 'App',
    data() {
        return {
            game: {
               active: false,
               lose: false,
               win: false
            },
            movieOrder: [],
            score: 0,
            highScore: this.stateHighScore
        }
    },
    methods: {
        ...mapActions(['fetchMovies', 'updateHighScore']),
        newGame() {
            this.score = 0;
            this.movieOrder = shuffleArray(this.allMovies).filter(movie => movie.imDbRating)
            this.game = {
                active: true,
                lose: false,
                win: false
            }

        },
        guessRating(guess) {
            const result = compareValues(this.currentMovie.imDbRating, this.nextMovie.imDbRating)
            if (guess === result || result === 'tie') {
                const isFinalMovie = this.score === this.movieOrder.length - 2
                isFinalMovie ? this.finishGame('win') : this.score++
            } else {
                this.finishGame('lose');
            }
        },
        finishGame(result) {
            if (result === 'lose') {
                if (this.score > this.highScore) this.setHighScore();
                this.game = {
                    active: false,
                    lose: true,
                    win: false
                }
            }
            if (result === 'win') {
                this.game = {
                    active: false,
                    lose: false,
                    win: true
                }
            }
        },
        setHighScore() {
            this.updateHighScore(this.score)
            this.highScore = this.getHighScore
        }

    },
    computed: {
        ...mapGetters(['allMovies', 'stateHighScore']),
        currentMovie() {
            return this.movieOrder[this.score]
        },
        nextMovie() {
            return this.movieOrder[this.score + 1]
        },
        getHighScore() {
            return this.stateHighScore
        },

        
    },
    created() {
        const hasStoredMovies = this.allMovies.length
        if (hasStoredMovies) {
            console.log("movies already stored in persisted state.")
        } else {
            console.log("fetching movies from api...")
            this.fetchMovies()
        }
        this.highScore = this.stateHighScore
    }
}


</script>

<style>

</style>
