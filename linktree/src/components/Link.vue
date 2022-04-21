<template>
    <i :class="`link-logo fa-brands fa-${parseLogo(link.path)} fa-2xl`" />
    <div class="link-title">{{ link.title }}</div>
    <div class="link-toolbar" :isEditMode="isEditMode" >

        <i
            class="btn-anim link-trash fa-solid fa-pencil"
            @click="$emit('isEditForm')"
        />
        <i
            class="btn-anim link-trash fa-solid fa-trash"
            @click="showDeleteConfirm = true"
        />
        <div class="confirm-delete" :showDeleteConfirm="showDeleteConfirm">
            Are you sure?
            <i class="btn-anim fa-solid fa-xmark" @click="showDeleteConfirm = false"/>
            <i class="btn-anim fa-solid fa-check" @click="deleteLinkById(link.id)"/>
        </div>
        
        
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: "Link",
        props: {
            link: Object,
            isEditMode: Boolean,
        },
        emits: ['isEditForm'],
        data() {
            return {
                showDeleteConfirm: false,
                showEditForm: false,
                form: {
                    title: this.link.title,
                    path: this.link.path
                }
            }
        },
        methods: {
            ...mapActions(['deleteLinkById']),
            parseLogo(path) {
                const { hostname } = new URL(path)
                const start = hostname.indexOf(".") + 1
                const end = hostname.indexOf(".", start)
                return hostname.slice(start, end)
            }
        },
        watch: {
            isEditMode() {
                this.showDeleteConfirm = false
            }
        }
    }
</script>

<style>
    @import '../assets/styles/link.css';
</style>