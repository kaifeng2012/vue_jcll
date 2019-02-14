<template>
    <div>
        <!--头部-->
        <header class="head">
            <img src="../../assets/image/news/leftBack.png" onclick="window.history.go(-1)" alt=""/>
            <span>我的活动</span>
        </header>
        <!--我申请的活动-->
        <section>
        <div class="myApplicAct">
            <!-- <img src="${pageContext.request.contextPath}/image/myCenter/left.png" alt=""/>  -->
            <span>我申请的活动</span>
        </div>
        <div class="tab">
            <a href="javascript:;" class="item" v-for="(item,index) in tabs" :class="{cur:index==num}" @click="tab(index)"><span>{{item.title}}</span></a>
            <!--<a href="javascript:;" class="item"><span>审核中</span></a>
            <a href="javascript:;" class="item"><span>活动中</span></a>
            <a href="javascript:;" class="item"><span>已结束</span></a>
            <a href="javascript:;" class="item"><span>待评价</span></a>-->
        </div>
        <div class="content">
            <div class="lists">
                <ul v-for="(item,index) in all" @:click="showCont">
                    <li>
                        <p>
                            <a href='javascript:;'>
                                {{item.activityName}}
                                <img style="width:4%;margin-left:0.2rem;vertical-align:middle;" src="../../assets/image/myCenter/face.png" alt="">
                            </a>
                        </p>
                        <div>                                      
                            <span class="f-l">{{item.piblishTime}}</span>
                            <div class="f-r" v-if="item.status==0">审核中</div>
                            <div class="f-r finish" v-else-if="item.status==2">
                                <span class="actEvaluate">活动结束</span><span class="actEvaluate">活动评价</span>
                                <img src="../../assets/image/myCenter/rights_arrows.png" alt=""/>
                            </div>
                            <div class="f-r finish" v-else="item.status==3">
                                <span class="actEvaluate">活动中</span><span class="actEvaluate">活动评价</span>
                                <img src="../../assets/image/myCenter/rights_arrows.png" alt=""/>
                            </div>

                        </div>                                             
                        <div class="clear"></div>
                    </li>
                </ul>
                   
               <!--<ul>
                    <li>
                        <p><a href=''>评价信息内容内容评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价<img style="width:4%;margin-left:0.2rem;vertical-align:middle;" src="../../assets/image/myCenter/face.png" alt=""></a></p>
                        <div>
                            <span class="f-l">2014-6-10</span>
                            <div class="f-r finish">
                                <span class="actEvaluate">活动结束</span><span class="actEvaluate">活动评价</span>
                                <img src="../../assets/image/myCenter/rights_arrows.png" alt=""/>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </li>
                </ul>


                <ul>
                    <li>
                        <p><a href=''>评价信息内容内容评价评价</a></p>
                        <div>                 
                            <span class="f-l">2012-8-10</span>
                            <div class="f-r finish" >
                            <span class="actEvaluate">活动中</span><span class="actEvaluate">活动评价</span>
                            <img src="../../assets/image/myCenter/rights_arrows.png" alt=""/>
                            </div>
                            </div>                                               
                            <div class="clear"></div>
                        </li>
                </ul>
                 -->
            </div>
            <div class="lists" style="display:none;">
                <ul>
                    <li>
                        <p><a href=''>评价信息内容内容评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价<img style="width:4%;margin-left:0.2rem;vertical-align:middle;" src="../../assets/image/myCenter/face.png" alt=""></a></p>
                        <div>                                      
                            <span class="f-l">2012-10-12</span>
                            <div class="f-r">审核中</div>
                        </div>
                        <div class="clear"></div>
                    </li>

                </ul>

            </div>
            <div class="lists" style="display:none;">
                <ul>
                    <li>             
                        <div>
                            <span class="f-l">2012-6-10</span>
                            <!-- <div class="f-r">活动中</div> -->
                             <div class="f-r finish" if-else-if="item.status==3">
                                <span class="actEvaluate">活动评价</span>
                                <img src="../../assets/image/myCenter/rights_arrows.png" alt=""/>
                             </div>
                         </div>
                         <div class="clear"></div>
                    </li>

               </ul>

            </div>
            <div class="lists" style="display:none;">
                <ul>
                    <li>
                        <p><a href=''>评价信息内容内容评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价<img style="width:4%;margin-left:0.2rem;vertical-align:middle;" src="../../assets/image/myCenter/face.png" alt=""></a></p>
                        <div>
                            <span class="f-l">2014-6-10</span>
                            <div class="f-r finish">
                            <span class="actEvaluate">活动结束</span><span class="actEvaluate">活动评价</span>
                            <img src="../../assets/image/myCenter/rights_arrows.png" alt=""/>
                        </div>
                        </div>
                        <div class="clear"></div>
                    </li>
                </ul>

            </div>
            <div class="lists" style="display:none;">
                <ul>
                    <li>
                        <p><a href=''>评价信息内容内容评价评价</a></p>
                        <div>                 
                            <span class="f-l">2012-8-10</span>
                            <div class="f-r finish" >
                            <span class="actEvaluate">活动中</span><span class="actEvaluate">活动评价</span>
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
            <img src="../../assets/image/activity/wrong.png" class="close" alt=""/>
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
    @import '../../assets/css/myAct.css'
</style>

<script type="text/javascript">
   import Vue from 'vue'
   import Axios from 'axios'
   Vue.prototype.$http=Axios
   //import data from 'jcDt.json'
   //console.log(data)
   window.idx=0;

   /*引入公共方法*/
   import { setCookie,getCookie,delCookie } from '../../assets/js/cookie.js'

   //获取url中的参数
   function getUrlParam(name) {
     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
     var r = window.location.search.substr(1).match(reg);  //匹配目标参数
     if (r != null) return unescape(r[2]);
     return null; //返回参数值
   }

  //接收URL中的参数id
  // var idx = getUrlParam('idx');
    //alert(idx);
 
  export default {
    data () {

      return {
        page: 1,//页码
        showlaoding: true,//是否显示loading效果
        num:0,
        all:[],
        review:[],       
        acting:[],
        over:[],
        show:true,
        idx:0,

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

        ]
      
      }
    },
    beforeCreate:function(){
      //alert(1)
    },
    created:function(){
     // alert(2)
    },
    beforeMount:function(){
     // alert(3)
    },

    mounted: function () {
     //接收从详情点击跳转到列表的参数
      //idx = this.$route.query.idx;

      //console.log(idx);

      var tel=getCookie('userName');
      // alert(tel);
      console.log(tel);
      //alert(idx);

      // let index = this.$route.query.index


      // this.tab(0);
      // $('.tab .item').addClass('cur').siblings('.item').removeClass('cur');

     //if(idx==0){
     // alert(10);
        //新闻动态读取后台数据
        //https://www.shgdinfo.com/jcweChat//activityController/getActivityLis

        Axios.get('http://www.shgdinfo.com/jcweChat/appController/myAppActivity?cellPhone=tel&ext1=1').then(res=>{
          console.log(res.data);
          this.all=res.data;  
         // this.all=res.data.data; 

         
          console.log(this.all);

        }).catch(error=>console.log(error));

     },
    methods: {

      tab(index) {
         var tel=getCookie('userName');
        //alert(tel);
         console.log(tel);
         idx=index;
       //alert(index);
       this.num = idx;
        console.log(this.num);
        if(this.num==0){
         alert(this.num);
          //所有活动
          Axios.get('http://www.shgdinfo.com/jcweChat/appController/myAppActivity?cellPhone=tel&ext1=1').then(res=>{
            console.log(res);
             this.all=res.data; 
            //let activityName=res.data[0].activityName  
            //console.log(activityName)

            console.log(this.all);

           }).catch(error=>console.log(error));

        }else if(this.num==1){
          alert(this.num);
          //审核中
           Axios.get('http://www.shgdinfo.com/jcweChat/appController/myAppActivity?cellPhone=tel&ext1=1&isCheck=0').then(res=>{
            //console.log(res);
            this.review=res.data.data;

            console.log(this.review);

        }).catch(error=>console.log(error));
       

        }else if(this.num==2){
          alert(this.num);
          //活动中
           Axios.get('http://www.shgdinfo.com/jcweChat/appController/myAppActivity?cellPhone=tel&ext1=1&isCheck=1&activityStatus=3').then(res=>{
            //console.log(res);
            this.acting=res.data.data;

          console.log(this.acting);

        }).catch(error=>console.log(error));

        }else if(this.num==3){
          alert(this.num);
          //已结束
           Axios.get('http://www.shgdinfo.com/jcweChat/appController/myAppActivity?cellPhone=tel&ext1=1&isCheck=1&activityStatus=4').then(res=>{
            //console.log(res);
            this.over=res.data.data;

          console.log(this.over);

        }).catch(error=>console.log(error));

        }else if(this.num==4){
          alert(this.num);
          //已结束
           Axios.get('http://www.shgdinfo.com/jcweChat/appController/myAppActivity?cellPhone=tel&ext1=1&isCheck=1&activityStatus=4').then(res=>{
            //console.log(res);
            this.over=res.data.data;

          console.log(this.over);

        }).catch(error=>console.log(error));

        }
       // alert(this.num)
        $('.tab .item').addClass('cur').siblings('.item').removeClass('cur');
        $('.lists').eq(this.num).show().siblings('.lists').hide();
      },
      showCont(){
        this.show=!this.show;
      }
    
    },
    watch: {
     },
     filters: {
         msg: function(msg) {
            return msg.replace(/<\/?(a|p|span)[^>]*>/gi, '') ;//过滤数据中的标签p,a,span
        }
      }
  }
</script>