import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Details from '../pages/Details'
import VueRouter from 'vue-router'
const router = new VueRouter({
    routes: [{
            name: 'zhuye',
            path: '/Home',
            component: Home,
            meta: { title: "主页" },
            children: [{
                name: "xingwen",
                path: 'News',
                component: News,
                meta: { title: "新闻", isAuth: true },
            }, {
                name: "xiaoxi",
                path: 'Message',
                component: Message,
                meta: { title: "消息", isAuth: true },
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
            name: "guanyu",
            path: '/About',
            component: About,
            meta: { title: "关于" }
        },
    ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) {
        if (localStorage.getItem('name') === 'zhangping') {
            next()
        } else {
            alert("您暂无权限查看！")
        }
    } else {
        next()
    }
})

router.afterEach((to, from) => {
    if (to.meta.title) {
        document.title = to.meta.title
    } else {
        document.title = "Vue2"
    }
})

export default router