<template>
    <div class="v-textarea__wrapper">
        <textarea
            class="v-textarea"
            :value="value"
            :class="classes"
            :maxlength="maxLength"
            :readonly="readOnly"
            :placeholder="placeholder"
            @input.prevent.stop="(e) => $emit('input', e?.target?.value)"
        />
    </div>
</template>

<script>
export default {
    name: 'VText',
    props: {
        value: {
            type: String,
            default: null
        },
        placeholder: {
            type: String,
            default: null
        },
        maxLength: {
            type: Number,
            default: null
        },
        readOnly: {
            type: Boolean,
            default: false
        },
        classes: {
            type: String,
            default: null
        }
    }
}
</script>

<style scoped>

</style>
