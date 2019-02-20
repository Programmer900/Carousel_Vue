<template>
    <div class="container">
        <div class="row">
            <div class="product-slider" :id="params.recommendedProductsHorizontal">
                <h3 v-if="!params.isHideHeaderText">{{ params.headerText }}</h3>
                <h3 v-else>{{ params.backupHeaderText }}</h3>
                <label for="numCarou">Введите количество слайдов</label>
                <input :class="[{error: maxSlides}]" type="text" v-model="numCarousel" id="numCarou" @keydown.enter="loadParams" />
                <br>
                <p class="red-text text-darken-2" v-if="maxSlides">Превышено максимальное значение слайдов. Всего в коллекции {{lengSlides}} слайдов!</p>
                <button @click="loadParams" class="waves-effect waves-light btn">Инициализируйте слайдер</button>
                <carousel :perPage="params.itemsPerPage">
                    <slide v-for="slide in slides" >
                        <img class="slider-img" :src="slide.image" alt="" style='width: 100%; height: 100%'>
                    </slide>
                </carousel>

            </div>
        </div>
    </div>
</template>

<script>
    import { Carousel, Slide } from "vue-carousel";
    import { productDetailsRecommendationsVue } from "../utils.js";
    var slides = require("../slides.js");

    export default {
        name: "product-slider",
        props: ['perPage'],
        components: {
            Carousel,Slide
        },
        data: function() {
            return {
                numCarousel: "",
                slides: slides,
                params: {},
                maxSlides: false,
            }
        },
        computed: {
            lengSlides: function(){
                return this.slides.length
            }
        },
        methods: {
            loadParams: function() {
                var lenghtSlides = this.slides.length;
                if(this.numCarousel > lenghtSlides ) {
                    this.maxSlides = true
                } else {
                    this.params = productDetailsRecommendationsVue();
                    this.params.itemsPerPage = this.numCarousel;
                    this.maxSlides = false
                }
            }
        }
    };
</script>

<style scoped>
    .slider-img {
        width: 100%;
        height: 100%;
    }
    .VueCarousel-slide {
        position: relative;
        background: #42b983;
        color: #fff;
        font-family: Arial;
        font-size: 24px;
        text-align: center;
        min-height: 100px;
    }
    .label {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    input.error {
        border-bottom: 2px solid red;
    }
</style>
