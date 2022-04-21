<template>
  <div class="tree container">
        <div
            class="links container"
            v-for="link in allLinks"
            :key="link.id"
        >
            <div class="link container" :isEditMode="isEditMode">
                <div
                    class="link-event-listener"
                    @click="handleNav(link, isEditMode)"
                />
                <Link
                    :link="link"
                    :isEditMode="isEditMode"
                    @isEditForm="toggleIsEditForm(link.id)"
                />
                <LinkTooltip
                    :link="link"
                    :isEditMode="isEditMode"
                />
            </div>
            <LinkForm
                v-if="isEditForm === link.id"
                :showEditForm="isEditForm === link.id"
                :link="link"
                @isEditForm="isEditForm = null"
            />
        </div>
        <div v-if="isEditMode">+</div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import Link from './Link.vue'
    import LinkTooltip from './LinkTooltip.vue'
    import LinkForm from './LinkForm.vue'

    export default {
        name: "Tree",
        components: { Link, LinkTooltip, LinkForm },
        computed: mapGetters(['allLinks', 'isEditMode', 'tooltip']),
        data() {
            return {
                isEditForm: null
            }
        },
        methods: {
            ...mapActions(['updateTooltip']),
            handleNav(link, isEditMode) {
                !isEditMode ? window.open(link.path) : this.updateTooltip({ model: "link", id: link.id })
            },
            toggleIsEditForm(id) { this.isEditForm = this.isEditForm === id ? null : id }
        },
        watch: {
            isEditMode() {
                this.isEditForm = null;
            }
        }
    }
</script>

<style scoped>
    @import '../assets/styles/tree.css';
</style>