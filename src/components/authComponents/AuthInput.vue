<template>
    <div class="v-auth-input">
        <div class="label">
            {{ label }}
        </div>
        <div class="input">
            <VInput
                :type="type"
                :placeholder="placeholder"
                :value="value"
                @input="e => $emit('input', e)"
            />
        </div>
    </div>
</template>

<script>
import VInput from '@/components/formComponents/VInput'

export default {
    name: 'AuthInput',
    props: {
        value: {
            type: String,
            default: null
        },
        label: {
            type: String,
            default: null
        },
        type: {
            type: String,
            default: null
        },
        placeholder: {
            type: String,
            default: null
        }
    },
    components: {
        VInput
    }
}
</script>

<style scoped lang="scss">
.v-auth-input {
    display: flex;
    width: 100%;
    padding: 10px;
    background: #fafafa;
    opacity: 0.8;
    gap: 25px;

    .label {
        padding: 5px;
        background: $gradientBgDark;
        color: white;
        max-width: 95px;
        height: 26px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .input {
        flex: 1 1 auto;
        border-radius: 5px;
        overflow: hidden;

    }
}

</style>
