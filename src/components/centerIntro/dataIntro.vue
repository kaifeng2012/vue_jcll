<template>
	<div>
		<!--头部banner-->
		<img src="../../assets/image/news/leftBack.png" class="back" alt="" onclick="window.history.go(-1)"/>
		<div id="banner" style="height:7.5rem">
		    <div class="swiper-wrapper">
		    	<div class='swiper-slide'>
		    		<img :src="'http://www.shllzx.com/'+this.image" style="height:7.5rem"/>
		    	</div>
		    </div>
		    <div class="pagination"></div>
		</div>
		<section id="detail">
			<ul class='streetInfo'>
                 <li class='titleName'><h2>{{shujitongji.center_name}}</h2></li>
                 <li class='address'>
	                 <img src='../../assets/image/home/icons.png' alt=''/>
	                 <span>{{shujitongji.center_address}}</span>
                 </li>
                 <li class='contact'>
	                <div class='f-l'>
		                <img src='../../assets/image/home/icon2.png' alt=''/>
		                <span><a @click="phoneCall(shujitongji.center_callnumber)">{{shujitongji.center_callnumber}}</a></span>
	                </div>
	                <div class='f-r'>
		                <img src='../../assets/image/home/icon4.png' alt=''/>
		                <span class='f-r'>{{shujitongji.center_scale}}</span>
	                 </div>
                 </li>                                                  
            </ul>
            <div class="data">
            	<div class="dataStatis">
            		<img src="../../assets/image/home/line.png" class="line" alt="">
            		<div class="dataBg">
            			<ul>
            				<li class='dataName'><img src='../../assets/image/home/icon01.png' alt=''/><span>数据统计</span></li>
			                <li>街道会员总数：{{shujitongji.center_member_num}}</li>
			                <li>街道志愿者总数：{{shujitongji.center_volunteer_num}}</li>
			                <li>实名人数：{{shujitongji.center_realmember_num}}</li>
			                <li>邻里中心活动发布数：{{shujitongji.center_activity_num}}</li>
			                <li>邻里中心活动报名人数：{{shujitongji.activity_people_num}}</li>
			                <li>志愿者活动发布数：{{shujitongji.volunteer_activity_num}}</li>
			                <li>志愿者活动报名人数：{{shujitongji.volunteer_people_num}}</li>
            			</ul>
            		</div>
            	</div>
            </div>
	   </section>
     <!--替换底部导航主菜单-->
    <module v-bind:msgOfP = "msgOfP" v-on:titleChanged ="zidingyi($event,shujitongji.id,'')"></module>
	</div>
</template>
<script type="text/javascript">
	import Axios from 'axios'
  import '../../js/jquery-1.7.1.js'
  import module from '../../components/centerIntro/module'
	//var id;
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

        shujitongji:[],
        //room:[]
         image:''      
      }
    },
    

    components: { // 声明子组件
    
       module,
       
    },
    mounted: function () {
      // 获取页面中的参数值
      let id = this.$route.query.id;
      let img= this.$route.query.p;  
      this.image=img; 
      console.log(id);
      console.log(img);
      //活动中心介绍数据统计读取后台数据
      axios.get('http://www.shllzx.com/llzx/centerController/getCenterDatastatistics', {params: {id: id}}).then(res=>{
        console.log(res);
        this.shujitongji=res.data;
        // console.log(this.newsList);
       console.log(res.data);

    }).catch(error=>console.log(error));

    },
    methods: {
    	 phoneCall: function (msg) {
	      console.log(msg)
	      window.location.href="tel:msg"  //无效，编译也通不过，编译不出tel是啥
        },
      zidingyi(msg,e,t){

        alert(1233)
          this.msgOfP = msg;
          //console.log(this.msgOfP)
          alert(e);
          alert(t);
          console.log(e);
         }
      }  
   
  }

</script>
<style type="text/css">
   
	@import '../../assets/css/homeDetail.css'
</style>