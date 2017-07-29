<template>
	<div id="gwc">
		<ul>
			<li v-for="(lists,index) in list" @click="btn_index(lists)">{{lists.text}}</li>
		</ul>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				list: [{
						text: "1"
					},
					{
						text: "2"
					},
					{
						text: "3"
					},
					{
						text: "4"
					}
				]
			}
		},
		methods:{
			btn_index(lists){
				console.log(lists)
				var index=this.list.indexOf(lists)
				alert(index)
			}
		}
	}
</script>

<style>

</style>