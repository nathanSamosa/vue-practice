import axios from "axios"


const state = {
    movies: [],
    highScore: 0
}

const getters = {
    allMovies: (state) => state.movies,
    stateHighScore: (state) => state.highScore
}

const actions = {
    async fetchMovies({ commit }) {
        const res = await axios.get('https://imdb-api.com/en/API/MostPopularMovies/k_t66no0vf')
        console.log(res.data.items)
        commit('setMovies', res.data.items)
    },
    async updateHighScore({ commit }, score) {
        commit('updateHighScore', parseInt(score))
    }
}

const mutations = {
    setMovies: (state, movies) => state.movies = movies,
    updateHighScore: (state, score) => state.highScore = score,
}

export default {
    state,
    getters,
    actions,
    mutations
}