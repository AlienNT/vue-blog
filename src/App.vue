<template>
    <VHeader/>
    <VMain/>
    <VFooter/>
</template>

<script>
import VHeader from '@/components/pageComponents/VHeader'
import VMain from '@/components/pageComponents/VMain'
import VFooter from '@/components/pageComponents/VFooter'
import authMixin from '@/auth/authMixin'

export default {
    name: 'App',
    components: {
        VHeader,
        VMain,
        VFooter
    },
    mixins: [
        authMixin
    ]
}
</script>
<style lang="scss">
@import "assets/css/main.css";

#app {
    height: 100vh;
    padding-top: $headerHeight;
}
</style>
