var Vue = require('vue')
// var VueRouter = require('vue-router') // BUG: Вызывает ошибку "TypeError: o is not a constructor"
// Чтобы исправить данную ошибку необходимо использовать один из следующих вариантов подключения
var VueRouter = require('vue-router').default
// import VueRouter from 'vue-router'

var Home = require('./views/Homeview.vue')
var About = require('./views/About.vue')
var News = require('./views/News.vue')
var Post = require('./views/Post.vue')

Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/news', component: News },
    { path: '/post/:id', name: 'post', component: Post }
  ]
})

new Vue({
  el: '#app',
  router: router
})
