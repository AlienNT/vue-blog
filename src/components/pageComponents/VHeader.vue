<template>
    <header class="v-header">
        <div class="v-container">
            <div class="v-row">
                <div class="v-header__logo">
                    <VLogo
                        :logo="logo"
                        path="/"
                    />
                </div>
                <div class="v-header__nav">
                    <VNav
                        :data="navigation"
                    />
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import VLogo from '@/components/siteComponents/VLogo'
import VNav from '@/components/siteComponents/VNav'

export default {
    name: 'VHeader',
    components: {
        VLogo,
        VNav
    },
    data () {
        return {
            logo: {
                path: require('@/assets/img/svg/logo.svg'),
                alt: 'logo'
            }
        }
    },
    computed: {
        navigation () {
            return this.$store.getters['navigation/GET_NAVIGATION'] || []
        }
    },
    methods: {
        fetchNavigation () {
            return this.$store.dispatch('navigation/fetchNavigation')
        }
    },
    created () {
        this.fetchNavigation()
    }
}
</script>

<style scoped lang="scss">
.v-header {
    background: $headerBgColor;
    width: 100%;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    min-height: $headerHeight;
    display: flex;
    align-items: center;

    .v-row {
        justify-content: space-between;
    }
}
.v-header__nav {
    align-items: center;
    display: flex;
    flex: 1 1 auto;

}
</style>
