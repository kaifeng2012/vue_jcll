// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
// import router from './router'
import VueRouter from 'vue-router'

import Vuex from 'vuex'
Vue.use(Vuex)
import IndexPage from './pages/index'
import NewsPage from './pages/news'
import ActPage from './pages/act'
import VolPage from './pages/vol'
import MycenterPage from './pages/myCenter'
import SearchPage from './pages/search'
import ShoppingPage from './pages/shopping'
import RegisterPage from './pages/register'
import LotteryPage from './pages/lottery'
import CenterIntroPage from './pages/centerIntro'

import NewsDetPage from './components/news/newsDetail'
import CenterDetailsPage from './components/centerIntro/llCenterDetails'
import DataIntroPage from './components/centerIntro/dataIntro'
import ActDetailsPage from './components/active/actDetails'

import ActVolDetailsPage from './components//volunteers/actVolDetails'
import SearchResultPage from './components/search/searchResult'
import MyActPage from './components/myCenter/myAct'
import MyVolPage from './components/myCenter/myVol'
import ShareCodePage from './components/myCenter/shareCode'

import loginPage from './pages/login'
import SignInPage from './pages/signIn'

/*引入页面*/
// import Login from './pages/login0.vue'
//import Main from './pages/main.vue'
//import Home from './pages/home.vue'

import VueResource from 'vue-resource'
import 'lib-flexible'//字体自适应px自动转换为rem
// import 'js/font-awesome.min.css'
import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios;
// Vue.prototype.axios = axios 组件调用this.axios.get(...)
// Vue.prototype.$ajax = axios  换个名字 组件调用this.$ajax.get(...)
window.axios = axios;  //组件中调用 axios.get(...)
// 注册全局
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)
require('./js/jquery-1.7.1')//此部分引入的是我们所编写的mockjs文档
require('./js/common')
// import Vuex from 'vuex'
// Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.productionTip = false

// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex);

import store from './store'
Vue.config.productionTip = false

var state = {
    isLogin:0,          //初始时候给一个  isLogin=0  表示用户未登录
    };
    const mutations = {
    changeLogin(state,data){
    state.isLogin = data;
   }
};

let router=new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      name:'index',
      component:IndexPage,
      // 是否开启底部导航
       meta: {
                // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
                index: 0,
                showFooter: false
            }
     },

   /* {
      path: '/login0',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },*/
    
    {
      path:'/news',
      name:'news',
      component:NewsPage,
      // 是否开启底部导航
       meta: {
                // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
                news:1,
                showFooter: true
            }
    },   
    {
      path: '/act',
      name:'act',
      component: ActPage,
      // 是否开启底部导航
       meta: {
                // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
                act:1,
                showFooter: true
            }
    },
    {
      path: '/myCenter',
      name:'myCenter',
      component:MycenterPage,
      // 是否开启底部导航
       meta: {
                // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
                myCenter:1,
                showFooter: true
            }

    },
    {
      path: '/vol',
      name:'vol',
      component:VolPage,
      // 是否开启底部导航
       meta: {
                // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
                vol:1,
                showFooter: true
            }
    },
    {
      path: '/search',
      name:'search',
      component:SearchPage,
       // 是否开启底部导航
       meta: {
                // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
                search:1,
                showFooter: true
            }

    },
    {
      path: '/lottery',
      name:'lottery',
      component:LotteryPage,
        // 是否开启底部导航
       meta: {
                // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
                lottery:1,
                showFooter: true
            }

    },
     {
      path: '/register',
      name:'register',
      component:RegisterPage,
        // 是否开启底部导航
       meta: {
                // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
                register:1,
                showFooter: true
            }

    },

     {
      path: '/signIn',
      name:'signIn',
      component:SignInPage,
        // 是否开启底部导航
       meta: {
                // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
                signIn:1,
                showFooter: true
            }
     },
    {
      path: '/shopping',
      name:'shopping',
      component:ShoppingPage,
        // 是否开启底部导航
       meta: {
                // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
                shopping:1,
                showFooter: true
            }
    },
    
    {
      path: '/centerIntro',
      name:'centerIntro',
      component:CenterIntroPage,
        // 是否开启底部导航
       meta: {
                // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
                centerIntro:1,
                showFooter: true
            }
    },

    {
      path: '/login',
      name:'login',
      component:loginPage,
         // 是否开启底部导航
       meta: {
                // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
                centerIntro:1,
                showFooter: true
            }
     
     },

     {
      path: '/myAct',
      name:'myAct',
      component:MyActPage,
         // 是否开启底部导航
       meta: {
                // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
                myAct:1,
                showFooter: true
            }
     
      },
       {
      path: '/myVol',
      name:'myVol',
      component:MyVolPage,
         // 是否开启底部导航
       meta: {
                // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
                myVol:1,
                showFooter: true
            }
     
      },

      {
         path: '/shareCode',
         name:'shareCode',
         component:ShareCodePage,
             // 是否开启底部导航
          meta: {
                // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
                shareCode:1,
                showFooter: true
            }       
      },

     {
      path: '/news', 
      name:'news',
      component: NewsDetPage,
          // 是否开启底部导航
          meta: {
                // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
                news:1,
                showFooter: true
            } , 
      redirect: '/news/newsDetail',
      children: [
        {
          path: 'newsDetail',
          component:NewsDetPage
        }
      ]
    },

     {
      path: '/centerIntro',
      name:'centerIntro',
      component: CenterDetailsPage,
        // 是否开启底部导航
          meta: {
                // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
                centerIntro:1,
                showFooter: true
            } , 
      redirect: '/centerIntro/llCenterDetails',
      children: [
        {
          path: 'llCenterDetails',
          name:'llCenterDetails',
          component:CenterDetailsPage,
            // 是否开启底部导航
          meta: {
                // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
                llCenterDetails:2,
                showFooter: false
            } , 
        }

      ]
    },
    {
      path: '/centerIntro',
      name:'centerIntro',
      component: DataIntroPage,
      // 是否开启底部导航
          meta: {
                // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
                centerIntro:1,
                showFooter: true
            } , 
      redirect: '/centerIntro/dataIntro',
      children: [
        {
          path: 'dataIntro',
          name:'dataIntro',
          component:DataIntroPage,
           // 是否开启底部导航
          meta: {
                // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
                dataIntro:2,
                showFooter:false
            } , 
        }
      ]
    },
    {
      path: '/active',
      name:'active',
      component:ActDetailsPage,
       // 是否开启底部导航
          meta: {
                // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
                active:1,
                showFooter: true
            } , 
      redirect: '/active/actDetails',
      children: [
        {
          path: 'actDetails',
          component:ActDetailsPage
        }
      ]
    },
    {
      path: '/volunteers',
      name:'volunteers',
      component:ActVolDetailsPage,
       // 是否开启底部导航
          meta: {
                // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
                volunteers:1,
                showFooter: true
            } , 
      redirect: '/volunteers/actVolDetails',
      children: [
        {
          path: 'actVolDetails',
          component:ActVolDetailsPage
        }
      ]
    },
    {
      path: '/signIn',
      name:'signIn',
      component:RegisterPage,
       // 是否开启底部导航
          meta: {
                // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
                signIn:1,
                showFooter: true
            } , 
      redirect: '/register',
      children: [
        {
          path: 'register',
          component:RegisterPage
        }
      ]
    },
      {
      path: '/search',
      name:'search',
      component:SearchResultPage,
      // 是否开启底部导航
          meta: {
                // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
                search:2,
                showFooter: true
            } , 

      redirect: '/search/searchResult',
      children: [
        {
          path: 'searchResult',
          component:SearchResultPage,
            // 是否开启底部导航
          meta: {
                // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
                searchResult:1,
                showFooter: false
            } , 
        }
      ]
    }
    
  ]

})


router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.auth)) {
    if (window.localStorage.isLogin === '1') {
      next()
    } else if (to.path !== '/') {
      next({path: '/signIn'})
      Vue.prototype.$message.warning('检测到您还未登录,请登录后操作！')
    }
  } else {
    next()
  }
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<Layout/>',
  components: { Layout }
})
