<template>
  <div class="index-wrap6">
    <!-- 头部-->
    <router-link  to="/vol" @click.native="flushCom">
       <img src="../../assets/image/index/back.png" class="back" alt=""/>
    </router-link>
    <div class="topHead">
       <img :src="'http://www.shgdinfo.com/'+actList.fileUrl" class="banner" alt=""/>
    </div>
    <div class="tab">
      <a href="javascript:;" class="item" @click="toggleTab('actDetailsNav')" :class="flag=='actDetailsNav'?'cur':''"><span>活动详情</span></a>

      <a href="javascript:;" class="item" @click="toggleTab('actEav')" :class="flag=='actEav'?'cur':''">

        <span id="eva" v-if="actDet.evacount>0">活动评价({{actDet.evacount}})</span>
        <span id="eva" v-else>活动评价({{actDet.evacount}})</span>
      </a>
      <a href="javascript:;" class="item" @click="toggleTab('actProject')" :class="flag=='actProject'?'cur':''">
        <span id="theme" v-if="actDet.ztcount>0">活动专题({{actDet.ztcount}})</span>
        <span id="theme" v-else>活动专题({{actDet.ztcount}})</span>
      </a>
      <!-- <a href="#" class="item" v-for="(item,idx) in actDet" :class="[{cur:idx==numT},{'eva':idx==1},{'theme':idx==2}]" @click="yxbg1(idx)"><span>{{item.title}}</span></a> -->
    </div>
   
     <!--is 特性动态绑定子组件-->
    <!-- keep-alive 将切换出去的组件保留在内存中-->
    <!--keep-alive 指令可以将切换出去的组件保留在内存中，可以保留它的状态或避免重新渲染。-->
    <prince :is="currentTab" keep-alive></prince>
    <div class="model6" id="sqm" style="display:none;">
      <div class="modelBox">
        <div class="modelTxt">
          <h1>该活动需要授权才能报名</h1>
          <p>请输入授权码：</p >
          <input type="text" value="" id="passWord">
          <div class="btn1">
            <button class="backIdx" onclick="javascript:history.back(-1);">取消</button>
            <button class="myCenter" onclick="queren()">确认</button>        
          </div>
        </div>

      </div>
    </div>
    <!-- 报名审核中弹出框-->
    <div class="model">
      <div class="modelBox">
        <div class="modelTxt">
          <img src="../../assets/image/activity/wrong.png" class="close" alt=""/>
          <img src="../../assets/image/activity/right0.jpg" class="right" alt=""/>
          <h1>报名审核中</h1>
          <p>您已完成在线报名</p>
          <p>请等待工作人员和你确认信息</p>
          <p>您可以进入"个人中心"查看进度，谢谢！</p>
          <div class="btn1">
            <button>进入个人中心</button>
            <button>返回首页</button>
          </div>
        </div>

      </div>
    </div>
    <!-- 用户评价弹出框-->
    <div class="model1">
      <div class="modelBox">
        <div class="modelTxt">
          <img src="../../assets/image/activity/wrong.png" class="close" alt=""/>

          <h1><i></i>&nbsp;&nbsp;用户评价&nbsp;&nbsp;<i></i></h1>
          <ul>
            <li class="star1 active"></li>
            <li class="star2 active"></li>
            <li class="star3 active"></li>
            <li class="star4 active"></li>
            <li class="star5 "></li>
          </ul>
          <textarea rows="5" cols="12" style="width:100%;" id="textContent" placeholder="说说哪里最赞吧"></textarea>

          <div class="btn1">
            <button>取消</button>
            <button>递交</button>
          </div>
        </div>

      </div>
    </div>

    <div class="model2" id="model2" style="display: none;">
    <div class="modelBox" style=" height:38%;top:31%">
        <div class="modelTxt">
            <h3>绑定手机</h3>
            <div class="title">注意：第一次参加活动需要绑定手机号</div>
            <div id="formFirst">
                <ul>
                    <li>手机号：<input type="text" id="phoneNum" value="" style="width:56%;"/>&nbsp;</li>
                    <li>验证码：<input type="text" id="phonecode" style="width:27%"/><input type="button" class="btn" id="btnsms" value="获取验证码" onclick=""/></li>
                    <li class="btn"><button class="cancle" style="margin-right:0.4rem;background:#666666;" onclick="window.history.go(-1);">取消</button><button style=" margin-left:0.4rem;" onclick="bindbyphone()" class="sure">确定</button></li>
                </ul>
            </div>
        </div>
    </div>
</div>
    <!--已经审核弹出框 -->
    <div class="checkedModel">
    </div>
    <!--分享-->
    <div class="model3">

      <div class="modelTxt">
        <img src="../../assets/image/activity/share.png" alt=""/>
        <p>知道啦！</p >
      </div>

    </div>
    <!--历史活动与预告活动不能报名弹出框-->
    <div class="historyModel">

    </div>
    <!--报名人数已满-->
    <div class="numModel">
    </div>

    <module v-bind:msgOfP = "msgOfP" v-on:titleChanged = "zidingyi($event,actList.id,actList.authorizationCode)"></module><!--底部导航替换主菜单-->
  </div>
</template>
<script>
  // 引入子组件
  //import actDet from '../../components/actDet';
  //import actApply from '../../components/actApply';
  //活动详情
  import actDetailsNav from '../../components/active/actDetailsNav';
  //活动评价
  import actEav from '../../components/active/actEav';
  import actProject from '../../components/active/actProject';

  //import Axios from 'axios'
  import '../../js/jquery-1.7.1.js'
  import module from '../../components/active/module'

  export default {
    data() {
      return{
        msgOfP:'我狮子啊',
        actList:[],
        actApply:[],
        actSub:[],
        actDet:[],
        currentTab: 'actDetailsNav' ,// currentTab 用于标识当前触发的子组件
        flag:'actDetailsNav',//默认为百度添加 .active
        page: 1,//页码
        showlaoding: true,//是否显示loading效果
        numT:0,
        num: 0,
        isAdd:true,
        yxbg:[],
        //authorizationCode:'',
        //id:''
        
      }
    },
    components: { // 声明子组件
    
       module,
       actDetailsNav,
       actEav,
       actProject
    },
    mounted: function () {
      // 获取页面中的参数值
      let id = this.$route.query.id
      console.log(id);
      //let shareUrl=window.location.href ;
      //console.log(this.$route.query.id) //
      //活动详情读取后台数据
      axios.get('http://www.shllzx.com/llzx/appController/appgetActivity', {params: {id: id}}).then(res=>{
        //console.log(res);
     // this.actDet=res.data;
    // console.log(this.actDet);
      this.actList=res.data.activity;
     let authorizationCode= this.actList.authorizationCode

     //let id= this.actList.id


     //let authorizationCode=res.data.authorizationCode
    console.log(authorizationCode)
    console.log(id)

      console.log(this.actList);

    }).catch(error=>console.log(error));



     
    },
    methods: {
      zidingyi(msg,e,t){
        
        this.msgOfP = msg;
        //console.log(this.msgOfP)


        alert(e);
        alert(t);
        console.log(e);
       // this.$router.push({  
           // path: 'dataIntro',   
           // name: 'dataIntro',  //要跳转的路径的 name,在 router 文件夹下的 index.js 文件内找
           // query: {                  
             //   id:e,
            //    p:t

           // }  
     // })




      // var authorizationCode2 = $("#passWord").val();
      // alert(authorizationCode2)
            //活动详情读取后台数据
      axios.get('http://www.shllzx.com/llzx//appController/appJoinHdCheck', {params: {}}).then(res=>{
        

       if(res.data.code=='1'){
         alert(123)
       }else if(res.data.code=='0'){
          alert('错误消息')
       }
        

        }).catch(error=>console.log(error));
      },
       toggleTab: function(tab) {//传入参数这里指djwkt,yxbg,zxxx

        this.currentTab = tab; // tab 为当前触发标签页的组件名
        this.flag=tab;//flag==1 or flag==2
        alert(tab)
        $('.tab .item').addClass('cur').siblings('.item').removeClass('cur');
        $('.newsMain .nav .cur dd span ').css({
          'color':'#DD001C',
          'font-weight':'bold',
          'border-bottom':'0.5rem solid #DD001C'

        })

      },
      queren(){
          var authorizationCode = "";
          var authorizationCode2 = $("#passWord").val();
          if(authorizationCode2==''){
            alert("活动授权码必须输入");
            return;
          }
          if(authorizationCode == authorizationCode2){
            $("#sqm").hide();
          }else{
            alert("活动授权码输入错误");
          }
          /* $.ajax({
            type : 'POST',
            url : rootPath + '/activityController/getActivityCheckCode?authorizationCode='+authorizationCode+'&id='+id,
            success : function(data) {
              alert(data);
              if(data.result=="1"){
                $("#sqm").hide();
              }else{
                alert("活动授权码输入错误");
              }
            }
          }); */
       },
       flushCom:function(){
          //router是路由实例,例如:var router = new Router({})
            //router.go(n)是路由的一个方法，意思是在history记录中前进或者后退多少步，0就表示还是当前，类似window.history.go(n)
          this.$router.go(0);  
        }

      },
      }
     
    
  

</script>
<style type="text/css">
  @import '../../assets/css/actDetails.css'
  
   
</style>
