import { createStore } from "vuex";
import todos from './modules/todos';

// Create store
export default createStore({
    modules: {
        todos
    }
})