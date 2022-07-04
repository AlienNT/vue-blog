<template>
    <div class="v-auth-button">
        <VButton
            :type="type"
            :disabled="disabled"
            classes="auth-submit-btn"
            :label="label"
            @click="() => $emit('click')"
        />
    </div>
</template>

<script>

import VButton from '@/components/formComponents/VButton'

export default {
    name: 'AuthButton',
    props: {
        type: {
            type: String,
            default: 'button'
        },
        label: {
            type: String,
            default: 'Button'
        },
        classes: {
            type: String,
            default: null
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    components: {
        VButton
    }
}
</script>

<style scoped lang="scss">
.v-auth-button {
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>
