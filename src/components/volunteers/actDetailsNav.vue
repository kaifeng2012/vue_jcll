<template>
  <div>
      <div class="content">
          <div class="lists">
            <ul>
              <li>
                <img src = "../../assets/image/activity/a6.png" alt = "" />
                <span class= "title"> 活动主题：</span>
                <span>{{actList.activityName}}</span>
              </li>
              <li>
                <img src = "../../assets/image/activity/a6.png" alt = "" />
                <span class= "title">发布机构：</span>
                <span>{{actList.publishUser}}</span>
              </li>
              <li>
                <img src = "../../assets/image/activity/a6.png" alt = "" />
                <span class= "title"> 活动类型： </span>
                <span>{{actList.activityTypeName}}</span>
              </li>
              <li>
                <img src = "../../assets/image/activity/a6.png" alt =""/>
                <span class="title"> 活动方式：</span>
                <span>{{actList.activityMode}}</span>
              </li>
              <li>
                <img src = "../../assets/image/activity/a6.png" alt =""/>
                <span class="title"> 报名时间： </span>
                <span>{{actList.jointime}}</span>
              </li>
              <li>
                <img src = "../../assets/image/activity/a6.png" alt =""/>
                <span class="title"> 活动时间： </span>
                <span>{{actList.activitytime}}</span>
              </li>
              <li>
                <img src = "../../assets/image/activity/a6.png" alt =""/>
                <span class="title"> 活动地址： </span>
                <span>{{actList.activityAddress}}</span>
              </li>

              <li>
                <img src = "../../assets/image/activity/a6.png" alt =""/>
                <span class="title"> 人数限制： </span>
                <span>{{actList.activityNumber}}</span>
              </li>
              <li>
                <img src = "../../assets/image/activity/a6.png" alt =""/>
                <span class="title"> 报名人数： </span>
                <span>{{actList.enrollmentNum}}</span>
              </li>
              <li>
                <img src = "../../assets/image/activity/a6.png" alt =""/>
                <span class="title jifen"> 邻里币： </span>
                {{actList.qrPoint}}
              </li>
              <li>
              </li>
              <li>
                <img src = "../../assets/image/activity/a6.png" alt =""/>
                <span class= "title"> 活动详情：</span>
                </li>
              <li> <p class="firstTxt" v-html="actList.activityContent"></p></li>
              </ul>
          </div>
          
     </div>
  </div>
</template>
<script>
export default {
    data() {
      return{
       
        actDet:[],
        actList:[]
        
      }
    },
    components: { // 声明子组件
      // actDet,
      // actApply,
      // actSub,
      
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
      this.actDet=res.data;
     console.log(this.actDet);
      this.actList=res.data.activity;
      console.log(this.actList);

      if(this.actDet.evacount>0){
        var res = '活动评价(<span style="color:#FF0000">'+this.actDet.evacount+'</span>)';
        $(".eva span").html(res);
      }else{
        var res = '活动评价('+this.actDet.evacount+')';
        $(".eva span").html(res);
      }
      if(this.actDet.ztcount>0){
        var res0 = '活动专题(<span style="color:#FF0000">'+this.actDet.ztcount+'</span>)';
        $(".theme span").html(res0);
      }else{
        var res0 = '活动专题('+this.actDet.ztcount+')';
        $(".theme span").html(res0);
      }
     // let act=this.actList.fileUrl
     // console.log(act);
      //let img=act.fileUrl

      //let imgUrl=act.replace(/\\/g, "/")


     // console.log(imgUrl);
      //console.log(res.data);




    }).catch(error=>console.log(error));


     

    },
    methods: {
      
      }
    
  }

</script>
