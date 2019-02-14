<template>
	<div class='index-wrap1'>
		<header class="head">
	         <img src="../../assets/image/news/leftBack.png" onclick="window.history.go(-1)" alt=""/>
	         <span>{{llCenterDetails.centerName}}</span>
       </header>
		<section id="detail">
		    <!--banner-->
		  <div id="banner" style="height:7.5rem;">
		        <img :src="'http://www.shllzx.com/'+llCenterDetails.centerImgurl" alt="" style="height:7.5rem;"/>
		    </div>
		    <ul><li class="btn"><button class="statistics" @click="dbouClick(llCenterDetails.id,llCenterDetails.centerImgurl)">数据统计</button></li></ul>
		    <div class="info">
		        <ul class="streetInfo">
		            <li class="address">
		                <img src="../../assets/image/centerIntro/dz.jpg" alt=""/>
		                <span>{{llCenterDetails.centerAddress}}</span>
		            </li>
		            <li class="contact">
		                <img src="../../assets/image/centerIntro/tel.jpg" alt=""/>
		                <span>{{llCenterDetails.callNumber}}</span>
		            </li>
		            <li class="address">
		                <img src="../../assets/image/centerIntro/mj.jpg" alt=""/>
		                <span>{{llCenterDetails.centerScale}}</span>
		            </li>
		            <li class="address"><img src="../../assets/image/centerIntro/yy.png" alt=""/>
		            	<span>{{llCenterDetails.exp2}}</span>
               		</li>
		           <!-- <li class="contact" style="display: flex;border-bottom:0px solid red;">
		                <img src="../../assets/image/centerIntro/icon2.png" alt=""/>
		                <span><h4 style="display:inline;vertical-align: middle;font-weight:normal;font-size:0.44rem;">标题：</h4><span>1、这五年、创建自贸区这五年 </span><span>2、创建自贸区这五年、创建自贸区这五年</span><span>3、创建自贸区这五年、创建自贸区这五年</span><span>4、创yuyuubfgbhnjkklyyyyyyyyyyyylllllllllllllluuuuuuuuuuuuuooooooo</span></span>
		            </li> -->
		            <li class="contact" style="border-bottom:0px solid red;">
		            	<img src="../../assets/image/centerIntro/gn.png" alt="" style="border-radius:0%;"/>
		            	<span>
	           				<h4 style="display:inline;vertical-align: middle;font-weight:normal;font-size:0.44rem;">功能室：{{room.roomName}}</h4>
	           				<span id="room">{{room.roomNumber}}</span>
           			    </span>
           		    </li>
            
                 

		        </ul>
		    </div>

		    <div class="contentDetail">
		        <div class="contentHead">
		            详细介绍
		        </div>
		        <div class="txtDetail" v-html="$options.filters.msg(llCenterDetails.centerIntroduce)">
		          
		        </div>
		    </div>
		</section>

		<!--替换底部导航主菜单-->
		<module v-bind:msgOfP = "msgOfP" v-on:titleChanged ="zidingyi($event,llCenterDetails.id,'')"></module>
	</div>
</template>
<style type="text/css">
    /*@import '../../assets/css/llCenterList.css'*/
	@import '../../assets/css/homeDetail.css'
</style>
<script type="text/javascript">

	import module from '../../components/centerIntro/module'
	var id;
	export default {
 
   data() {
      return{

        llCenterDetails:[],
        room:[],
       // id:this.$route.query.id

        msgOfP:'我狮子啊',
        actList:[],
        actApply:[],
        actSub:[],
        actDet:[],
       
        numT:0,
        num: 0,
        isAdd:true,
        yxbg:[],

       
      }
    },

    components: { // 声明子组件
    
       module,
       
    },
    mounted: function () {
      // 获取页面中的参数值
       id = this.$route.query.id
      // let index = this.$route.query.index
     // console.log(id);
      //console.log(index);

   //   console.log(this.$route.query.id) //

      //中心介绍详情读取后台数据
      axios.get('http://www.shllzx.com/llzx/centerController/getCenterDetailByid', {params: {id: id}}).then(res=>{
        console.log(res);
        this.llCenterDetails=res.data;
       console.log(res.data.id);
     console.log(this.llCenterDetails.id);

    }).catch(error=>console.log(error));

      //功能室

      axios.get('http://www.shllzx.com/llzx/centerController/getRoomList', {params: {id: id}}).then(res=>{
        console.log(res);
        this.room=res.data;
     // console.log(this.newsList);
     //console.log(res.data);

    }).catch(error=>console.log(error));

    },
    methods: {
    	dbouClick:function(e,t){
    		alert(e);
    		alert(t);
    		console.log(e);
    		this.$router.push({  
            path: 'dataIntro',   
           // name: 'dataIntro',  //要跳转的路径的 name,在 router 文件夹下的 index.js 文件内找
            query: {                  
                id:e,
                p:t

            }  
    	})
    	},
    	zidingyi(msg,e,t){

        alert(1233)
	        this.msgOfP = msg;
	        //console.log(this.msgOfP)
	        alert(e);
	        alert(t);
	        console.log(e);
    }
   },
   filters: {
	msg: function(msg) {
	      return msg.replace(/<\/?(a|span)[^>]*>/gi, '') ;//过滤数据中的标签p,a,span
	      }
     }
  }


</script>