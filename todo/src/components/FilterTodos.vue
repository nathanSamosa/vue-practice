<template>
    <div class="filter-todos">
        <h3>Filter Todos:</h3>
        <select @change="filterTodos($event)">
            <option value="200">200</option>
            <option value="100">100</option>
            <option value="50">50</option>
            <option value="20">20</option>
            <option value="10">10</option>
            <option value="5">5</option>
        </select>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'FilterTodos',
    methods: mapActions(['filterTodos']),
}
</script>

<style>
    .filter-todos {
        display: flex;
        height: 50px;
        align-items: center;
    }
    select {
        padding: 6px;
        border: #41b883 1px solid;
    }
</style>