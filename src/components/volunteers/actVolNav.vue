<template>
  <!--主题内容-->
<div class="newsMain tabContent">
   
    <!--最新活动、活动预告、 历史活动-->
    <div class="tab">
          <a href="javascript:;" class="item" v-for="(item,index) in tabs" :class="{cur:index==num}" @click="tab(index)">
              {{item.title}}           
          </a>
        
    </div>

    <div class="activities content">

        <div class="lists">
          <div class="activeDetail" v-for="(item,index) in newsList">
            <router-link :to="{path: 'volunteers/actVolDetails',query: {id:item.id}}" :key="" @:click="showCont">
              <div class="activePic">
                <img :src="'http://www.shllzx.com/'+item.fileUrl" alt="">
                <div class="listIcon">
                  <img  v-if="item.isClose==1" class="icon img-responsive" src="../../assets/image/index/notice.png" alt="">
                  <img  v-else-if="item.activityStatus==2" class="icon img-responsive" src="../../assets/image/index/signUp.png" alt="">
                  <img  v-else-if="item.activityStatus==3" class="icon img-responsive" src="../../assets/image/index/acting.png" alt="">
                  <img v-else-if="item.authorizationCode!=null && authorizationCode !=''" class="key" src="../../assets/image/activity/key.png" alt=""/>
                </div>
              </div>
              <div class="txt1">
                <span v-if="item.activityName.length<7">{{item.activityName}}</span><i v-show="show" id="6b58fd0422b14bcba2932b9bd83b9541" name="redPoint"></i>

                <p>隶属街道：{{item.streetName}}</p>
                <p>邻里中心：{{item.centerName}}</p>
              </div>
            </router-link>
          </div>
         
        </div>
        <div class="lists" style="display:none;">
          <div class="activeDetail" v-for="(item,index) in noticeList">
            <router-link :to="{path: 'volunteers/actVolDetails',query: {id:item.id}}" :key="">
              <div class="activePic">
                <img :src="'http://www.shllzx.com/'+item.fileUrl" alt="">
               <!--  <div class="listIcon">
                  <img  v-if="item.activityStatus==2" class="icon img-responsive" src="../../assets/image/index/signUp.png" alt="">
                  <img  v-else-if="item.activityStatus==3" class="icon img-responsive" src="../../assets/image/index/acting.png" alt="">
                  <img  v-if="item.isClose==1" class="icon img-responsive" src="../../assets/image/index/notice.png" alt="">
                </div> -->
              </div>
              <div class="txt1">
                <span>{{item.activityName}}</span>
                <p>隶属街道：{{item.streetName}}</p>
                <p>邻里中心：{{item.centerName}}</p>
              </div>
            </router-link>
          </div>
        </div>
        <div class="lists" style="display:none;">
          <div class="activeDetail" v-for="(item,index) in historyList">
            <router-link :to="{path: 'volunteers/actVolDetails',query: {id:item.id}}" :key="">
              <div class="activePic">
                <img :src="'http://www.shllzx.com/'+item.fileUrl" alt="">
                <!-- <div class="listIcon">
                  <img  v-if="item.activityStatus==2" class="icon img-responsive" src="../../assets/image/index/signUp.png" alt="">
                  <img  v-else-if="item.activityStatus==3" class="icon img-responsive" src="../../assets/image/index/acting.png" alt="">
                  <img  v-if="item.isClose==1" class="icon img-responsive" src="../../assets/image/index/notice.png" alt="">
                </div> -->
              </div>
              <div class="txt1">
                <span>{{item.activityName}}</span>
                <p>隶属街道：{{item.streetName}}</p>
                <p>邻里中心：{{item.centerName}}</p>
              </div>
            </router-link>
          </div>
        </div>
        <div style="clear:both"></div>
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
        noticeList: [

        ],
        historyList: [

        ],
        newsList: [

        ],
        show:true,

        tabs:[
          {            
             title:'最新活动'
          },
          {
          
             title:'活动预告'
          },
          {
          
             title:'历史活动'
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
        https://www.shgdinfo.com/jcweChat//activityController/getActivityLis
        Axios.get('http://www.shllzx.com/llzx//activityController/getActivityList?newActivity=1&ext1=2').then(res=>{
          //console.log(res);
          this.newsList=res.data;


       

      }).catch(error=>console.log(error));

    },
    methods: {

      tab(index) {
        idx=index;
       // alert(index);
        this.num = idx;
        console.log(this.num);
        if(this.num==0){
         // alert(this.num);
          //最新活动读取后台数据
          Axios.get('http://www.shllzx.com/llzx//activityController/getActivityList?newActivity=1&ext1=2').then(res=>{
            //console.log(res);
            this.newsList=res.data;

          console.log(this.newsList);

        }).catch(error=>console.log(error));

        }else if(this.num==1){
          //活动预告
           Axios.get('http://www.shllzx.com/llzx//activityController/getActivityList?activityStatus=1&ext1=2').then(res=>{
            //console.log(res);
            this.noticeList=res.data;

          console.log(this.noticeList);

        }).catch(error=>console.log(error));
       

        }else if(this.num==2){
          //历史活动
           Axios.get('http://www.shllzx.com/llzx//activityController/getActivityList?activityStatus=4&ext1=2').then(res=>{
            //console.log(res);
            this.historyList=res.data;

          console.log(this.historyList);

        }).catch(error=>console.log(error));

        }
       // alert(this.num)
        $('.tab .item').addClass('cur').siblings('.item').removeClass('cur');
        $('.lists').eq(this.num).show().siblings('.lists').hide();
      },
      showCont(){
        this.show=!this.show;
      }
    
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
  @import '../../assets/css/act.css'
  @import '../../assets/css/news.css'
   
</style>

<style scoped>
 .newsMain {
    background: #fff;
    padding-top: 0.005rem;
    margin-top: 0.3rem;
}
</style>


<style scoped>
 
</style>
