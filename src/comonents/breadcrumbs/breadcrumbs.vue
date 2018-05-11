<template>
	<div id="breadcrumbs">
		<span>Home/</span>
		<slot name="one"></slot>
		<slot name="two"></slot>
	</div>
</template>

<script>
</script>

<style lang="scss">
// @import url('../../assets/css/index.scss');
	#breadcrumbs{
		width: 100%;
		height: 50px;
		background-color: lavender;
		/*text-align: center;*/
		line-height: 50px;
		/*span{
			margin-left: 2%;
		}*/
		
	}
</style>