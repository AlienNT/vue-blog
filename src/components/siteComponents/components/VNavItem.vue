<template>
    <div class="v-nav-item__wrapper" v-if="data">
        <router-link
            class="v-nav-item"
            :to="data?.path"
            :class="{
                'gradient-style': data?.path === '/signup'
            }"
            active-class="v-nav-item__active"
        >
            {{ data?.title }}
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'VNavItem',
    props: {
        data: {
            type: Object,
            require: true
        },
        classes: {
            type: String,
            default: null
        }
    }
}
</script>

<style scoped lang="scss">
.v-nav-item {
    color: $darkTextColor;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.5px;
    display: flex;
    flex: 1 1 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    transition: 0.2s ease;
    &:hover {
        border-top: 2px solid transparent;
        border-bottom: 2px solid black;
    }
}
.v-nav-item__active {
    border-top: 2px solid transparent;
    border-bottom: 2px solid black;
}
.gradient-style {
    padding: 5px;
    background: linear-gradient(95.32deg, #313131 0%, #000000 101.64%);
    color: white;
    max-width: 95px;
    height: 26px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>
