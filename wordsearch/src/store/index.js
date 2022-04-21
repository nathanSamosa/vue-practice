import { createStore } from "vuex";
import library from './modules/library';

// Create store
export default createStore({
    modules: {
        library
    }
})