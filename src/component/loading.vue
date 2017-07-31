<template>
	<div id="loading">
		<!--<div v-show="loading" class="loading"></div>
		<button @click="fakeAjax">Ajax</button>-->

	</div>

</template>

<script>
	export default {
		data() {
			return {
				loading: false
			}
		},
		methods: {
			toggleLoading(show = true) {
				this.loading = show
			},
			fakeAjax() {
				this.toggleLoading(true)
				setTimeout(() => {
					this.toggleLoading(false)
				}, 1000)
			}
		},
		ready() {
			this.fakeAjax()
		}
	}
</script>

<style>
	.centerMe {
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}
	
	.loading {
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
		height: 25px;
		width: 10px;
		border-radius: 10%;
		background: #2c3e50;
		border-top-color: #2980b9;
		-webkit-animation: fade2 1s infinite;
		animation: fade2 1s infinite;
		-webkit-transition: background .2s;
		transition: background .2s;
	}
	
	.loading:after,
	.loading:before {
		content: '';
		position: absolute;
		display: block;
		height: 20px;
		width: 10px;
		background: #2c3e50;
		top: 50%;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
		left: -15px;
		border-radius: 10%;
		-webkit-animation: fade1 1s infinite;
		animation: fade1 1s infinite;
		-webkit-transition: background .2s;
		transition: background .2s;
	}
	
	.loading:before {
		left: 15px;
		-webkit-animation: fade3 1s infinite;
		animation: fade3 1s infinite;
	}
	
	@-webkit-keyframes fade1 {
		0% {
			background: #2980b9;
		}
	}
	
	@keyframes fade1 {
		0% {
			background: #2980b9;
		}
	}
	
	@-webkit-keyframes fade2 {
		33% {
			background: #2980b9;
		}
	}
	
	@keyframes fade2 {
		33% {
			background: #2980b9;
		}
	}
	
	@-webkit-keyframes fade3 {
		66% {
			background: #2980b9;
		}
	}
	
	@keyframes fade3 {
		66% {
			background: #2980b9;
		}
	}
</style>