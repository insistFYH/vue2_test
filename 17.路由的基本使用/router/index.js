import About from '../components/About'
import Home from '../components/Home'
import VueRouter from 'vue-router'
export default new VueRouter({
    routes: [{
            path: '/Home',
            component: Home
        },
        {
            path: '/About',
            component: About
        }
    ]
})