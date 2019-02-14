<template>
	<div>
		<div class="content">
			 <div class="lists">
		        <div v-for="item in actApply">
		          <img :src="'http://www.shgdinfo.com/'+item.headimg" class="via" alt=""/>
		          <div class="eval d-ib">
		            <h3>{{item.member_name}}</h3>
		            <div class="star">
		              <img :src="'http://www.shgdinfo.com/'+item.star" alt=""/>
		            </div>
		          </div>
		          <p class="evalue-content">{{item.content}}</p>
		          <div class="date f-r">{{item.creat_date}}</div>
		          <div class="line"></div>
		      </div>
          </div>
		</div>		
	</div>
</template>

<script>
  
  import '../../js/jquery-1.7.1.js'
 
  export default {
    data() {
      return{      
        actApply:[]      
      }
    },
    components: { // 声明子组件
       
    },
    mounted: function () {
      // 获取页面中的参数值
      let id = this.$route.query.id
      console.log(id);
    
      //活动评价读取后台数据
      axios.get('http://www.shllzx.com/llzx//activityController/getActivityEvaluate', {params: {id:id}}).then(res=>{
          console.log(res);
	      this.actApply=res.data;
	      let star = this.actApply.star;
	      console.log(star);
         //console.log(res.data)

      if(this.actApply.evacount>0){
        var res = '活动评价(<span style="color:#FF0000">'+this.actApply.evacount+'</span>)';
        $(".eva span").html(res);
      }else{
        var res = '活动评价('+this.actApply.evacount+')';
        $(".eva span").html(res);
      }
      if(this.actApply.ztcount>0){
        var res0 = '活动专题(<span style="color:#FF0000">'+this.actApply.ztcount+'</span>)';
        $(".theme span").html(res0);
      }else{
        var res0 = '活动专题('+this.actApply.ztcount+')';
        $(".theme span").html(res0);
      }



      }).catch(error=>console.log(error));

 
      




    },
    methods: {
     
      }
  }

</script>
