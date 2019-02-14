<template>
	<div>
		<header class="head">
		   <img src="${pageContext.request.contextPath}/image/news/leftBack.png" onclick="window.history.go(-1)" alt=""/>
		    <span>每日签到</span>
		</header>
		<div class="newsMain">
		    <!--新闻动态、基层动态、党务公开-->
			<div class="nav tab">
				<a href="javascript:;" class="item"  v-for="(item,index) in dateValue" :class="{cur:index==num}">
                     <dl>
                         <dt>
                         	<span>{{item.integralValue}}</span>
                         </dt>
                         <dd>{{item.nextDay}}</dd>
                     </dl>
                </a>		       
		    </div>
	    </div>
	<div class="register">
	    <button @click="register()">立刻签到</button>
	    <ul>
	        <li>您已经连续签到：<span id="signDate1">{{registerList.consecutiveNum}}</span>天</li>
	        <li>获得：<span  id="point">{{registerList.totalPoint}}</span>积分</li>
	    </ul>
	</div>
	<div class="act-rule">
	    <div>
	        <h3>活动规则：</h3>
	        <p>每天签到达到连续奖励时间即可获得相应积分，中途未连续将会重新开始计算，最多可连续<span id="totalDate">0</span>天，将一次获得<span id="totalJf">0</span>积分！</p>
	    </div>
	</div>

	<!--<div class="model2" id="model2" style="display:none">
		   <div class="modelBox">
		       <div class="modelTxt">		          
		           <div id="formFirst">
		               <ul>
		                  <li><label>手机号</label><input type="text" id="phoneNum" value="请输入手机号" v-on:focus="" v-on:blur="" style="width:56%;border:0;background:transparent;color:#ffffff;
    outline: none;"/>&nbsp;</li>
		                  <li><label>验证码</label><input type="text" id="phonecode" value="请输入验证码" style="width:27%;border:0;background: transparent;color:#ffffff;
    outline: none;"/><input type="button" class="btn" id="btnsms" value="获取验证码"/></li>
    						<li><label>设置密码</label><input type="text" id="passWord" value="请设置登陆密码" style="width:56%;border:0;background: transparent;color:#ffffff;
    outline: none;"/>&nbsp;</li>
		                  <li class="btn"><button @click="bindbyphone()" class="sure">提交</button></li>
		                </ul>
		            </div>
		        </div>
		    </div>
	</div>-->

	<div class="model2" id="model2" style="display:none">
		   <div class="modelBox" style="left:9%;width:80%">
		       <div class="modelTxt">		          
		           <div id="formFirst">
		               <ul>
		                  <li><label><img src="../assets/image/name.png" style="vertical-align:middle;width:48%"/></label><input type="text" id="telPhoneNum" v-on:focus="" v-on:blur="" value="请输入手机号" style="width:56%;border:0;background:transparent;color:#ffffff;
    outline: none;"/>&nbsp;</li>
		                  <li><label><img src="../assets/image/suo.png" style="vertical-align:middle;width:40%"/></label><input v-on:focus="" v-on:blur="" type="text" id="pass" value="请输入密码" style="width:27%;border:0;background:transparent;color:#ffffff;outline:none;"/></li>
    						<li style="border:0;"><label style="width:5.7rem;"><input type="checkbox" name="" style="vertical-align:middle;">记住密码</label><router-link :to="{path:'login'}" tag="a" >忘记密码？</router-link>&nbsp;</li>
    						<li class="btn"><button @click="signUp()" class="sure">登陆</button></li>
    						<li style="text-align:center;border :0;">您还没有注册？ <router-link style="color:red;redtext-decoration:underline;" :to="{path:'login'}" tag="a" >马上注册</router-link></li>
    						<li style="text-align:center;border:0;line-height:0.6rem;">如果您已经在微信公众号上绑定过手机，请使用忘记密码功能设置密码后登陆！</li>		                 
		                </ul>
		            </div>
		        </div>
		    </div>
		</div>
	</div>
</template>
<script type="text/javascript">
    import {setCookie,getCookie} from '../assets/js/cookie.js'
var id;
	
export default {
    data() {
      return{      
        registerList:[],
        dateValue:[],
        arr:[],
        isActive:true,
        num:0      
      }
    },
    components: { // 声明子组件

    },
    mounted:function () {
    	id = this.$route.query.memberId
      //setCookie('id',id,1000*60);

    	//alert(id)
    	 //每日签到页面数据获取
      axios.get('http://www.shllzx.com/llzx//appController/appSignInitForm', {params: {memberId: id}}).then(res=>{
        console.log(res);
        this.registerList=res.data;
        this.dateValue=res.data.data;
	      console.log(this.dateValue);
	     console.log(res.data);

      }).catch(error=>console.log(error));
    },
    methods: {	 
	   register(){
	   	 $.ajax({
             	url:'http://www.shllzx.com/llzx//appController/appSign',
                 type: "post",
                 data: {
                 	"memberId":id
                 	
                 },
                  dataType: 'json',
                
             }).then(function (res) {
                alert(res.msg);
　　　　　　　　　　//把从json获取的数据赋值给数组
                self.arr = res;
               // alert(self.model)

                if(res.code == "1"){
                        alert(res.msg);
                        
                  }

            }).fail(function () {
                console.log('失败');
            })
	      }
	   
       
      },

      watch: {
          $route(e){
            alert(123456);
            console.log(e);

      
          }
      }
     
    
  }





</script>
<style type="text/css">
  body{
    margin:0;
    padding:0;
  }
</style>

<style type="text/css" scoped>
  @import '../assets/css/register.css'
</style>