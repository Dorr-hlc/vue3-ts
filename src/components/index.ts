// 下面是注册所有的全局组件

// 引入需要注册的全局组件
import SvgIcon from "./SvgIcon/index.vue"

const allGlobalComponent: any = {
    SvgIcon
}

// 对外暴露插件对象
export default {
    // 这里方法名必须叫install方法
    install(app: any) {
        Object.keys(allGlobalComponent).forEach(key => {
            console.log(key);
            // 把所有的对象注册为全局组件
            app.component(key, allGlobalComponent[key])

        })

    }
}