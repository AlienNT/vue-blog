<template>
    <label
        class="v-input__wrapper"
    >
        <input
            class="v-input"
            :type="type"
            :value="value"
            :class="classes"
            :maxlength="maxLength"
            :readonly="readOnly"
            :placeholder="placeholder"
            @input.prevent.stop="(e) => $emit('input', e?.target?.value)"
        >
    </label>
</template>

<script>
export default {
    name: 'VInput',
    props: {
        value: {
            type: String,
            default: null
        },
        type: {
            type: String,
            default: 'text'
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

<style scoped lang="scss">
.v-input__wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex: 1 1 auto;
}
.v-input {
    display: flex;
    width: 100%;
    &:active, &:focus {
        &::placeholder {
            color: transparent;
        }
    }
}

</style>
