<template>
    <div class="container">
        <Garden />
    </div>
</template>

<script>
    import Garden from './components/Garden.vue'
    export default {
        name: 'App',
        components: {
            Garden
        }
    }
</script>

<style>
    @import './assets/styles/main.css';
    @import './assets/styles/button.css';
</style>

<style scoped>
    .container {
        max-width: var(--w-outer);
        margin: 0;
    }
</style>