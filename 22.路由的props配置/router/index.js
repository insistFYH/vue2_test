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
                    // path: 'Details/:id/:title',
                    path: 'Details',
                    component: Details,
                    // props: true
                    props(route) {
                        return {
                            id: route.query.id,
                            title: route.query.title
                        }
                    }
                }]
            }]
        },
        {
            path: '/About',
            component: About
        },
    ]
})