import { createApp } from 'vue'
import ElementPlus from 'element-plus'
// 引入element-plus 和 WindiCSS
import 'element-plus/dist/index.css'
import 'virtual:windi.css'

import App from './App.vue'

// 引入路由
import router from './router/index.js'

// 创建app实例
const app = createApp(App);
// 使用ElementPlus组件
app.use(ElementPlus);
// 使用路由
app.use(router);

app.mount('#app');
