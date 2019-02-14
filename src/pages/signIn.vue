<template>
	<div>
		<!--<header class="head">
		   <img src="${pageContext.request.contextPath}/image/news/leftBack.png" onclick="window.history.go(-1)" alt=""/>
		    <span>每日签到</span>
		</header>
		<div class="newsMain">
		   
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
	    <button onClick="register()">立刻签到</button>
	    <ul>
	        <li>您已经连续签到：<span id="signDate1">0</span>天</li>
	        <li>获得：<span  id="point">0</span>积分</li>
	    </ul>
	</div>
	<div class="act-rule">
	    <div>
	        <h3>活动规则：</h3>
	        <p>每天签到达到连续奖励时间即可获得相应积分，中途未连续将会重新开始计算，最多可连续<span id="totalDate">0</span>天，将一次获得<span id="totalJf">0</span>积分！</p>
	    </div>
	</div>-->

	<div class="model2" id="model2" style="display:none" v-show='showcom'>
		   <div class="modelBox" style="left:9%;width:80%">
		       <div class="modelTxt">		          
		           <div id="formFirst">
		               <ul>
		                  <li><label><img src="../assets/image/name.png" style="vertical-align:middle;width:48%"/></label><input type="text" v-model="ruleForm.telPhoneNum" id="telPhoneNum" v-on:focus="" v-on:blur="" value="请输入手机号" style="width:56%;border:0;background:transparent;color:#ffffff;
    outline: none;"/>&nbsp;</li>
		                  <li><label><img src="../assets/image/suo.png" style="vertical-align:middle;width:40%"/></label><input v-on:focus="" v-on:blur="" type="text" id="pass" v-model="ruleForm.pass" value="请输入密码" style="width:27%;border:0;background:transparent;color:#ffffff;outline:none;"/></li>
    						<li style="border:0;"><label style="width:5.7rem;"><input type="checkbox" name="" style="vertical-align:middle;" v-model="checked" id="isRemberPwdId" >记住密码</label><router-link :to="{path:'login'}" tag="a" >忘记密码？</router-link>&nbsp;</li>
    						<li class="btn">
                                <button @click="signUp()" class="sure">登陆</button>
                            </li>
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
export default {
    data() {
      return{
        
        model:[],
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
     var id= getCookie('id');
     alert(id);   
       //signUp(this.id1)
      //alert(this.id);
       // this.$store.commit('changeLogin','100')   
        //登录后改变登录状态 isLogin = 100 ；
    	 //每日签到页面数据获取
      // axios.get('http://www.shgdinfo.com/jcweChat//appController/appSignInitForm', {params: {userId: id}}).then(res=>{
      //   console.log(res);
      //   this.registerList=res.data;
	     // // console.log(this.newsList);
	     // console.log(res.data);

      // }).catch(error=>console.log(error));
      /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
    if(getCookie('userName')){

         alert(6789);   
        //this.$router.push('/register')

     this.$router.push({  
                path: 'register',   
                name: 'register',  
                query: {   
                         memberId:id                                 
                       }                             
                   })  
       }
    },
    methods: {
     
	   signUp(){
        //alert(t);
        //console.log(t)
       //setCookie('telPhoneNum',telPhoneNum,1000*60)
	   		//var cell=$('#telPhoneNum').val();
	   		//console.log(cell)
	   		//var pass=$('#pass').val();
	   		//console.log(pass)
         //保存的账号
        var userName=this.ruleForm.telPhoneNum;
        console.log(userName)
        //保存的密码
        var pass=this.ruleForm.pass;
        var reg = /^1[34578]\d{9}$/;
        if(userName==''||userName==null||!reg.test(userName)){
          alert("请输入正确的用户名");
          return
        }else if(pass==''||pass==null) {
          alert("请输入正确的密码");
          return
        }
        //判断复选框是否被勾选 勾选则调用配置cookie方法
        //if(this.checked=true){
            //传入账号名，密码，和保存天数3个参数
         // setCookie(cell,pass,1000*60);
       // }
       
        setCookie('userName',userName,43200*60);
        var self = this;

	   	  $.ajax({
             	url:'http://www.shllzx.com/llzx/appController/applogin',
                 type: "post",
                 data: {
                 	"phone":userName,
                 	"pass":pass
                 },
                  dataType: 'json',
                  async: false,
                  success: function(data) {
                 	//alert(data);
                 	console.log(data);
                  let id1=data.memberId;
                  alert(id1);
                	 
                 }
             }).then(function (res) {
                console.log(res);
　　　　　　　　　　//把从json获取的数据赋值给数组
                self.model = res;
                 // alert(self.model)

                if(res.code == "1"){

                        //alert(res.msg);
                        //alert(res.code)
                        let id=res.memberId;
                        alert(id)
                        console.log(id)
                       setCookie('id',id,1000*60);//存储id
                     self.$router.push({  
                            path: 'register',   
                            name: 'register',  
                            query: {   
                                memberId:id                                 
                            }                             
                        })  
                                             
                     }

            }).fail(function () {
                console.log('失败');
            })


	   	 //this.showcom = false;
         // alert(this.showcom)

       /* this.$message({
          message: '登录成功',
          type: 'success'
        })
        this.$store.commit('$_setStorage', {user: this.loginForm.username})
        this.$store.commit('$_setLogin', '1')
        this.$router.push({name: 'Home'})*/

	   },

  
	   lostPassWord(){
	   		//alert(123)   		
	   }
	   
       
      },
      watch: {
          //$route(e){
            //alert(66899);
           // console.log(e);

          //}
      }
     
    
  }




</script>

<style type="text/css" scoped>
  @import '../assets/css/register.css'
</style>