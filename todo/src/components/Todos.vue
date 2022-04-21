<template>
    <div class="todos-container">
        <h3>Todos</h3>
        <div class="legend">
            <h4>Double click to mark as complete</h4>
            <div class="legend-box">
                <div class="is-incomplete">Incomplete</div>
                <div class="is-complete">Complete</div>
            </div>
        </div>
        <div class="todos">
            <div class="todo"
                v-for="todo in allTodos"
                :key="todo.id"
                @dblclick="onDblclick(todo)"
                :class="todo.completed ? 'is-complete' : 'is-incomplete'"
            >
                {{ todo.title }}
                <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Todos',
    methods: {
        ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
        onDblclick(todo) {
            const updTodo = { ...todo, completed: !todo.completed}
            this.updateTodo(updTodo)
        }
    },
    computed: mapGetters(['allTodos']),
    created() {
        this.fetchTodos();
    }
};
</script>

<style scoped>
    .todos-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .legend {
        display: flex;
        flex-direction: column;
    }
    .legend-box > * {
        display: inline-block;
        padding: 5px 15px;
        border-radius: 5px;
        border: 1px solid #ccc;
    }
    .is-complete {
        background: #35495e;
        color: #ccc
    }
    .is-incomplete {
        background: #41b883;
    }
    .todos {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(225px, 350px));
        justify-content: center;
        grid-gap: 1rem;
    }
    .todo {
        border: 1px solid #ccc;
        padding: 1rem;
        border-radius: 5px;
        text-align: center;
        position: relative;
        cursor: pointer;
    }
    i {
        position: absolute;
        bottom: 10px;
        right: 10px;
        color: #fff;
        cursor: pointer;
    }
</style>