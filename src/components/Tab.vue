<template>
    <div v-show="isActive">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'tab',
        props: {
            title: {
                type: String,
                default: 'Tab'
            }
        },
        data() {
            return {
                id: this._uid,
                isActive: false
            }
        }
    }
</script>
