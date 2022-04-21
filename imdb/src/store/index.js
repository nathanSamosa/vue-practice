import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";
import movies from './modules/movies';

export default createStore({
    modules: {
        movies
    },
    plugins: [createPersistedState()]
})