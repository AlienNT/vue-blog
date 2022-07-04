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
                    <VHomePageDiagonalSlider/>
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
        @media all and (max-width: 800px) {
            display: none;
        }
    }
}

</style>
