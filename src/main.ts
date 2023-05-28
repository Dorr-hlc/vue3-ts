import { createApp } from 'vue'

import App from '@/App.vue'
// 引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 配置elementplus国际化
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// svg插件
import 'virtual:svg-icons-register'
const app = createApp(App)
// 引入全局组件
import globalComponent from "@/components"
// 安装自定义插件
app.use(globalComponent)
// 安装element-plus插件
app.use(ElementPlus, {
  locale: zhCn,
})

// 将应用挂载
app.mount('#app')
