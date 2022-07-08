<template>
    <nav class="v-nav">
        <VNavItem
            v-for="item in data"
            :key="item?.id"
            :data="item"
        />
    </nav>
</template>

<script>
import VNavItem from '@/components/siteComponents/components/VNavItem'

export default {
    name: 'VNav',
    props: {
        data: {
            type: Array,
            default: null
        }
    },
    components: {
        VNavItem
    }
}
</script>

<style scoped lang="scss">
.v-nav {
    gap: 40px;
    display: flex;
    flex: 1 1 auto;
    justify-content: flex-end;
}

</style>
