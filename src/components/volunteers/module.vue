<template>
 <div class="module" id="detailFoot">
    <!--<button v-on:click = "changeTitle">点击我修改上边父组件的值</button>-->
   <router-link class="index" v-on:click = "changeTitle" :to="{path: '/newsTrends'}" tag="a" style=" position:relative;left:3%">
     <!--<a href="#" class="index" v-on:click = "changeTitle">-->
       <dl id="a">
         <dt></dt>
         <dd>首页</dd>
       </dl>
     <!--</a>-->
   </router-link>

  <a href="#" class="share" v-on:click = "changeTitle" style=" position:relative;left:3%">
  <dl class="" id="b">
    <dt></dt>
    <dd>分享</dd>
    </dl>
  </a>
  <a href="#" class="joinAct" v-on:click = "changeTitle">
  <!--<img src="../assets/images/activity/btnBg.png" alt=""/>-->
    <span class="apply1 img">参加活动</span>

  </a>

  <!--<p>{{msgOfP}}</p>-->
  </div>
</template>
<script>
  export default {
    name: "three-module",
    props: ["msgOfP"],
    data () {
      return {

      }
    },
    methods: {
      changeTitle: function(){
       // alert(123)
        this.$emit("titleChanged","改掉了，这是three-module子组件传过来的数据");

     

      }
    }
  }
</script>
<style>
  #disFoot{
    display:none;
  }
  #foot{
    display:none;
  }
  .module{
    margin: 10px 0;
  }
  h2{
    color: #f0f;
    padding: 20px 0;
    background: #222;
  }
  #detailFoot a:nth-child(1), #detailFoot a:nth-child(2) {
    width:21%;
    display: inline-block;
    text-decoration: none;

  }

  #detailFoot .index dt {
    display: inline-block;
    width: 1.1735rem;
    height: 1.1735rem;
    background: url(../../assets/image/index/nav1.jpg) center no-repeat;
    -moz-background-size: 0.6rem 0.6rem;
    background-size: 0.6rem 0.6rem;
  }
  #detailFoot a:nth-child(1) dl dd, #detailFoot a:nth-child(2) dl dd {
    font-size: 12px;
    color: #000000;

  }

  #detailFoot .share dt {
    display: inline-block;
    width: 1.1735rem;
    height: 1.1735rem;
    background: url(../../assets/image/activity/c01.png) center no-repeat;
    -moz-background-size: 0.6rem 0.6rem;
    background-size: 0.6rem 0.6rem;
  }

  #detailFoot a:nth-child(1) dl dd, #detailFoot a:nth-child(2) dl dd {
    font-size: 12px;
    color: #000000;
  }
  #detailFoot a:nth-child(3) {
    width: 50%;
    display: inline-block;
    text-decoration: none;
  }
  #detailFoot .joinAct img {
    width:50%;
    height: 1.65rem;
    /* margin-top: 0.1rem; */
    position: absolute;
    bottom: -0.1rem;
    z-index: 10000;
    right: 0rem;
  }
  #detailFoot .joinAct {
    /*background: #DD001C;*/
    height: 1.7rem;
    line-height: 1.7rem;
    display: inline-block;
    float: right;
  }
  #detailFoot .joinAct .apply1 {
    /* position: relative; */
    color: #fff;
    top: 0.01rem;
    font-size: 0.36rem;
    left: 0%;
    float: right;
    z-index: 100000;
  }
  #detailFoot .joinAct .img {
    width: 100%;
  }
  #detailFoot a:nth-child(1) dl dd, #detailFoot a:nth-child(2) dl dd {
    font-size: 0.36rem;
    color: #000;
  }

</style>
