<template>
	<div class="index-wrap2">
		<!--主题内容-->
		<div class="newsMain">
		    <!-- 图文混排-->
		    <div class="content">
		        <div class="lists">
		            <router-link class="item opacity" v-for="item in centerList" :to="{path: 'centerIntro/llCenterDetails',query: {id:item.id}}" :key="item.id">
                      <div class="listPics"><img :src="'http://www.shllzx.com/'+item.centerImgurl" alt=""/></div>
                        <div class="listTexts">
                        <h1>{{item.centerName}}</h1>
                        <p class="txt"><img src="../assets/image/centerIntro/dz.jpg" alt=""><span>{{item.centerAddress}}</span></p>
                        <p class="txt"><img src="../assets/image/centerIntro/mj.jpg" alt=""><span>{{item.centerScale}}</span></p>
                        <p class="txt"><img src="../assets/image/centerIntro/yy.png" alt=""><span>{{item.exp2}}</span></p>
                      </div>
                </router-link>
		        </div>

		    </div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
 
   data() {
      return{
        centerList:[]
      }
    },
    mounted: function () {
      // 获取页面中的参数值
      let id = this.$route.query.id
      // let index = this.$route.query.index
      console.log(id);
      //console.log(index);
      console.log(this.$route.query.id) //

      //新闻动态读取后台数据
      axios.get('http://www.shllzx.com/llzx/centerController/getCenterPage').then(res=>{
        console.log(res);
        this.centerList=res.data;
     // console.log(this.newsList);
     console.log(res.data);

    }).catch(error=>console.log(error));

    },
    methods: {
    //   zidingyi(msg){
    //   this.msgOfP = msg;
    //
    // }
   },
   filters: {
	     msg: function(msg) {
	       return msg.replace(/<\/?(a|span)[^>]*>/gi, '') ;//过滤数据中的标签p,a,span
	      }
     }
  }

</script>
<style type="text/css" scoped>
	@import '../assets/css/llCenterList.css'
</style>