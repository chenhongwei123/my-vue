<template>
	<div id="app">
		<Top></Top>
		<Breadcrumbs>
			<span slot="one">Goods</span>
		</Breadcrumbs>
		<router-view> </router-view>
	</div>
</template>

<script>
	import Top from './comonents/top/top'
	import Breadcrumbs from './comonents/breadcrumbs/breadcrumbs'
	// import Listview from './comonents/listview/listview'
	import axios from "axios"
	export default {
		data() {
			return {
				gwcslist: []
			}
		},
		mounted() {
			
		},
		methods: {

		},
		components: {
			Top,
			Breadcrumbs,
			
		}
	}
</script>

<style lang="scss">
	.container {
		/*background: #2980B9;*/
		.sort {
			width: 100%;
			.sort-up {
				float: right;
			}
		}
	}

	.box {
		width: 100%;
		display: -webkit-flex;
		display: flex;
		.filter {
			/*flex: 1;*/
			min-height: 200px;
			width: 20%;
			padding: 0 20px;
			color: #605f5f;
			transition: right .5s ease-out;
		}
		.gwclist {
			flex: 1;
			background-color: #E6E6FA;
			li {
				/*width: 32.27513%;*/
				margin-right: 1.5873%;
				margin-bottom: 1.5873%;
				float: left;
				.pic {
					float: left;
					width: 110px;
					height: 110px;
					border: 1px solid #e9e9e9;
					img {
						width: 100%;
						height: 100%;
					}
				}
				.main {
					float: left;
					margin-left: 5%;
					/*width: 110px;
					height: 50px;*/
				}
			}
		}
	}

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
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
</style>
