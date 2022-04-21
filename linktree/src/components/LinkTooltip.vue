<template>
    <span
        class="tooltip"
        :data="showTooltip"
    >
        Links are disabled in edit mode
    </span>
</template>

<script>
import { mapGetters } from 'vuex';

const tooltipTimer = 2500;

export default {
    name: "LinkTooltip",
    props: {
        link: Object,
        isEditMode: Boolean,
    },
    data() {
        return {
            model: "link",
            showTooltip: false
        }
    },
    computed: {
        ...mapGetters(['tooltip']),
    },
    methods: {
        isValidTooltip() {
            return (this.tooltip.id === this.link.id && this.tooltip.model === this.model)
        }
    },
    watch: {
        tooltip() {
            if ( this.isValidTooltip() ) {
                this.showTooltip = true;
                setTimeout(() => this.showTooltip = false, tooltipTimer)
            }
        },
        isEditMode() {
            this.showTooltip = false;
        }
    }
}
</script>

<style scoped>
    .tooltip {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        background-color: var(--clr-white1);
        color: var(--clr-blue1);
        font-weight: bold;
        width: fit-content;
        border-radius: calc( var(--link-height)*0.1 );
        padding:
            calc( var(--link-height)*0.1 )
            calc( var(--link-height)*0.3 );
        opacity: 0;
        transition-duration: 0.25s;
        z-index: 1;
        pointer-events: none;
    }

    .tooltip[data="true"] {
        opacity: 1;
        animation: scaleBounce 0.5s forwards;
    }

    @keyframes scaleBounce {
    0% {
        transform: translateX(-50%) scale(0);
    }
    50% {
        transform: translateX(-50%) scale(1.1);
    }
    100% {
        transform: translateX(-50%) scale(1);
    }
}
</style>