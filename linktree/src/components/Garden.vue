<template>
    <div id="garden">
        <i
            :class="`btn btn-anim edit-btn fa-solid fa-xl ${toggleIcon(isEditMode)}`"
            @click="toggleEditMode()"
        />
        <h3>Links</h3>
        <Tree />
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import Tree from './Tree.vue';

    export default {
        name: "Garden",
        components: {
            Tree
        },
        computed: mapGetters(['isEditMode']),
        methods: {
            ...mapActions(['toggleEditMode', 'updateTooltip']),
            toggleIcon: e => e ? 'fa-tree' : 'fa-gear',
        }
    }
</script>

<style scoped>
    @import '../assets/styles/garden.css';
</style>
