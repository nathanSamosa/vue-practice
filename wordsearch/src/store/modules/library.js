import axios from "axios";
import { curateArray } from "@/utilities/mutatesArray";

const state = {
    library: [],
};

const getters = {
    library: state => state.library
};

const actions = {
    async createLibrary({commit}, req) {
        const { category, count } = req
        const res = await axios.get(`https://api.datamuse.com/words?rel_trg=${category}&ml=${category}`);
        const library = curateArray(res.data, count)
        commit('createLibrary', library)
    }
};

const mutations = {
    createLibrary: (state, library) => state.library = library
};

export default {
    state,
    getters,
    actions,
    mutations
};