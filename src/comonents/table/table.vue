<template>
    <div @click="changers" >
        <h1>Table</h1>
        <ul >
           <span v-for="item in list">{{item.author_name}} </span>
       </ul>
       <button @click="changers">+</button>
       
    </div>
</template>

<script>
export default {
 data() {
     return {
         index: "1"
     }
 },
  props: {
    list: Array
  },
  created() {
    console.log(this.list);
  },
  methods: {
      changers() {
        this.$emit('getindex',this.index) 
      }
  },
}
</script>

<style scoped>

</style>