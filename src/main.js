// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/routers.js'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import store from './vuex/vuex.js'
//import Vuex from 'vuex'

Vue.config.productionTip = false

//开启debug模式
Vue.config.debug = true;
Vue.use(VueResource);
Vue.use(ElementUI)
//Vue.use(Vuex)

//const store = new Vuex.Store({
//	state: {
//		count: 1
//	},
//	mutations: {
//		increment(state) {
//			// 变更状态
//			state.count++
//		}
//	}
//})

// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
	router: router,
	store: store,
	render: h => h(App),
}).$mount('#app')