<template>
	<div id="app">
		<!--<firstcomponent></firstcomponent>-->
		<!--<img src="./assets/logo.png">
		<h1>{{ msg }}</h1>
		<h2>Essential Links</h2>-->
		<!--
		<el-row class="tac">
			<el-col :span="3">
				<h5>带 icon</h5>
				<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-message"></i>导航一</template>
						<el-menu-item-group>
							<template slot="title">分组一</template>
							<el-menu-item index="1-1">
								<router-link to="/first">点我跳转到第一页</router-link>
							</el-menu-item>
							<el-menu-item index="1-2">
								<router-link to="/second">点我跳转到第二页</router-link>
							</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="分组2">
							<el-menu-item index="1-3">选项3</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="1-4">
							<template slot="title">选项4</template>
							<el-menu-item index="1-4-1">选项1</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
					<el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
				</el-menu>
			</el-col>
		</el-row>-->

		<el-row :gutter="10">
			<el-col :xs="8" :sm="6" :md="4" :lg="3">
				<div class="grid-content bg-purple">
					<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
						<el-submenu index="1">
							<template slot="title"><i class="el-icon-message"></i>导航一</template>
							<el-menu-item-group>
								<template slot="title">分组一</template>
								<el-menu-item index="1-1">
									<router-link to="/first">点我跳转到第一页</router-link>
								</el-menu-item>
								<el-menu-item index="1-2">
									<router-link to="/second">点我跳转到第二页</router-link>
								</el-menu-item>
							</el-menu-item-group>
							<el-menu-item-group title="分组2">
								<el-menu-item index="1-3">选项3</el-menu-item>
							</el-menu-item-group>
							<el-submenu index="1-4">
								<template slot="title">选项4</template>
								<el-menu-item index="1-4-1">选项1</el-menu-item>
							</el-submenu>
						</el-submenu>
						<el-menu-item index="2" @click="url_to"><i class="el-icon-menu"></i>导航二</el-menu-item>
						<el-menu-item index="3"  @click="url_to2"><i class="el-icon-setting"></i>导航三</el-menu-item>
					</el-menu>
				</div>
			</el-col>
			
			<el-col :xs="4" :sm="6" :md="8" :lg="9">
				<div class="grid-content bg-purple-light">
					<router-view></router-view>
					
				</div>
			</el-col>
			
			<!--<el-col :xs="4" :sm="6" :md="8" :lg="9">
				<div class="grid-content bg-purple"></div>
			</el-col>
			
			<el-col :xs="8" :sm="6" :md="4" :lg="3">
				<div class="grid-content bg-purple-light"></div>
			</el-col>-->
		</el-row>

		<!--<ul>
			<li>
			

				<router-link to="/first">点我跳转到第一页</router-link>

			</li>
			<li>
				<router-link to="/second">点我跳转到第二页</router-link>
			</li>
		</ul>-->
		<!--<router-view></router-view>-->

	</div>
</template>

<script>
	import firstcomponent from './component/firstcomponent.vue'
	//	import two from './component/two.vue'
	export default {
		name: 'app',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		components: {
			firstcomponent
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			url_to(){
				this.$router.push({ path: '/gwc' })
			},
			url_to2(){
				this.$router.push({ path: '/Card' })
			}
		}
	}
</script>

<style>
	.el-col {
		border-radius: 4px;
	}
	
	.bg-purple-dark {
		background: #99a9bf;
	}
	
	.bg-purple {
		background: #d3dce6;
	}
	
	.bg-purple-light {
		background: #e5e9f2;
		height: 500px;
	}
	
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
	/*#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
	
	h1,
	h2 {
		font-weight: normal;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		display: inline-block;
		margin: 0 10px;
	}
	
	a {
		color: #42b983;
	}*/
</style>