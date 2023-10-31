1. 查看npm版本
`npm -v`

2. 查看镜像版本
`npm config get registry`

3. WindiCSS 框架

⏹vite.config.js中的配置
```javascript
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [
    // vue()
    // 将WindiCSS添加到插件中
    , WindiCSS()
  ]
})
```

⏹main.js中引入
```javascript
import 'virtual:windi.css'
```

⏹使用
```vue
<template>
  <button class="btn">按钮</button>
</template>

<style>
  .btn {
    /* @apply 是WindiCSS中的指令,可以将css框架中的样式类组合到一起,让代码更加简洁 */
    @apply bg-purple-500 
    text-indigo-50 
    px-4 
    py-2 
    rounded-full 
    transition-all 
    duration-500 
    hover:( bg-purple-900)
    focus:(ring-8 ring-purple-900);
  }
</style>
```

4. 配置别名
**项目中需要导入很多组件,如果不取别名的话,导入组件的路径会写的很长**

✅vite.config.js
```javascript
import { defineConfig } from 'vite'
// 引入node.js中的path模块,给项目中的组件配置别名
import path from "path"

export default defineConfig({
  resolve:{
    alias:{
      // 指定为src目录配置别名,别名为 ~
      "~": path.resolve(__dirname, "src")
    }
  }
})

// 其他页面导入组件的时候,只需要像下面这样书写即可
import Index from '~/pages/index.vue'
```

5. 配置路由
✅`/router/index.js`
```javascript
import { 
    createRouter,
    createWebHashHistory
} from 'vue-router'

import Index from '~/pages/index.vue'

// 路由详情
const routes = [
  {
    path: '/',
    name: '首页',
    component: Index
  },
  { 
    // 捕获404页面的专属写法
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
```

✅main.js
```javascript
import { createApp } from 'vue'

import router from './router/index.js'

// 创建app实例
const app = createApp(App);
// 使用路由
app.use(router);
// 将app实例挂载到节点上
app.mount('#app');
```

✅App.vue
```html
<!-- 在使用路由的页面添加如下标签即可 -->
<router-view></router-view>
```