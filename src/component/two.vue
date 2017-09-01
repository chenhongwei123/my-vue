<template>
	<div id="two">
		<!--<div v-show="loading" class="loading">讀取中</div>-->
		<!--<ul v-for="list in lists">
			<li>{{list.text}}</li>
		</ul>-->
	
		
		<ul>
			<li v-for="list in articles">{{list.title}}</li>
			
		</ul>
		
		<div>
			{{ $store.state.count }}
			<button @click="increment">increment</button>
		</div>
        
		<router-link to="/second/first2">点击</router-link>
		<router-view></router-view>

	</div>
</template>

<script>
	import firstcomponent from './firstcomponent.vue'
	export default {
		data() {
			return {
				lists: [{
						"text": "one1"
					},
					{
						'text': "one2"
					},
					{
						'text': "one3"
					},
					{
						'text': "one4"
					}
				],
				articles: [],
				loadFlag: false
			}
		},
		components: {
			firstcomponent
		},
		mounted: function() {
			this.douban()
		},
		methods: {
			loading: function(a) { //是否显示加载动画
				this.loadFlag = a;
				
			},
			douban: function() {
				var that = this;
				that.loading(true);
				this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
					headers: {

					},
					emulateJSON: true
				}).then(function(data) {
					that.loading(false);
					// 这里是处理正确的回调
					console.log(data)
					this.articles = data.body.subjects
					console.log(this.articles)
				}).then(function(response) {
					that.loading(false);
					// 这里是处理错误的回调
					//console.log(response)
				})
			},
			increment() {
				this.$store.commit('increment')
				console.log(this.$store.state.count)
			}
		}

	}
</script>

<style>

</style>