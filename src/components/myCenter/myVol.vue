<template>
	<div>
		<!--头部-->
		<header class="head">
		    <img src="${pageContext.request.contextPath}/image/news/leftBack.png" onclick="window.history.go(-1)" alt=""/>
		    <span>我是志愿者</span>
		</header>
	<!--我申请的活动-->
	<section>
	<!--志愿者-->
    <div class="myApplicAct">
        <!-- <img src="${pageContext.request.contextPath}/image/myCenter/left.png" alt=""/> -->
        <span>志愿者身份：</span>
        <a href="${pageContext.request.contextPath}/volunteer/goVolunteerApply" style="" id="applyVol">申请志愿者</a>
        <ul class="volType" id="volType">
        </ul>
    </div>
    <div class="myApplicAct">
        <!-- <img src="${pageContext.request.contextPath}/image/myCenter/left.png" alt=""/> -->
        <span>我申请的活动</span>
    </div>
    <div class="tab">
        <!--<a href="javascript:;" class="item cur"><span>全部</span></a>
        <a href="javascript:;" class="item"><span>审核中</span></a>
        <a href="javascript:;" class="item"><span>活动中</span></a>
        <a href="javascript:;" class="item"><span>已结束</span></a>
        <a href="javascript:;" class="item"><span>待评价</span></a>-->

         <a href="javascript:;" class="item" v-for="(item,index) in tabs" :class="{cur:index==num}" @click="tab(index)">
              {{item.title}}          
          </a>    
    </div>
    <div class="content">
        <div class="lists">
        	<ul>
                <li>
                    <p><a href=face.html>在哪里在哪里在哪里ppppppppppppppppppptyuuuuuuuuuuuuu<img style="width:4%;margin-left: 0.2rem;vertical-align: middle;" src="../../assets/image/myCenter/face.png" alt=""></a></p>
                    <div >
                        <span class="f-l">2017-10-12</span>
                        <div class="f-r">审核中</div>
                    </div>
                    <div class="clear"></div>
                </li>
            </ul>

             <ul>
                <li>
                    <p>在哪里在哪里在哪里在哪里在哪里在哪里在哪里在哪里</p>
                    <div >
                        <span class="f-l">2017-10-12</span>
                        <div class="f-r finish" id="finish" onclick="actEva()">
                            <span class="activity">活动中</span><span class="actEvaluate" >意见反馈</span>

                            <img src="../../assets/image/myCenter/rights_arrows.png" alt=""/>
                        </div>
                    </div>

                    <div class="clear"></div>
                </li>
            </ul>

        </div>
        <div class="lists">
        	<ul>
                <li>
                    <p><a href=face.html>在哪里在哪里在哪里ppppppppppppppppppptyuuuuuuuuuuuuu<img style="width:4%;margin-left: 0.2rem;vertical-align: middle;" src="../../assets/image/myCenter/face.png" alt=""></a></p>
                    <div >
                        <span class="f-l">2017-10-12</span>
                        <div class="f-r">审核中</div>
                    </div>
                    <div class="clear"></div>
                </li>
            </ul>
        	
        </div>
        <div class="lists">
        	 <ul>
                <li>
                    <p>在哪里在哪里在哪里在哪里在哪里在哪里在哪里在哪里</p>
                    <div >
                        <span class="f-l">2017-10-12</span>
                        <div class="f-r finish" id="finish" onclick="actEva()">
                            <span class="activity">活动中</span><span class="actEvaluate" >意见反馈</span>

                            <img src="../../assets/image/myCenter/rights_arrows.png" alt=""/>
                        </div>
                    </div>

                    <div class="clear"></div>
                </li>
            </ul>

        </div>
        <div class="lists">
        	<ul>
                <li>
                    <p>在哪里在哪里在哪里在哪里在哪里在哪里在哪里在哪里</p>
                    <div >
                        <span class="f-l">2017-10-12</span>
                        <div class="f-r finish" >
                            <span class="activity">已结束</span><span class="actEvaluate" >意见反馈</span>

                            <img src="../../assets/image/myCenter/rights_arrows.png" alt=""/>
                        </div>
                    </div>

                    <div class="clear"></div>
                </li>
            </ul>

        </div>
        <div class="lists">
        	<ul  onclick="waitEva(\'' + activityId + '\')">
                  <li>
                      <p>很好很好！</p>
                      <div>
                          <span class="f-l"></span>
                          <div class="f-r finish">
                               <img src="../../assets/image/myCenter/rights_arrows.png" alt=""/>
                          </div>
                      </div>                                       
                      <div class="clear"></div>
                   </li>
             </ul>

        </div>
    </div>

</section>
<!-- 用户评价弹出框-->
<div class="model1">
    <div class="modelBox">
        <div class="modelTxt">
            <img src="${pageContext.request.contextPath}/image/activity/wrong.png" class="close" alt=""/>
            <h1><i></i>&nbsp;&nbsp;用户评价&nbsp;&nbsp;<i></i></h1>
            <input type="hidden" id="myActId"/>
            <input type="hidden" id="star"/>
            <!--<ul>-->
            <!--<li class="star1 active1"></li>-->
            <!--<li class="star2 active1"></li>-->
            <!--<li class="star3 active1"></li>-->
            <!--<li class="star4 active1"></li>-->
            <!--<li class="star5 active1"></li>-->
            <!--</ul>-->
            <div class="demo">
                <div id="score-demo"></div>
            </div>
            <textarea rows="5" cols="12" style="width:100%;" id="textContent" placeholder="说说哪里最赞吧"></textarea>
            <div class="btn1">
                <button id="cancel">取消</button>
                <button id="submit">递交</button>
            </div>
        </div>

    </div>
</div>
	</div>
</template>
<style type="text/css">    
    @import '../../assets/css/vol.css'
</style>
<script type="text/javascript">
	 import '../../js/jquery-1.7.1.js'
	 import Axios from 'axios'
	 import {setCookie,getCookie} from '../../assets/js/cookie.js'
	  var cellPhone= getCookie('userName');

     export default {
      data() {
	      return{	        
		        model:[],
		        all:[],
		        review:[],
		        acting:[],
		        over:[],
		        num: 0,
		        page: 1,//页码
		        showlaoding: true,//是否显示loading效果
		        tabs:[
		          {            
		             title:'全部'
		          },
		          {
		          
		             title:'审核中'
		          },
		          {
		          
		             title:'活动中'
		          },
		          {
		          
		             title:'已结束'
		          },
		          {
		          
		             title:'待评价'
		          }

		        ],
		        showcom:true,
		        id:'',
		        result:'',
		        checked:false,
		        ruleForm: {
		           telPhoneNum: '', //用户名
		           pass: ''  //密码
	        },
	       
      }
    },
    components: { // 声明子组件

    },
    mounted:function () {
     //var cellPhone= getCookie('userName');
     //alert(cellPhone);   

     Axios.get('http://www.shgdinfo.com/jcweChat/appController/myAppActivity', {params: {cellPhone:cellPhone,ext1:2}}).then(res=>{
          console.log(res.data);
          this.all=res.data;     
          console.log(this.all);

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
          //全部读取后台数据
          Axios.get('http://www.shgdinfo.com/jcweChat/appController/myAppActivity', {params: {cellPhone:cellPhone,ext1:2}}).then(res=>{
              console.log(res.data);
	          this.all=res.data;     
	          console.log(this.all);

        	}).catch(error=>console.log(error));

        }else if(this.num==1){
          //审核中
           Axios.get('http://www.shgdinfo.com/jcweChat/appController/myAppActivity', {params: {cellPhone:cellPhone,ext1:2,isCheck:0}}).then(res=>{
            
            this.review=res.data;
            console.log(this.review);
       		 }).catch(error=>console.log(error));
       
        }else if(this.num==2){
          //活动中
           Axios.get('http://www.shgdinfo.com/jcweChat/appController/myAppActivity', {params: {cellPhone:cellPhone,ext1:2,isCheck:1,activityStatus:3}}).then(res=>{
           
            this.acting=res.data;
            console.log(this.acting);
           }).catch(error=>console.log(error));

        }else if(this.num==3){
          //已结束
           Axios.get('http://www.shgdinfo.com/jcweChat/appController/myAppActivity', {params: {cellPhone:cellPhone,ext1:2,isCheck:1,activityStatus:4}}).then(res=>{
            
            this.over=res.data;
            console.log(this.over);
           }).catch(error=>console.log(error));
        }
	        // alert(this.num)
	        $('.tab .item').addClass('cur').siblings('.item').removeClass('cur');
	        $('.lists').eq(this.num).show().siblings('.lists').hide();
      },
       
	   lostPassWord(){
	   		//alert(123)   		
	   }
	   
       
      },
      watch: {
         
      }
     
    
  }




</script>