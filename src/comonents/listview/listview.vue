<template id="listview">
  <el-container>
    <el-header>
      <a href="javascript:void(0)" class="price sort-up" @click="issort">Price
        <i :class="sort?'el-icon-sort-up':'el-icon-sort-down'"></i>
      </a>
    </el-header>
    <el-container>
      <el-aside>
        <dl class="filter-price" style="height: 100px;">
          <dt>Price:</dt>
          <dd v-for="(list,index) in FilterPrice">
            <a href="javascript:void(0)" class="cur" @click="CFilterPrice(index)">{{list.price}}</a>
          </dd>
        </dl>
      </el-aside>
      <el-main>
        <!-- <ul v-for="item in lx">
          <p>{{item}}</p>
        </ul> -->
        <ul>
          <li class="lists" v-for="(item,index) in gwcslist">
            <img v-lazy="`static/`+item.productImage" />
            <p class="dataName">{{item.productName}}</p>
            <p class="price">{{"$"+item.salePrice}}</p>
            <button @click="btn(item)">加入购物车</button>
          </li>

        </ul>
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="30">
          <!-- 加载中.... -->
          <div class="loading" v-show='loading'>
            <img width="24" height="24" src="../../base/loading/loading.gif" alt="">
          </div>
        </div>
      </el-main>

    </el-container>
  </el-container>
</template>
<script>

import axios from "axios";
import { mapMutations } from "vuex";
export default {
  
  data() {
    return {
      gwcslist: [],
      page: 1,
      pageSize: 8,
      sort: true,
      priceLevel: "all",
      busy: true,
      loading: false,
      FilterPrice: [
        {
          price: "0.00 - 100.00"
        },
        {
          price: "100.00 - 500.00"
        },
        {
          price: "500.00 - 1000.00"
        },
        {
          price: "1000.00 - 5000.00"
        },
        {
          price: "all"
        }
      ],
      lists: [],
      lx: [1, 2, 3, 4]
    };
  },
  mounted() {
    this.getgwcs();
    // console.log(this.FilterPrice);
    this.getlist();

    this.getMock()
  },
  methods: {
    getMock(){
       axios.get("/lists", {}).then(res => {
        this.lists = res.data.articles;
        //  console.table(this.lists);
         this.setlist(this.lists);
        console.log(res.data);
      });
    },


    getlist() {
      axios.get("/list/listusers", {}).then(res => {
        // this.lists = res.data.users;
        //  console.table(this.lists);
        console.log(this.lists);
        // this.setlist(this.lists);
      });
    },
    getgwcs(falg) {
      //数据加载
      //  let that=this
      //  console.log(this)
      this.loading = true;
      let param = {
        page: this.page,
        pageSize: this.pageSize,
        sort: this.sort ? 1 : -1,
        priceLevel: this.priceLevel
      };
      axios.get("/gwcs", { params: param }).then(res => {
        // console.table(res.data.result.list)
        console.log(res.data.list);
        if (res.data.status === "0") {
          //          that.gwcslist = res.data.result.list;
          if (falg) {
            this.gwcslist = this.gwcslist.concat(res.data.result.list);
            // console.log(this)
            // console.log(res.data.result.count)
            // console.log(this.pageSize)
            if (res.data.result.count < this.pageSize) {
              console.log("111");
              this.busy = true;
              this.loading = false;
            } else {
              console.log("222");
              this.busy = false;
            }
          } else {
            this.gwcslist = res.data.result.list;
            this.busy = false;
          }
          // console.log(this.gwcslist);
        }
      });
    },
    btn(data) {
      console.log(data.productId);
    },
    issort() {
      //价格排序模式（升序/降序）
      this.sort = !this.sort;
      console.log(this.sort);
      this.page = 1;
      this.getgwcs();
    },
    loadMore() {
      //加载事件
      this.busy = true;
      setTimeout(() => {
        this.page++;
        this.getgwcs(true);
        //  this.busy = true
      }, 1000);
    },
    CFilterPrice(index) {
      //价格分类点击
      if (index == 4) {
        this.priceLevel = "all";
      } else {
        this.priceLevel = index;
      }
      // console.log(index)
      this.page = 1;
      this.getgwcs();
    },
    ...mapMutations({
      setlist: "SET_LISTS"
    })
  }
};
</script>
<style lang="scss" scoped>
// @import url('../../assets/css/index.scss');
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 700px;
  /*height:70%;*/
  /*line-height: 160px;*/
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

ul {
  width: 90%;
  overflow: hidden;
  margin: 0 auto;

  li {
    width: 20%;
    margin: 20px;
    float: left;
    height: 400px;
    img {
      width: 100%;
    }
    .price {
      color: crimson;
    }
  }
}
</style>