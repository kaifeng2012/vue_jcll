<template>
	<div>
		    <header class="head">
  		    <img src="../../assets/image/news/leftBack.png" onclick="window.history.go(-1)" alt=""/>
  		    <span>搜索结果页</span>
        </header>
		    <!--主题内容-->
    		<div class="content">
    		    <div class="lists">
    		    	<a href="" class="item opacity" style="">                	
    		             <div class="listPics"><img src="../../assets/image/news/listPic.png" alt=""/></div>
    		             <div class="listTexts">
    		                  <p class="txt" style="margin-top:0.15rem;">分类：志愿者</p>
    		                  <p class="txt">标题：助力创全楼道整治</p>
    		                  <p class="txt">时间：2018-09-11 10：32</p>
    		                  <p class="txt">机构：东一</p>
    		             </div>
    		        </a>
    		        <a href="" class="item opacity" style="">                	
    		             <div class="listPics"><img src="../../assets/image/news/listPic.png" alt=""/></div>
    		             <div class="listTexts">
    		                  <p class="txt" style="margin-top:0.15rem;">分类：活动中心</p>
    		                  <p class="txt">标题：迎中秋活动</p>
    		                  <p class="txt">时间：2018-09-11 10：31</p>
    		                  <p class="txt">机构：东一</p>
    		             </div>
    		        </a>
    		    </div>
    	   </div>
    </div>
</template>
<style type="text/css">
   @import '../../assets/css/index.css'
   

</style>
<style type="text/css">
  
   @import '../../assets/css/search.css'

</style>

<style type="text/css">
   body,html{
            background:#FFFFFF;
        }
        .lists {
            text-align: left;
        }
        
        .lists a:first-child{
          border-top:0;
        }
        .lists a:last-child{
          
          
        }
        .txt {
            color: #666666;
            font-size: 0.40rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            margin-top: 0;
            line-height:0.7rem
        }
         .content{
            margin-bottom: 2rem;
            margin-top: 1.8rem;
        }
         .item {
        /*border-bottom: 1px solid #eeeeee;*/
        border-top:0; 
          margin-top:0; 
    }
    .item {
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    text-decoration: none;
    border-top: 1px solid #EFEFEF;
    margin-top: 0.26666667rem;
}

</style>

<script type="text/javascript">

export default {
 
   data() {
      return{
        newsList:[]
       
      }
    },
    mounted: function () {
      // 获取页面中的参数值
     // let val = this.$route.query.val
       let val = this.$route.query.val
       alert(val)
       //console.log(val);
       console.log(val);

      //console.log(this.$route.query.id) //

      //读取后台数据
      axios.get('http://www.shgdinfo.com/jcweChat/ /SearchController/search', {
        params: {
         // id: id
        }

      }).then(res=>{
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


