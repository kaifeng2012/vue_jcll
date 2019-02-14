<template>
  
  <div class="bg-cover">
      <!--标题江川云邻里-->
        <div class="txtHead">
            <div style="" class="txtTop">
                <router-link :to="{path: 'signIn'}" tag="a" @click.native="flushCom">
                    <dl>
                        <dt><img src="../assets/image/index1/qd.png" alt=""></dt>
                        <dd><span>每日签到</span></dd>
                    </dl>
                </router-link>
                <router-link :to="{path: 'lottery'}" tag="a"  class="lottery">
                    <dl>
                        <dt><img src="../assets/image/index1/lottery.png" alt=""></dt>
                        <dd><span>快乐大转盘</span></dd>
                    </dl>
                </router-link>
                <router-link :to="{path: 'shopping'}" tag="a"  class="search">
                    <dl>
                        <dt><img src="../assets/image/index1/jf.png" alt=""></dt>
                        <dd><span>积分商城</span></dd>
                    </dl>
                </router-link>
                 <router-link :to="{path: 'search'}" tag="a"  class="search">
                    <dl>
                        <dt><img src="../assets/image/index1/ss1.png" alt=""></dt>
                        <dd><span>搜索</span></dd>
                    </dl>
                </router-link>
            </div>

        </div>
        <!--搜索-->

            <!--<a href="#" class="search">-->
                <!--<img src="../../image/index1/ss.png" alt="">-->
                <!--<span>搜索</span>-->
            <!--</a>-->


        <!--邻里中心-个人中心-->
        <div class="bg">           
        <!-- 新闻动态 -->     
            <!--活动中心-->
            <router-link :to="{path: 'news'}" tag="a" @click.native="flushCom">
                <div class="actCenter">
                    <img src="../assets/image/index1/news.png" alt="">                 
                    <span>新闻动态</span>
                </div>
            </router-link>
            <!--志愿者平台-->            
            <router-link :to="{path: 'act'}" tag="a" >
                <div class="zyz">                   
                     <img src="../assets/image/index1/hd.png" alt="">
                    <span>活动中心<i></i></span>
            
                </div>
            </router-link>
           <!--中心介绍-->           
            <router-link :to="{path: 'vol'}" tag="a" >
                <div class="llzx">                   
                    <img src="../assets/image/index1/zyz.png" alt="">                    
                     <span>志愿者中心<i></i></span>                     
                </div>
            </router-link>           
            <!--个人中心-->           
             <router-link :to="{path: 'centerIntro'}" tag="a" >
                <div class="myCenter">
                   
                     <img src="../assets/image/index1/center.png" alt="">
                   
                    <span>中心介绍</span>
                </div>
            </router-link>
            <!--搜索-->           
            <router-link :to="{path: 'myCenter'}" tag="a" >
                <div class="lotty">                  
                    <img src="../assets/image/index1/ybg.png" alt="">
                    <img src="../assets/image/index1/zx.png" alt="" class="topHead">
                    <span>个人中心</span>
                </div>
            </router-link>
        </div>
        <BottomTabs v-if="$store.state.showBottomNav"></BottomTabs>
  </div>
</template>
<script type="text/javascript"></script>
<style type="text/css" scoped>
  @import '../assets/css/index1.css'
   
</style>
<style>
   
    body{
      margin:0;
      padding:0;
    }
</style>
<style type="text/css">
   /* .app-foot{
        display:none;
    }*/
</style>


<script type="text/javascript">
    export default {
        name: "index",
       
        created() {
            this.$store.state.showBottomNav = false
        },
        methods:{
            flushCom:function(){
            //router是路由实例,例如:var router = new Router({})
            //router.go(n)是路由的一个方法，意思是在history记录中前进或者后退多少步，0就表示还是当前，类似window.history.go(n)
            this.$router.go(0);  
            }
            },

        // watch:{
        //     $route(e){
        //         if(e.name=='musicDetails'){
        //              this.tabType=false
        //         }else{
        //             this.tabType=true
        //         }
        //     }
        // }
    }
</script>