  <template>
  <!--<div>-->
    <footer id="foot">
      <div id="nav1">
        <router-link :to="{path: '/'}" tag="a" @click="jampmin()" class="index item1" exact>
          <!--<a href="#" class="index item1 active">-->
          <dl id="a">
            <dt></dt>
            <dd>首页</dd>
          </dl>
          <!--</a>-->
        </router-link>
        <router-link :to="{path: 'act'}" tag="a" class="activity item1">
          <!--<a href="#" class="activity item1" >-->
          <dl id="b">
            <dt></dt>
            <dd>活动中心</dd>
          </dl>
          <!--</a>-->
        </router-link>
        <router-link :to="{path: 'vol'}" tag="a" class="myCenter item1">
          <!--<a href="#" class="myCenter item1" >-->
          <dl id="c">
            <dt></dt>
            <dd>志愿者</dd>
          </dl>
          <!--</a>-->
        </router-link>
        <router-link :to="{path: 'myCenter'}" tag="a" class="learning item1">
          <!--<a href="#" class="learning item1">-->
          <dl id="d">
            <dt></dt>
            <dd>个人中心</dd>
          </dl>
          <!--</a>-->
        </router-link>
        <router-link :to="{path: 'search'}" tag="a" class="search">
          <!--<a href="#" class="interact">-->
          <dl id="e">
            <dt></dt>
            <dd>搜索</dd>
          </dl>
          <!--</a>-->
        </router-link>

      </div>
</footer>
  <!--</div>-->

</template>
<script>
/*引入公共方法*/
import { setCookie,getCookie,delCookie } from '../assets/js/cookie.js'
  export default{
      data(){
        return{
          // isHidden:false
        }

      },
      method:{
        jampmin(){
        //获取cookie值
        var username=getCookie('username');
         alert(username);
         console.log(username);
        if(username==''||username=='undefind'){
          this.$router.push({
                   path: '/signIn'
               });
        }else{
          this.$router.push({
                   path: '/register'
               });
        }         

    } 

      }
  }
</script>
<style type="text/css">
    @import '../assets/css/foot.css'
  
</style>
<style type="text/css">
  /* #foot{
        display:none;
    }*/
</style>
