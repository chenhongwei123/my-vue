import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
// 定义组件, 也可以像教程之前教的方法从别的文件引入
//const First = {
//	template: '<div><h2>我是第 1 个子页面</h2></div>'
//}
import two from '../component/two.vue'
import News from '../component/News.vue'
import firstcomponent from '../component/firstcomponent.vue'
import gwc from '../component/gwc.vue'
import Card from '../component/Card.vue'
import loading from '../component/loading.vue'
// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [{
			path: '/first',
			component:firstcomponent
		},
		{
			path:'/',
			component:firstcomponent
		},
		{
			path: '/second',
			component: two,
			children: [{
					path: 'first2',
					component: News
			        }]
		},
//		{
//			path: '/',
//			component: two
//		},
		{
			path: '/gwc',
			component: gwc
			
		},
		{
			path: '/Card',
			component: Card
			
		},
		{
			path: '/loading',
			component: loading
			
		}
	]
})

export default router