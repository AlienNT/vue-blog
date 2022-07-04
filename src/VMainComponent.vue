<template>
    <div></div>
</template>

<script>
export default {
    name: 'VMainComponent',
    computed: {
        posts () {
            return this.$store.getters['posts/GET_POSTS']
        }
    },
    methods: {
        fetchPosts () {
            return this.$store.dispatch('posts/fetchPosts')
        }
    },
    watch: {
        posts (e) {
            console.log('posts', e)
        }
    }
}
</script>

<style lang="scss">
@import "assets/css/main";

</style>
