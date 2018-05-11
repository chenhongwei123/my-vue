<template>
    <div  class="conbox">
        <h1>{{xc}}</h1>
        <input v-focus>
        <Table :list="lists" @getindex='index'></Table>
      
    </div>

</template>
<script>
import { mapGetters } from "vuex";
import Table from "./../table/table";
export default {
  data() {
    return {
      xc: ""
    };
  },
  methods: {
    index(data) {
      this.xc = data;
      console.log(data);
    }
  },
  computed: {
    ...mapGetters(["lists"])
  },
  created() {
    console.log(this.lists);
  },
  components: {
    Table
  },
  directives: {       //自定义指令
    focus: {
      // 指令的定义
      bind:function(el){
       el.style.backgroundColor = "#ccc"
      },
      inserted: function(el) {
        el.focus();
      }
    }
  }
};
</script>
<style>
  .conbox{
     margin-left: 10%; 
  }
</style>
