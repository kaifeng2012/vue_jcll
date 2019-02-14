<template>

 <div id="foot" class="module">
      <div id="nav1">
        <router-link v-on:click = "changeTitle" :to="{path: '/'}" tag="a"  class="index item1" exact>
          <!-- <a href="#" class="index item1 active" v-on:click = "changeTitle"> -->
            <dl id="a">
              <dt></dt>
              <dd>首页1</dd>
            </dl>
          <!-- </a> -->
        </router-link>
        <router-link v-on:click = "changeTitle" :to="{path: '../act'}" tag="a" class="activity item1">
          <!-- <a href="#" class="activity item1" v-on:click = "changeTitle"> -->
            <dl id="b">
              <dt></dt>
              <dd>活动中心</dd>
            </dl>
          <!-- </a> -->
        </router-link>
        <router-link v-on:click = "changeTitle" :to="{path: '../vol'}" tag="a" class="myCenter item1">
          <!-- <a href="#" class="myCenter item1" v-on:click = "changeTitle"> -->
            <dl id="c">
              <dt></dt>
              <dd>志愿者</dd>
            </dl>
          <!-- </a> -->
        </router-link>
        <router-link v-on:click = "changeTitle" :to="{path: '../myCenter'}" tag="a" class="learning item1">
          <!-- <a href="#" class="learning item1" v-on:click = "changeTitle"> -->
            <dl id="d">
              <dt></dt>
              <dd>个人中心</dd>
            </dl>
          <!-- </a> -->
        </router-link>
        <router-link v-on:click = "changeTitle" :to="{path: '../search'}" tag="a" class="search">
          <!-- <a href="#" class="interact" v-on:click = "changeTitle"> -->
            <dl id="e">
              <dt></dt>
              <dd>搜索</dd>
            </dl>
          <!-- </a> -->
        </router-link>

      </div>
 </div>

</template>
<script>
  export default {
    name: "two-module",
    props: ["msgOfP"],
    data () {
      return {

      }
    },
    methods: {
      changeTitle: function(){
        alert(123)
        this.$emit("titleChanged","改掉了，这是two-module子组件传过来的数据"); 

      }
    }
  }
</script>
<style scoped>
  #disFoot{
    /*display:none;*/
  }
  #foot{
    /*display:none;*/
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
