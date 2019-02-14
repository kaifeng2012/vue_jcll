<template>
	<div>
		<header style="overflow-x:hidden;color:#4F4F4F" id="head">

            <img src="../assets/image/myCenter/bgHead.png" alt=""/>
            <div class="mask1">
                <span class="mask"></span>                
                <img src="../assets/image/myCenter/headPic.png" alt=""/>
                <span class="name">木木木木v&nbsp;&nbsp;ID：1234567</span>
                <span class="num">未实名认证&nbsp;|&nbsp;尚未领取一卡通</span>
                <span class="myCenter">非志愿者</span>
            </div>
            <div class="qdsm">
            	<img src="../assets/image/myCenter/saomiao.png" alt="" />
            	<p>签到扫描</p>
            </div>

        </header>
        <!--主题部分内容-->
        <section id="main" style="overflow-x:hidden;margin-bottom:2rem;">
            <router-link :to="{path: 'centerIntro'}" tag="a">
                <img src="../assets/image/myCenter/icon0.png" alt=""/>
                <p>中心介绍</p>
                <img src="../assets/image/myCenter/right_arrows2.png" alt="" />
            </router-link>

           <!--  <a href="duesRecord.html">
                <img src="../../image/myCenter/icon02.png" alt=""/>
                <p >我的党员状况</p>
                <img src="../../image/myCenter/right_arrows2.png" alt=""/>
            </a> -->
            <router-link :to="{path: 'myAct'}" tag="a">
                <img src="../assets/image/myCenter/icons1.png" alt=""/>
                <p>我的活动</p>
                <img src="../assets/image/myCenter/right_arrows2.png" alt=""/>
            </router-link>
            <router-link :to="{path: 'myVol'}" tag="a">
                <img src="../assets/image/myCenter/icon04.png" alt=""/>
                <p>我是志愿者</p>
                <img src="../assets/image/myCenter/right_arrows2.png" alt=""/>
            </router-link>
            <a href="qustionnaire.html">
                <img src="../assets/image/myCenter/icons5.png" alt=""/>
                <p>问卷调查</p>
                <img src="../assets/image/myCenter/right_arrows2.png" alt=""/>
            </a>
            <a href="myPoints.html">
                <img src="../assets/image/myCenter/icons3.png" alt=""/>
                <p id="wdjf" class="myJf">我的钱包</p>
                <img src="../assets/image/myCenter/right_arrows2.png" alt=""/>

            </a>
            
            <a href="leaveWord.html">
                <img src="../assets/image/myCenter/icons4.png" alt=""/>
                <p>积分商城</p>
                <img src="../assets/image/myCenter/right_arrows2.png" alt=""/>
            </a>
            <a href="msgMgt.html">
                <img src="../assets/image/myCenter/icons7.png" alt=""/>
                <p>我的资料</p>
                <img src="../assets/image/myCenter/right_arrows2.png" alt=""/>
            </a>
        	<a href="userBind.html" >
                <img src="../assets/image/myCenter/icons12.png" alt=""/>
                <p>实名认证</p>
                <img src="../assets/image/myCenter/right_arrows2.png" alt=""/>
            </a>
            <a href="lottery3.html" >
                <img src="../assets/image/myCenter/lottery.png" alt=""/>
                <p>快乐大转盘</p>
                <img src="../assets/image/myCenter/right_arrows2.png" alt=""/>
            </a>
            <a href="register.html" >
                <img src="../assets/image/myCenter/register.png" alt=""/>
                <p>每日签到</p>
                <img src="../assets/image/myCenter/right_arrows2.png" alt=""/>
            </a>
            <a href="search.html">
                <img src="../assets/image/myCenter/icons13.png" alt=""/>
                <p>分享二维码</p>
                <img src="../assets/image/myCenter/right_arrows2.png" alt=""/>
            </a>

            <a href="javascript:;" @click="signout()">
                <img src="../assets/image/myCenter/icons13.png" alt=""/>
                <p>退出登陆</p>
                <img src="../assets/image/myCenter/right_arrows2.png" alt=""/>
            </a>
        </section>
        <div class="model1">
          <div class="modelBox">
            <div class="modelTxt">
                <form>
                    <img src="../assets/image/activity/wrong.png" class="close" alt=""/>
                    <h1>修改密码</h1>
                    <ul>
                        <li class="userName">
                            <label for="userName">用户ID:</label>
                            <input type="text" id="userName"/>
                        </li>
                        <li class="passWord">
                            <input type="password" id="passWord" placeholder="原密码"/>
                        </li>
                        <li class="newPassWord">
                            <input type="password" id="newPassWord" placeholder="新密码"/>
                        </li>
                    </ul>
                    <div class="btn1">
                        <button>确认</button>
                    </div>
                </form>
            </div>
         </div>
        </div>
	</div>
</template>

<style type="text/css">
    /*@import '../../assets/css/llCenterList.css'*/
	@import '../assets/css/myCenter.css'

</style>

<script type="text/javascript">
        import {setCookie,getCookie,delCookie} from '../assets/js/cookie.js'
export default {
    data() {
      return{
        
       
       
      }
    },
    components: { // 声明子组件

    },
    mounted:function () {

    
    },
    methods: {
     
       signout(){
         /*删除cookie*/
           delCookie('userName');
           this.$router.push({
               path: '/'
            });
       }
   }
}
</script>


