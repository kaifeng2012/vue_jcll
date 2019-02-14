<template>
	<div>
		<!-- 详情内容 -->
		<img src="../../assets/image/news/leftBack.png" class="back" alt="" onclick="window.history.go(-1)"/>
		<div class="listDetails">
		<div id="banner">

		   	<div class="swiper-wrapper">
		   		<img :src="'http://www.shllzx.com/'+newsList.imgurl" >
		    </div>

		   </div>
		    <div class="details">
		        <div class="detail"><h3>{{newsList.title}}</h3>
                <h4 class="date1">-------------{{newsList.piblish_time}}-------------</h4>
                <p class="firstTxt" v-html="$options.filters.msg(newsList.content)"></p>
               </div>
		    </div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
 
   data() {
      return{
        newsList:[]
       
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
      axios.get('http://www.shllzx.com/llzx/newsController/getNewsDetail', {params: {id: id}}).then(res=>{
        console.log(res);
        this.newsList=res.data;
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
<style type="text/css">
  @import '../../assets/css/newsDetails.css'
</style>
<style type="text/css">
	 .swiper-pagination-bullet {
            display: inline-block;
            width:15px;
            height:3px;
            /*border-radius: 5px;*/
            background:#CCCCCC;
            margin: 0 2px;
            opacity: 0.8;
            cursor: pointer;
        }
        .swiper-pagination-bullet-active {
            background: #29A1F7;
        }

        #banner .pagination {
            position: absolute;
            z-index: 20;
            bottom: -19px;
            width: 66px;
            text-align: center;
            right: 40%;
        }
		
		.listDetails .details .detail {
            margin-bottom:2rem;
        }
        .listDetails .details {
            background: #fff;
            margin-top: 0rem;
        }
</style>