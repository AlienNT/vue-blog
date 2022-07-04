<template>
    <div class="v-logo__wrapper">
        <router-link
            :to="path"
            class="v-logo"
        >
            <img
                class="v-logo__img"
                :src="logo?.path"
                :alt="logo?.alt"
            >
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'VLogo',
    props: {
        path: {
            type: String,
            default: null
        },
        logo: {
            type: Object,
            default: null
        }
    }
}
</script>

<style scoped>

</style>
