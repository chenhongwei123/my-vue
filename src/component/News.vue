<template>
	<div id="News">
		<el-time-select v-model="value1" :picker-options="{ start: '08:30', step: '00:15', end: '18:30' }" placeholder="选择时间" ref="input1">
			
		</el-time-select>
		 <a href="javascript:void(0)" v-on:click="test1">测试</a>
	</div>
</template>

<script>
	 export default {
    data() {
      return {
        value1: ''
      };
    },
    methods:{
    	test1:function(){
    		console.log(this.$refs.input1.value + " 成功!")
    	}
    }
    
  }
</script>

<style>

</style>