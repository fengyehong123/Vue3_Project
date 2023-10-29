import { 
    createRouter,
    createWebHashHistory
} from 'vue-router'

import Index from '~/pages/index.vue'
import About from '~/pages/about.vue'
import NotFound from '~/pages/404.vue'

// 路由详情
const routes = [
    {
        path: '/',
        name: '首页',
        component: Index
    },
    {
        path: '/about',
        name: '关于页面',
        component: About
    },
    { 
        // 捕获404页面的写法
        path: '/:pathMatch(.*)*', 
        name: '404页面',
        component: NotFound
    },
];

// 路由的具体配置
const router = createRouter({
    // 项目中使用hash的路由模式
    history: createWebHashHistory(),
    routes
});

export default router