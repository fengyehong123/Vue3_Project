import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入WindiCSS
import WindiCSS from 'vite-plugin-windicss'
// 引入node.js中的path模块,给项目中的组件配置别名
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      // 指定为src目录配置别名,别名为 ~
      "~": path.resolve(__dirname, "src")
    }
  },
  plugins: [
    vue()
    // 将WindiCSS添加到插件中
    , WindiCSS()
  ]
})
