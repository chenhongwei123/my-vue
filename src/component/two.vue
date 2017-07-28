<template>
	<div id="two">
		<!--<ul v-for="list in lists">
			<li>{{list.text}}</li>
		</ul>-->
		<!--<ul>
			<li v-for="list in articles">{{list.title}}</li>
		</ul>-->
        <firstcomponent></firstcomponent>
		<router-link to="/second/first2">点击</router-link>
		<router-view></router-view>
		<!--<li>
				<router-link to="/second">点我跳转到第二页</router-link>
			</li>-->
        
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
				articles: []
			}

		},
		components: {firstcomponent},
		mounted: function() {
			this.douban()
		},
		methods: {
			douban: function() {
				this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
					headers: {

					},
					emulateJSON: true
				}).then(function(data) {
					// 这里是处理正确的回调
					console.log(data)
					this.articles = data.body.subjects
					console.log(this.articles)
				}).then(function(response) {
					// 这里是处理错误的回调
					//console.log(response)
				})
			}
		}
	}
</script>

<style>

</style>