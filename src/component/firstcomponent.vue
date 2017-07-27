<template>
	<div id="firstcomponent">
		<h1>my first Vue</h1>
		<p>{{first}}</p>
		<input type="text"  v-model="first" />
	</div>
</template>

<script>
	export default {
		data(){
			return{
				first:"你好"
			}
		}
	}
</script>

<style>
	
</style>



