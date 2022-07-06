<template>
    <div class="v-home-page">
        <section class="full-screen__section">
            <div class="v-container">
                <div class="v-row">
                    <div class="v-col title-col">
                        <div class="v-home-page__title">
                            Welcome to Gates
                        </div>
                        <div class="v-home-page__description">
                            Get the latest news on your favourite mangas, anime and manhwa around the world!
                        </div>
                    </div>
                </div>
                <div class="slider">
                    <VHomePageDiagonalSlider
                        :delay="5000"
                        :angle="50"
                        :images="images"
                    />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import VHomePageDiagonalSlider from '@/components/sliderComponents/VHomePageDiagonalSlider'

export default {
    name: 'VHomePage',
    components: {
        VHomePageDiagonalSlider
    },
    data () {
        return {
            images: [
                {
                    id: 1,
                    path: require('../assets/img/jpg/anime2.jpg'),
                    alt: 'image'
                },
                {
                    id: 2,
                    path: require('../assets/img/jpg/anime24jpg.jpg'),
                    alt: 'image'
                },
                {
                    id: 3,
                    path: require('../assets/img/jpg/anime5.jpg'),
                    alt: 'image'
                },
                {
                    id: 4,
                    path: require('../assets/img/jpg/anime6.jpg'),
                    alt: 'image'
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
.v-home-page {
}

.full-screen__section {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - #{$headerHeight});

    .title-col {
        flex: 0 0 50%;
        position: relative;
        z-index: 2222;
    }

    .v-home-page__title {
        font-family: 'Varela', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 85px;
        line-height: 95px;
        letter-spacing: 3px;
        color: #ffffff;

    }

    .v-home-page__description {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 28px;
        letter-spacing: 0.5px;
        color: #fafafa;
        opacity: 0.7;
    }

    .slider {
        position: fixed;
        display: flex;
        top: $headerHeight;
        right: 5%;
        width: 500px;
        height: calc(100vh - #{$headerHeight});

        @media all and (max-width: 800px) {
            display: none;
        }
    }
}

</style>
