import Vue from 'vue'
import App from './App.vue'
import { hello } from './mixin'
Vue.config.productionTip = false
Vue.mixin(hello)
new Vue({
    render: (h) => h(App)
}).$mount('#app')