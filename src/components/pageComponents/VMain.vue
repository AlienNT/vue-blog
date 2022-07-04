<template>
    <main class="v-main">
        <router-view/>
    </main>
</template>

<script>

export default {
    name: 'VMain'
}
</script>

<style scoped lang="scss">
.v-main {
    min-height: calc(100vh - #{$headerHeight});
    //background-size: ;
    background: url("../../assets/img/auth_bg.png") no-repeat scroll center / cover;
}

</style>
