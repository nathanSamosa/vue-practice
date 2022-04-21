<template>
    <div class="link-form">
        <div>
            <label>
                Title:
                <input v-model="form.title" />
            </label>
            <label>
                Path:
                <input v-model="form.path" />
            </label>
        </div>
        <div class="confirm-edit container">
            <span :show="pathError">Please include "https://www." at the start of your path.</span>
            <i class="btn-anim fa-solid fa-xmark" @click="handleXmark()"/>
            <i class="btn-anim fa-solid fa-check" @click="handleSubmit()"/>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "LinkForm",
    props: {
        link: Object
    },
    emits: ['isEditForm'],
    data() {
        return {
            form: { ...this.link },
            pathError: false
        }
    },
    methods: {
        ...mapActions(['updateLink']),
        handleXmark() {
            this.form = { ...this.link }
            this.$emit('isEditForm')
        },
        handleSubmit() {
            if ( !this.form.path.includes("https://www.") ) {
                this.pathError = true;
                return
            }
            this.updateLink(this.form)
            this.$emit('isEditForm')
        }
    },
    watch: {
        pathError() {
            setTimeout(() => this.pathError = false, 5000)
        }
    }
}
</script>

<style>
    @import '../assets/styles/link-form.css';
</style>