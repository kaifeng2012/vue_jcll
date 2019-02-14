<template>
	<div>
		<div class="content">
		<div class="lists">
	        <div v-for="item in actSub">
	          <div>{{item.author}}&nbsp;&nbsp;&nbsp;&nbsp;发布时间：{{item.createDate}}</div>
	          <div style="border-bottom:1px solid #C0C0C0;line-hight:10px;"></div>
	          <div style="padding-top:7px;"><p v-html="$options.filters.msg(item.content)"></p></div><br/><br/>
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
        actSub:[]        
      }
    },
    components: { // 声明子组件
    
    },
    mounted: function () {
      // 获取页面中的参数值
      let id = this.$route.query.id
      console.log(id);
    
      //活动专题读取后台数据
      axios.get('http://www.shllzx.com/llzx//activityController/getActivityInfoZt', {params: {id: id}}).then(res=>{
       console.log(res);
       this.actSub=res.data;
       console.log(res.data);
      
   		}).catch(error=>console.log(error));

    },
    methods: {
    	
     
      },
   filters: {
	msg: function(msg) {
	      return msg.replace(/<\/?(a|span)[^>]*>/gi, '') ;//过滤数据中的标签p,a,span
	      }
     }
  }

</script>
