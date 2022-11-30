import Vue from 'vue'
import App from './App.vue'
import { DatePicker, Carousel, CarouselItem } from 'element-ui'

Vue.config.productionTip = false
Vue.component('el-date-picker', DatePicker)
Vue.component('el-carousel', Carousel)
Vue.component('el-carousel-item', CarouselItem)
new Vue({
    render: (h) => h(App),
}).$mount('#app')