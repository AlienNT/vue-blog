<template>
    <div class="v-diagonal-slider">
        <div class="slider__viewport">
            <div class="slider__items">
                <div class="wrapper"
                     ref="wrapper"
                >
                    <div
                        class="slider__item"
                        v-for="image in images"
                        :key="image?.id"
                    >
                        <img
                            :src="image?.path"
                            :alt="image?.alt"
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VHomePageDiagonalSlider',
    data () {
        return {
            images: [
                {
                    id: 1,
                    path: require('../../assets/img/jpg/anime2.jpg'),
                    alt: 'image'
                },
                {
                    id: 3,
                    path: require('../../assets/img/jpg/anime24jpg.jpg'),
                    alt: 'image'
                },
                {
                    id: 3,
                    path: require('../../assets/img/jpg/anime5.jpg'),
                    alt: 'image'
                },
                {
                    id: 3,
                    path: require('../../assets/img/jpg/anime6.jpg'),
                    alt: 'image'
                }
            ],
            isClearInterval: false
        }
    },
    methods: {
        setSlider () {
            const wrapper = this.$refs.wrapper
            let count = 1
            const interval = setInterval(() => {
                console.log('count', count)
                if (count < this.images?.length - 1) {
                    count++
                    wrapper.style.cssText = `transform: translateX(${-(100) * count}%)`
                } else {
                    count = 1
                    wrapper.style.cssText = 'transform: translateX(0)'
                }
                if (this.isClearInterval) {
                    clearInterval(interval)
                }
            }, 5000)
        }
    },
    mounted () {
        this.setSlider()
        this.isClearInterval = false
    },
    beforeUnmount () {
        this.isClearInterval = true
    }
}
</script>

<style scoped lang="scss">
.v-diagonal-slider {
    width: 50%;
    min-width: 600px;
    position: absolute;
    top: 0;
    right: 0;
    height: calc(100vh - #{$headerHeight});
    overflow: hidden;

    .slider__viewport {
        width: 50%;
        height: 100%;
        overflow: hidden;
        transform: skew(-25deg);
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .slider__items {
        flex: 0 0 200%;
        width: 100%;
        height: 100%;
        transform: skew(25deg);
        transition: 1s ease;
    }

    .wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        position: absolute;
        transition: 1s ease;
    }

    .slider__item {
        flex: 0 0 100%;
        position: relative;
        width: 100%;
        height: 100%;

        img {
            position: absolute;
            display: block;
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: center;
        }
    }
}

</style>
