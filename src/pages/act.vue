<template>

  <div class="index-wrap1">
    <slide-show :slides="slides"></slide-show>
    <slide-top></slide-top>
    <!--<act-nav-top></act-nav-top>-->
    <act-nav></act-nav>
    <!--<scroll-top></scroll-top>-->
    <!-- <tab></tab> -->
  </div>

</template>
<script>
  import Axios from 'axios'
  import slideShow from '../components/common/slideShow'
  import slideTop from '../components/common/slideTop'
  //import actNavTop from './actNavTop'
  import actNav from '../components/active/actNav'
  import tab from '../components/tab'
  //import scrollTop from '../components/scrollTop'
  //import Tabs from "./tab.vue"
  export default{
      name: "act",
      components: {
        slideShow,
        slideTop,
        //actNavTop,
        actNav,
        tab
        //scrollTop
    },
    mounted: function () {
      // GET /someUrl
      //最新消息读取后台数据
      Axios.get('https://www.shgdinfo.com/mhqweChat/indexController/getMapPointList').then(res=>{
        //console.log(res);
        this.newsList=res.data;

    }).catch(error=>console.log(error));

      //头部轮播图读取后台数据
      //   Axios.get('https://www.shgdinfo.com/weChat/indexController/getNoticeList').then(res=>{
      //     //console.log(res);
      //   this.slides=res.data;
      //   this.slides.picture_url=picture_url;
      //
      //   console.log(this.slides);
      // }).catch(error=>console.log(error));

    },
    data(){

      return {

        slides: [],
        boardList: [
          {
            title: '开放产品',
            description: '开放产品是一款开放产品',
            id: 'car',
            toKey: 'analysis',
            saleout: false
          },
          {
            title: '品牌营销',
            description: '品牌营销帮助你的产品更好地找到定位',
            id: 'earth',
            toKey: 'count',
            saleout: false
          },
          {
            title: '使命必达',
            description: '使命必达快速迭代永远保持最前端的速度',
            id: 'loud',
            toKey: 'forecast',
            saleout: true
          },
          {
            title: '勇攀高峰',
            description: '帮你勇闯高峰，到达事业的顶峰',
            id: 'hill',
            toKey: 'publish',
            saleout: false
          }
        ],
        newsList:[
          // {
          //   title: '数据统计',
          //   url: 'http://starcraft.com'
          // },
          // {
          //   title: '数据预测',
          //   url: 'http://warcraft.com'
          // },
          // {
          //   title: '流量分析',
          //   url: 'http://overwatch.com',
          //   hot: true
          // },
          // {
          //   title: '广告发布',
          //   url: 'http://hearstone.com'
          // }
        ],
        productList:{
          pc:{
            title:'PC 产品',
            list:[
              {
                name: '数据统计',
                url: 'http://starcraft.com'
              },
              {
                name: '数据预测',
                url: 'http://warcraft.com'
              },
              {
                name: '流量分析',
                url: 'http://overwatch.com',
                hot: true
              },
              {
                name: '广告发布',
                url: 'http://hearstone.com'
              }
            ]

          },
          app:{
            title:'手机应用类',
            last:true,
            list:[
              {
                name: '91助手',
                url: 'http://weixin.com'
              },
              {
                name: '产品助手',
                url: 'http://twitter.com',
                hot: true
              },
              {
                name: '智能地图',
                url: 'http://maps.com'
              },
              {
                name: '团队语音',
                url: 'http://phone.com'
              }

            ]

          }
        }
      }
    }
  }
</script>
<style type="text/css">
  /*@import '../assets/css/act.css'*/
</style>



<style src="../assets/css/act.css"></style>

