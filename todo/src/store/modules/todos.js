import axios from 'axios';

//App-level state
const state = {
    todos: []
};

//Get data from state
const getters = {
    allTodos: (state) => state.todos
};

//Commit a mutation when called from components
const actions = {
    async fetchTodos(mutations) {
        const { commit } = mutations;
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
        commit('setTodos', res.data);
    },
    async addTodo(mutations, title) {
        console.log(title)
        const { commit } = mutations;
        const newTodo = {
            title,
            completed: false
        }
        const res = await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);
        console.log(res.data)
        commit('newTodo', res.data);
    },
    async deleteTodo(mutations, id) {
        const { commit } = mutations;
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('removeTodo', id);
    },
    async filterTodos(mutations, e) {
        const { commit } = mutations;
        const limit = parseInt(e.target.value)
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
        commit('setTodos', res.data)
    },
    async updateTodo(mutations, updatedTodo) {
        const { commit } = mutations
        const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`, updatedTodo)
        commit('updateTodo', res.data)
    }
};

//Mutate the state
const mutations = {
    setTodos: (state, todos) => state.todos = todos,
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    updateTodo: (state, updTodo) => state.todos = state.todos.map(todo => todo.id === updTodo.id ? updTodo : todo)
};

export default {
    state,
    getters,
    actions,
    mutations
}