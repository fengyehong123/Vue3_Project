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