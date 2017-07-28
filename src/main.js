// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/routers.js'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false

//开启debug模式
Vue.config.debug = true;
Vue.use(VueResource);
Vue.use(ElementUI)


/* eslint-disable no-new */
//new Vue({
//el: '#app',
//router,
//template: '<App/>',
//components: { App }
//})



// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
	router: router,
	render: h => h(App),
}).$mount('#app')