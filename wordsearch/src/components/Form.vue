<template>
    <form @submit="handleSubmit">
        <input
            required
            name="category"
            type="text"
            v-model="form.category"
        />
        <input
            required
            name="count"
            type="number"
            v-model="form.count"
            :min="config.countMin"
            :max="config.countMax"
        />
        <button type="submit">Build wordsearch</button>
    </form>
</template>

<script>
    import { mapActions } from 'vuex';
    import config from '../utilities/config'
    const { FORM } = config

    export default {
        name: "Form",
        data() {
            return {
                config: FORM,
                form: {
                    category: "",
                    count: 10,
                }
            }
        },
        methods: {
        ...mapActions(['createLibrary']),
        handleSubmit(e) {
            e.preventDefault();
            this.createLibrary(this.form)
        }
    },
    }
</script>

<style>

</style>