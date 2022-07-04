<template>
    <div class="v-button__wrapper">
        <button
            class="v-button"
            :class="classes"
            :disabled="disabled"
            :type="type"
            @click.stop.prevent="() => $emit('click')"
        >
            {{ label }}
        </button>
    </div>
</template>

<script>
export default {
    name: 'VButton',
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
    }
}
</script>

<style scoped lang="scss">
.auth-submit-btn {
    background: $gradientBgDark;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    letter-spacing: 0.5px;
    color: #ffffff;
    border: 2px solid #FFFFFF;
    border-radius: 3px;
    height: 26px;
    width: 86px;
    padding: 0 15px;
}

</style>
