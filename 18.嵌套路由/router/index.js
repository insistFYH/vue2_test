import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import VueRouter from 'vue-router'
export default new VueRouter({
    routes: [{
            path: '/Home',
            component: Home,
            children: [{
                path: 'News',
                component: News
            }, {
                path: 'Message',
                component: Message
            }]
        },
        {
            path: '/About',
            component: About
        },
    ]
})