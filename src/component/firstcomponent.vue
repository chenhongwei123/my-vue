<template>
	<div id="firstcomponent">
		<ul v-for="entry in data">
			<li>{{entry.text}}</li>
		</ul>
		<h1>my first Vue</h1>
		<p>{{first}}</p>
		<input type="text" v-model="first" />
	</div>
</template>

<script>
	export default {
		props: {
			data: Array
		},
		data() {
			return {
				first: "你好"
			}
		}
	}
</script>

<style>

</style>