<template>
    <h1>Wordsearch Generator</h1>
    <p>Enter a keyword and a puzzle of associated words will be generated!</p>
    <Form />
    <Grid :library="library" />
    <ul>
        <li
            class="hidden-word"
            v-for="word in library"
            :key="word"
        >
            {{word}}
        </li>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import Grid from './components/Grid.vue'
import Form from './components/Form.vue'

export default {
    name: 'App',
    components: {
        Grid, Form
    },
    computed: {
        ...mapGetters(['library'])
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 60px;
}
</style>
