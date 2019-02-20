<template>
    <section class="main">
        <div class="container">
            <h2>Работы</h2>
            <label for="slidesNum">Выберите кол-во слайдов</label>
            <input type="text" id="slidesNum" v-model="slidesNum" @input="onReload">
            <p>{{vlSlidesMod}}</p>
            <br>
            <br>
            <carousel
                    @change="change"
                    @updated="updated"
                    :items="vlSlidesMod"
                    class="owlSlides"
                    :autoplay="true"
                    :autoHeight="false"
                    :dots="false"
                    :responsive="response"
            >
                <img v-for="slide in slides" class="carou-item"  :src="slide.image" />
            </carousel>
        </div>
    </section>
</template>

<script>

    import carousel from 'vue-owl-carousel'
    var slides = require('../slides')

    export default {
        name: "Homeview",
        props: ['items','autoplay','autoHeight','dots','responsive'],
        components: { carousel },
        data: function() {
            return {
                slides: slides,
                slidesNum: 2
            }
        },
        computed: {
            vlSlidesMod: function () {
                return this.slidesNum * 1
            }
        },
        methods: {
            onReload: function (){

                console.log('reload')
            },
            change: function(){
                console.log('start');
            },
            updated: function(){
                console.log('Upd');
            }
        },
        watch: {
            slidesNum: function (val) {
                console.log(val*2)
            }
        }
    }

</script>

