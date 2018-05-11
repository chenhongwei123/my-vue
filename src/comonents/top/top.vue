<template>
  <div class="top">
    <div class="nabar-title">
      <h3>CHW商城</h3>
    </div>
    <ul class="nav">
      <li>
        <router-link tag="div" class="tab-item" to="/Listview">
          页面1
        </router-link>
      </li>
      <li>
        <router-link tag="div" class="tab-item" to="/lists">
          页面2
        </router-link>
      </li>
      <li>
        <router-link tag="div" class="tab-item" to="/demo">
          页面3
        </router-link>
      </li>
    </ul>
    <div class="nabar-login">
      <a href="javascript:void(0)" class="navbar-link">Login</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 50px;
  background: azure;
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
  //  align-items:center
  .nabar-title {
    text-align: center;
    width: 10%;
    /*height: 80%;*/
    /*background-color: darkcyan;*/
    align-self: center;

    h3 {
      line-height: 1.2;
    }
  }
  .nabar-login {
    /*background-color: chartreuse;*/
    align-self: center;
  }
}
.nav {
  width: 50%;
  display: flex;
  justify-content: space-between;
  li {
    width: 20%;
    text-align: center;
    align-self: center;
    border: 1px solid #383737;
    cursor: pointer;
  }
}
</style>  