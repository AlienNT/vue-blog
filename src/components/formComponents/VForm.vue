<template>
    <div class="v-form__wrapper">
        <form
            class="v-form"
            :class="classes"
            @submit.prevent.stop="e => $emit('submit', e)"
        >
            <div class="v-form__inputs">
                <slot name="inputs"/>
            </div>
            <div class="v-form__buttons">
                <slot name="buttons"/>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'VForm',
    props: {
        classes: {
            type: String,
            default: null
        }
    }
}
</script>

<style scoped>

</style>
