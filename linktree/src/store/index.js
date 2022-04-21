import { createStore } from 'vuex';
import linkTree from './modules/link-tree'

export default createStore({
    modules: {
        linkTree
    }
})