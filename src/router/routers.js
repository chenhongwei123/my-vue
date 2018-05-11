import Vue from 'vue';
import Router from "vue-router"
// import Listview from '../comonents/listview/listview'

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      redirect:'/Listview',   
    },
    {
      path: '/Listview',
    //   component: Listview,
      component: resolve => require(['../comonents/listview/listview'], resolve),
    },
    {
          path: '/lists',
    //   component: Listview,
      component: resolve => require(['../comonents/lists/lists'], resolve),
    },
    {
      path: '/demo',
      //   component: Listview,
      component: resolve => require(['../comonents/demo/demo'], resolve),
    }
  ]
})
