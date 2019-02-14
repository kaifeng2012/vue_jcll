<template>
	<div>
		<!--头部banner-->
		<img src="../assets/image/news/leftBack.png" class="back" alt="" onclick="window.history.go(-1)"/>
		<!-- 轮播图 -->
		<slide-show :slides="slides"></slide-show>
		 <!-- 头条-->
		<slide-top></slide-top>
		<!--主题内容-->
		<nav-top></nav-top>
		<!-- 底部导航 -->
		 <!-- <tab></tab> -->

	</div>
</template>
<script type="text/javascript">
	import Axios from 'axios'
	import slideShow from '../components/common/slideShow'
	import slideTop from '../components/common/slideTop'
	import navTop from '../components/news/navTop'
	// import tab from '../components/tab'
	export default{
    components: {
       slideShow,
       slideTop,
       navTop
       // tab
     
      // scrollTop
    },
    data() {
      return {
       slides:[]
      }
    }
}
</script>

<style type="text/css" scoped>
  @import '../assets/css/news.css'
</style>
