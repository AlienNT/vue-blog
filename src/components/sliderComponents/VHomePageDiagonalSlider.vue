<template>
    <div class="v-diagonal-slider">
        <div class="slider__viewport"
             :style="`clip-path: polygon(${angle}% 0%, 100% 0%, ${100 - angle}% 100%, 0% 100%);`"
        >
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
</template>

<script>
export default {
    name: 'VHomePageDiagonalSlider',
    props: {
        delay: {
            type: Number,
            default: 1000
        },
        angle: {
            type: Number,
            default: 45
        },
        images: {
            type: Array,
            default: null,
            require: true
        }
    },
    data () {
        return {
            isClearInterval: false
        }
    },
    methods: {
        getSrc (path) {
            return require(path)
        },
        setSlider () {
            const wrapper = this.$refs.wrapper
            let count = 0

            const interval = setInterval(() => {
                Math.abs(count / 100) < this.images?.length - 1
                    ? count -= 100
                    : count = 0
                wrapper.style.cssText = `transform: translateX(${count}%)`

                if (this.isClearInterval) {
                    clearInterval(interval)
                }
            }, this.delay)
        },
        destroySlider () {
            this.isClearInterval = true
        }
    },
    mounted () {
        this.setSlider()
    },
    beforeUnmount () {
        this.destroySlider()
    }
}
</script>

<style scoped lang="scss">
.v-diagonal-slider {
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .slider__viewport {
        width: 100%;
        height: 100%;

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
        display: flex;

        img {
            display: block;
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: center;
        }
    }
}

</style>
