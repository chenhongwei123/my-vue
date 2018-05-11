<template>
  <div class="conbox" >
    <h1>多选绑定一个数组</h1>
    <input type="checkbox" id="a1" v-model="datas" value="吃饭">
    <label for="a1">吃饭</label>
    <input type="checkbox" id="a2" v-model="datas" value="睡觉">
    <label for="a2">睡觉</label>
    <input type="checkbox" id="a3" v-model="datas" value="打豆豆">
    <label for="a3">打豆豆</label>
    <p >
      {{datas}}
    </p>
    <hr>

    <h1>Vue.js中 watch 的高级用法</h1>
    <p>FullName: {{fullName}}</p>
    <p>FirstName: <input type="text" v-model="firstName"></p>
    <hr>

    <h1>自定义指令 (directive)</h1>
    <input v-focus>
    <div id='dir'  v-tip="{text: tipText }">
      <!-- <p id="tip"></p> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [],
      firstName: "Dawei",
      lastName: "Lou",
      fullName: "",
      tipText: "hello word"
    };
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function(el) {
        el.focus();
      }
    },
    tip: {
      inserted: function(el, binding) {
        var tipDom = document.querySelector("#tip");
        if (tipDom) {
          // 如果已经存在，不需要创建 DOM
          // do something
          console.log("1")
        } else {
          console.log("2")
          // 如果不存在，创建 DOM
          tipDom = document.createElement("p");
          tipDom.setAttribute("id", "tip");
          document.querySelector("#dir").appendChild(tipDom);
          tipDom.innerHTML=binding.value.text
          // console.log(binding)
          // do something
        }
        // 为绑定该指令的元素注册事件
        el.addEventListener("mouseenter", function() {
         tipDom.style.display = 'block';
          //  alert("1")
          // do something
        });
        el.addEventListener("mouseleave", function() {
           tipDom.style.display = 'none';
          //  alert("2")
          // do something
        });
      }
    }
  },

  watch: {
    firstName: {
      handler(newName, oldName) {
        this.fullName = newName + " " + this.lastName;
      },
      // 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法
      immediate: true
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 20px;
  color: rgb(47, 0, 255);
}
#dir{
  width: 150px;
  height: 50px;
  border: 1px solid rgb(204, 204, 204)
  
}
p{
  width: 100px;
  height: 50px;
}
</style>
