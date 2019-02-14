<template>
  <div class="newsMain tabContent">
    <!--新闻动态、基层动态、党务公开-->
    <div class="nav tab" id="tabid">
      <a href="javascript:;" class="item" v-for="(item,index) in tabs" :class="{cur:index==num}" @click="tab(index)">
        <dl>
         
          <dd>{{item.title}}</dd>
        </dl>
      </a>
      
    </div>
    <!-- 图文混排-->
    <div class="content">
      <div class="lists">
        <router-link class="item opacity" v-for="(item,index) in newsList" :to="{path: 'news/newsDetail',query: {id:item.id}}" :key="item.id">
        <!--<a href="#" class="item opacity" v-for="(item,index) in newsList" @click="getDescribe(item.id)">-->
          <div class="listPics"><img :src="'http://www.shllzx.com/' + item.imgurl" alt=""/></div>
          <div class="listTexts">
            <h1>{{item.title}}</h1>
            <p class="txt" v-html="$options.filters.msg(item.content)"></p>
            <span class="date">{{item.piblish_time}}</span>
            <!-- <img src="../assets/images/index/dots.png" alt="" class="f-r dot"/> -->
          </div>
        <!--</a>-->
        </router-link>
      </div>
      <div class="lists" style="display:none">
        <router-link  class="item opacity" v-for="(item,index) in mszcList" :to="{path: 'news/newsDetail',query: {id:item.id}}" :key="item.id">
          <!--<a href="#" class="item opacity" v-for="(item,index) in jcList" :to="{path: 'detail/jcDetail',query: {id:item.id}}">-->
          <div class="listPics"><img :src="'http://www.shllzx.com/' + item.imgurl" alt=""/></div>
          <div class="listTexts">
            <h1>{{item.title}}</h1>
            <p class="txt" v-html="$options.filters.msg(item.content)"></p>
            <span class="date">{{item.piblish_time}}</span>
            <!-- <img src="../assets/images/index/dots.png" alt="" class="f-r dot"/> -->
          </div>
          <!--</a>-->
        </router-link>

      </div>
      
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
   import Axios from 'axios'
   Vue.prototype.$http=Axios
   //import data from 'jcDt.json'
   //console.log(data)
   window.idx=0;

   //获取url中的参数
   function getUrlParam(name) {
     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
     var r = window.location.search.substr(1).match(reg);  //匹配目标参数
     if (r != null) return unescape(r[2]);
     return null; //返回参数值
   }

  //接收URL中的参数id
   var idx = getUrlParam('idx');
 //  alert(idx);


  export default {
    data () {

      return {
        page: 1,//页码
        showlaoding: true,//是否显示loading效果
        num: 0,
        mszcList: [

        ],
        dwList: [

        ],
        newsList: [

        ],

        tabs:[
          {            
             title:'新闻动态'
          },
          {
          
             title:'民生政策'
          }

        ]
      }
    },
    beforeCreate:function(){
      //alert(1)
    },
    created:function(){
     // alert(2)
    },
    beforeMount:function(){
     // alert(3)
    },

    mounted: function () {
     //接收从详情点击跳转到列表的参数
      idx = this.$route.query.idx;

      console.log(idx);
      //alert(idx);

      // let index = this.$route.query.index


     // this.tab(0);
//      $('.tab .item').addClass('cur').siblings('.item').removeClass('cur');

//      if(idx==0){
//        alert(10);
        //新闻动态读取后台数据
        Axios.get('http://www.shllzx.com/llzx/newsController/getStreetNewsList?type=1').then(res=>{
          //console.log(res);
          this.newsList=res.data;

        console.log(this.newsList[0].id);

      }).catch(error=>console.log(error));
//
//      }else if(this.num==1){
//        alert(this.num)
//
//        //基层动态读取后台数据
//        Axios.get('https://www.shgdinfo.com/weChat/indexController/getDynamicList').then(res=>{
//          //console.log(res);
//          this.jcList=res.data;
//        //console.log(res.data);
//
//      }).catch(error=>console.log(error));
//      }else if(this.num==2){
//        alert(this.num)
//
//        //党务公开读取后台数据
//        Axios.get('https://www.shgdinfo.com/weChat/indexController/getDeedsList').then(res=>{
//          //console.log(res);
//          this.dwList=res.data;
//        //console.log(res.data);
//
//      }).catch(error=>console.log(error));
//
//      }


    },
    methods: {

      tab(index) {
        idx=index;
       // alert(index);
        this.num = idx;
        console.log(this.num);
        if(this.num==0){
         // alert(this.num);
          //新闻动态读取后台数据
          Axios.get('http://www.shllzx.com/llzx/newsController/getStreetNewsList?type=1').then(res=>{
            //console.log(res);
            this.newsList=res.data;

          console.log(this.newsList);

        }).catch(error=>console.log(error));

        }else if(this.num==1){
           Axios.get('http://www.shllzx.com/llzx/newsController/getStreetNewsList?type=4').then(res=>{
            //console.log(res);
            this.mszcList=res.data;

          console.log(this.mszcList);

        }).catch(error=>console.log(error));
       

        }
       // alert(this.num)
        $('.tab .item').addClass('cur').siblings('.item').removeClass('cur');
        $('.lists').eq(this.num).show().siblings('.lists').hide();
      }
     /* beforeRouteLeave(to, from, next) {
        let position = window.scrollY //记录离开页面的位置
        if (position == null) position = 0
        this.$store.commit('changeRecruitScrollY', position) //离开路由时把位置存起来
        next()
      },
      watch: {
        '$route' (to, from) {
          if (to.name === 'NewRecruit') {//跳转的的页面的名称是"NewRecruit",这里就相当于我们listview页面，或者原始页面
            let recruitScrollY = this.$store.state.recruitScrollY
            window.scroll(0, recruitScrollY)
          }
        }
      }*/
    },
    watch: {
     },
     filters: {
         msg: function(msg) {
            return msg.replace(/<\/?(a|p|span)[^>]*>/gi, '') ;//过滤数据中的标签p,a,span
        }
      }
  }
</script>
<style type="text/css">
  @import '../../assets/css/news.css'
</style>

<style scoped>
 .newsMain {
    background: #fff;
    padding-top: 0.005rem;
    margin-top: 0.3rem;
}
</style>
