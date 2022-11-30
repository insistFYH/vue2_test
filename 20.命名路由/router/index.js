import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Details from '../pages/Details'
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
                component: Message,
                children: [{
                    name: "xiangqing",
                    path: 'Details',
                    component: Details
                }]
            }]
        },
        {
            path: '/About',
            component: About
        },
    ]
})