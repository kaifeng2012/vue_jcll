<!-- <template>
	<div>
		<div class="model2" id="model2" style="display:block">
		   <div class="modelBox">
		       <div class="modelTxt">
		         
		           <div id="formFirst">
		               <ul>
		                  <li><label>手机号</label><input type="text" id="phoneNum" value="请输入手机号" style="width:56%;border:0;background:transparent;color:#ffffff;
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
		</div>

	</div>
</template> -->


<template >
    <div>
        <div class="bind-phone-box">
            <!-- <div class="phone-title">绑定手机</div> -->
            <div class="phone-content" v-on:click.stop="fillContent">
            	<div class="phonecode">
            		<label>手机号</label><input v-model="phoneNum" class="phone-num" type="text" placeholder="请输入手机号码">
            	</div>
                
                <div class="verify-box clearfix">
                   <label>验证码</label> <input class="verify-num" v-model="verifyNum" type="text" placeholder="请输入验证码"><input v-on:click="sendSmsCode" class="verify-btn" type="button" v-model="btnContent" v-bind="{'disabled':disabled}">
                </div>
                <div class="wordPass">
                	<label>设置密码</label><input  placeholder="请输入验证码" v-model="passWord" id="passWord">
                </div>
                
            </div>
            <div class="phone-submit clearfix">
                <!-- <input class="submit-cancel" type="button" value="取消"> -->
                <input class="submit-confirm" v-on:click.stop="verificationCode" type="button" value="确定">
            </div>
        </div>
    </div>
</template>


<style type="text/css">
  @import '../assets/css/register.css'
</style>
<script type="text/javascript">

 // 引入弹窗组件
    import { Toast } from 'mint-ui';
    export default {
         data(){
             return {
                 phoneNum:"", //手机号
                 verifyNum:"", //验证码
                 passWord:"",//密码
                 btnContent:"获取验证码", //获取验证码按钮内文字
                 time:0, //发送验证码间隔时间
                 disabled:false //按钮状态
             }
          },          
	      	mounted(){
	  		/*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
		    if(getCookie('phoneNum')){
		           this.$router.push('/home');
		    	}
			},
	         created(){},
	         methods:{
             // 获取验证码
             sendSmsCode(){
                 var reg=11&& /^((13|14|15|17|18)[0-9]{1}\d{8})$/;//手机号正则验证
                 var phoneNum = this.phoneNum;
                 if(!phoneNum){//未输入手机号
                     Toast("请输入手机号码");
                    return;
                 }
                if(!reg.test(phoneNum)){//手机号不合法
                     Toast("您输入的手机号码不合法，请重新输入");
                 }
                 this.time = 60;
                 this.timer();
 
                // 获取验证码请求
                 var url = 'http://www.shllzx.com/llzx/appController/ sendPhoneCode';
                 this.$http.post(url,{"cellPhone":phoneNum},{emulateJSON:true}).then((response)=>{
                    console.log(response.body);
                 });
 
             },
             timer(){
                 if(this.time>0){
                     this.time--;
                     this.btnContent = this.time+"s后重新获取";
                    this.disabled = true;
                    var timer = setTimeout(this.timer,1000);
                }else if(this.time == 0){
                     this.btnContent = "获取验证码";
                  
                     clearTimeout(timer);
                    this.disabled = false;
                 }
            },
             // 验证验证码
             verificationCode(){
                 var phoneNum = this.phoneNum;//手机号
                 var verifyNum = this.verifyNum;//验证码
                 var passWord=this.passWord;//验证码
                 alert(passWord)
 
                 var  url = 'http://www.shllzx.com/llzx/appController/appregister';
                this.$http.post(url,{
                     "cellPhone":phoneNum,
                     "appPass":passWord,
                     "verificationCode":verifyNum

                 },{
                     emulateJSON:true
                 }).then((response)=>{
                     console.log(response.body);
                 });
             },
             fillContent(){
                 // console.log("fillContent");
             }
         }
     }

</script>

<style type="text/css" scoped>
	.bind-phone-box{
		  width: 100%;
		  height: 100%;
		  background:url(../assets/image/bg.png);
		  position: fixed;
		  top: 0;
		  left: 0;
		  bottom: 0;
		  z-index:100000;
		  /*display:none;*/
    }
	.bind-phone-box .phone-content{	 	 
		  top: 29.5%;
		  left:11%;
		  bottom: 0;
		  position: fixed;
		  border-radius: 30px;
		  text-align: center;
		  width: 78%;
	}
	.phone-submit{
		 top:50%;
		 left:17%;	
	     position: fixed;
	     text-align: center;
	}
	.model2 .modelBox .modelTxt {
		 text-align: center;
		 position: relative;
	}
	.model2 .modelBox .modelTxt .close {
		  padding-left: 0.7rem;
		  padding-top: 0.7rem;
		  position: absolute;
		  right: 0.4rem;
		  width: 22%;
		  top: -1.6rem;
	}
	.model2 .modelBox .modelTxt .right {
		  display: inline-block;
		  width: 2rem;
		  padding-top: 2rem;
	}
	.model2 .modelBox .modelTxt h3 {
		  padding-top: 0.3rem;
		  padding-bottom: 0.3rem;
		  font-size:0.46rem;
	}
	.model2 .modelBox .modelTxt p {
		  line-height: 0.7rem;
		  color: #BDBDBD;
		  font-size: 0.4rem;
	}
	.model2 .modelBox .modelTxt .sure {
	  	 margin-left: 0.4rem;
	}
	.model2 .modelBox .modelTxt .cancle {
	  	 margin-right: 0.4rem;
	}
	.model2 .modelBox .modelTxt .btn1 {
	    margin-top: 0.5rem;
	}
	.model2 .modelBox .modelTxt .btn1 button {
		  width: 3rem;
		  height: 1rem;
		  line-height: 1rem;
		  border-radius: 0.5rem;
		  border: 0;
		  background: #29a1f9;
		  color: #fff;
		  margin-left: 0.2rem;
		  margin-right: 0.2rem;
		  margin-top: 0.5rem;
	}
	.submit-confirm{
		  width:6rem;
		  height: 1rem;
		  line-height: 1rem;
		  border-radius:0.3rem;
		  border: 0;
		  background:#E3C225;
		  color: #fff;
		  margin-left: 0.2rem;
		  margin-right: 0.2rem;
		  margin-top: 0.5rem;
	}
	.phone-num{
		width:56%;
		border:0;
		background:transparent;
		color:#ffffff;
        outline: none;
	}
	.verify-num{
		width:27%;
		border:0;
		background:transparent;
		color:#ffffff;
        outline:none;
	}
	.verify-btn{
		  background: transparent;
		  border: 0;
		  color: red;

	}
	#passWord{
		width:56%;
		border:0;
		background:transparent;
		color:#ffffff;
	    outline: none;
	}

	.phonecode,.verify-box,.wordPass{
		border-bottom:1px solid #ffffff;
		height: 1rem;
        line-height: 1rem;
        text-align: left;
        color:#ffffff;

	}
	label{
		display:inline-block;
		width: 2rem;
        font-size: 0.4rem;
	}
	input::-webkit-input-placeholder {
          /* placeholder颜色  */
         color:#ffffff;
         /* placeholder字体大小  */
         font-size: 12px;
         /* placeholder位置  */
         /*text-align: right;*/
     }
     input {
         border: 1px solid #ffffff;
     }
</style>