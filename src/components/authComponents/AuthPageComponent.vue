<template>
    <div class="v-auth-page">
        <div class="v-container">
            <div class="form-wrapper">
                <slot name="form"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AuthPageComponent'
}
</script>

<style scoped lang="scss">
.v-auth-page {
    display: flex;
    flex: 1 1 100%;
    background: url("../../assets/img/auth_bg.png") no-repeat center / cover;
    min-height: calc(100vh - #{$headerHeight});
    justify-content: center;
    align-items: center;
    .v-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .form-wrapper {
        max-width: 406px;
        width: 100%;
    }
}

</style>
