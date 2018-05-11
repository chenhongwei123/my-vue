// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/routers.js'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import VueLazyload from 'vue-lazyload'



  import './assets/css/index.scss'


import 'element-ui/lib/theme-chalk/index.css'
// import store from './vuex/vuex.js'
//import iView from 'iview';
//import 'iview/dist/styles/iview.css';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
//import Vuex from 'vuex'
import infiniteScroll from 'vue-infinite-scroll'

import store from './store'
import './mock/index.js' 
// import './assets/css/index.scss'
Vue.config.productionTip = false

//开启debug模式
Vue.config.debug = true;
Vue.use(VueResource);
Vue.use(ElementUI)
Vue.use(infiniteScroll)

Vue.use(VueLazyload, {
  loading: require('./base/loading/loading.gif')
})


// require('./mock/index.js')
//Vue.use(iView);
//Vue.use(Vuex)



// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上
const app = new Vue({
	router: router,
	store: store,
	render: h => h(App),
	components: {
		PulseLoader
	}
}).$mount('#app')