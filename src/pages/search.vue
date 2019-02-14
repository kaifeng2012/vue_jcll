<template>
	<div>
		<!--头部-->
		<header class="head">		    
		    <span>搜索页</span>
		</header>

		<!--主题内容-->
		<div style="margin-top: 1.5rem;">
		<div class="newsMain sonType1"  style="text-align:center;padding-top:0.35rem;background:#ffffff;padding-bottom:0.2rem;">
		    <div id="center">
		    	<div class="type"><p>选择邻里中心：</p></div>
		    </div>
		    <select id="centerList" style="width:87%;height:0.8rem;margin-bottom:0.2rem;font-size:0.36rem;" >
		    	<option class="nav tab sonTab act" v-for="(item,index) in searchList" v-if="index==0" value="" selected="">全部</option>
		    	<option class="nav tab sonTab act" v-for="(item,index) in searchList" v-else-if :value="item.id">{{item.centerName}}</option>	    		
		    </select>
		</div>
	    <div class="newsMain" style="padding-top:0;margin-top:0.3rem;background:#ffffff;">
	       
		     <div class="type">
		         <p>选择搜索分类：</p>
		     </div>

		     <div class="nav tab">
		          <a href="javascript:;" class="item" name="type" id="" v-for="(item,index) in arr" :class="{cur:index==num}" @click="tab(index)">
		               <dl>
		                    <dt><span id="searchType">{{item.title}}</span></dt>
		                </dl>
		           </a>
		           <!-- <a href="javascript:;" class="item" name="type" id="activity">
		                <dl>
		                    <dt><span>活动</span></dt>
		                </dl>
		            </a>
		            <a href="javascript:;" class="item" name="type" id="news">
		                <dl>
		                    <dt><span>新闻</span></dt>
		                </dl>
		            </a> -->
		           <!-- <a href="javascript:;" class="item" name="type" id="article">
		                <dl>
		                    <dt><span>学习</span></dt>
		                </dl>
		            </a> --> 
		      </div>
	    </div>
	    <div class="newsMain sonType" style="display:none;background:#ffffff;" v-show="isShow">
		    	<div class="type">
	                 <p>选择子分类：</p>
	            </div>
                
                <div class="nav tab sonTab act">
                     <a href="javascript:;" class="item" name="subClass" id="" v-for="(item,idx) in sonArr" :class="{cur:idx==num0}" @click="tab0(idx)">
	                     <dl>
	                          <dt style="line-height:1.3rem;" id="sonType">{{item.title}}</dt>
	                     </dl>
                     </a>
                     <!-- <a href="javascript:;" class="item" name="subClass" id="2,3">
                               <dl>
                                    <dt><span>最新</span></dt>
                               </dl>
                            </a>
                            <a href="javascript:;" class="item" name="subClass" id="1">
                               <dl>
                                    <dt><span>预告</span></dt>
                                </dl>
                            </a>
                            <a href="javascript:;" class="item" name="subClass" id="4">
                                <dl>
                                    <dt><span>历史</span></dt>
                                </dl>
                            </a> -->
                  </div>
                  <div class="nav tab status1" style="display:none;" v-show="isNo">

	                 <a href="javascript:;" class="item" name="subClass" v-for="(item,indx) in subClass" :class="{cur:indx==num1}" @click="tab1(indx)">
	                       <dl>
	                           <dt style="line-height:1.3rem;" id="newsType">{{item.title}}</dt>
	                        </dl>
	                  </a>
	                  <!--<a href="javascript:;" class="item" name="subClass">
	                              <dl>
	                                 <dt>可报名</dt>
	                              </dl>
	                         </a>
	                         <a href="javascript:;" class="item" name="subClass">
	                              <dl>
	                                  <dt>公告中</dt>
	                              </dl>
	                         </a>
	                         <a href="javascript:;" class="item" name="subClass">
	                              <dl>
	                                  <dt>活动中</dt>
	                              </dl>
	                         </a> -->
                   </div>
	        
		    </div>
		    <!-- 选择活动分类 -->
		    <div class="newsMain street" style="margin-top:0.3rem;display:block;background:#ffffff;" id="newsMainStreet">
		       
			       <div class="type">
			           <p>选择活动分类：</p>
			       </div>

	        <div class="nav tab1" id="streetList">
	        	
	              <a href="javascript:;" class="item1" name="type" id="activity" v-for="(item,index) in className" :class="{cur:index==num2}" v-else-if @click="tab2(index)">
		               <dl>
		                  <dt><span id="actType">{{item.typeName}}</span></dt>
		               </dl>
	              </a>
	            <!-- <a href="javascript:;" class="item1" name="type" id="news">
		                <dl>
		                    <dt><span>新虹街道</span></dt>
		                </dl>
	                </a>
		            <a href="javascript:;" class="item1" name="type" id="study">
		                <dl>
		                    <dt><span>梅龙镇</span></dt>
		                </dl>
		            </a>
		            <a href="javascript:;" class="item1" name="type" id="study">
		                <dl>
		                    <dt><span>浦江镇</span></dt>
		                </dl>
		            </a> -->
	        	
	        </div>
	    </div>
	    <div class="newsMain pubTime" style="padding-top:0;background:#ffffff;">
	       
	        <div class="type">
	            <p>发布时间区间：</p>
	        </div>

	        <div class="nav1 tabTime">
	            <a href="javascript:;" class="item1" name="ct1" id="timeType" v-for="(item,index) in dataTime" :class="{cur:index==num3}" @click="tab3(index)">
	                <dl>
	                    <dt>{{item.title}}</dt>
	                </dl>
	            </a>
	           <!--  <a href="javascript:;" class="item1" name="ct2" id="-30">
	                <dl>
	                    <dt>近1月</dt>
	                </dl>
	            </a>
	            <a href="javascript:;" class="item1" name="ct3" id="-180">
	                <dl>
	                    <dt>近半年</dt>
	                </dl>
	            </a>
	            <a href="javascript:;" class="item1" name="ct4" id="-365">
	                <dl>
	                    <dt>近1年</dt>
	                </dl>
	            </a> -->
	        </div>
	    </div>
		<input type="hidden" id="centerId" value="">
		<input type="hidden" id="activityStatus" value="">
	    <div class="newsMain startSearch" style="background:#fff;">   
	        <div class="type">
	            <span>搜索内容：</span><input type="text" id="searchContent" value="" placeholder="可以为空">
	        </div>
	        <div class="start">
                <!-- <router-link :to="{path: 'search/searchResult',query: {val:searchList.id}}" tag="button">开始搜索</router-link> -->
	            <button  @click="startSearch()" >开始搜索</button>
	        </div>
	    </div>
	</div>
	</div>
</template>

<style type="text/css">
   @import '../assets/css/search.css'
</style>

<script type="text/javascript">

	export default {
	    data() {
	      return{ 
	        myVal:0,   //默认选中第一项   
	        searchList:[],
	        className:[],
	        showcom:true,
	        isNo:false,
	        isNum1:false,
	        all:{
	        	typeName:"全部"
	        },
	        arr:[
	        	{title:'全部'},
	        	{title:'活动'},
	        	{title:'新闻'}
	        ] ,
	        sonArr:[
	        	{title:'全部'},
	        	{title:'最新'},
	        	{title:'预告'},
	        	{title:'历史'}
	        ],
	        sonArr:[
	        	{title:'全部'},
	        	{title:'最新'},
	        	{title:'预告'},
	        	{title:'历史'}
	        ],
	        subClass:[
	        	{title:'全部'},
	        	{title:'可报名'},
	        	{title:'公告中'},
	        	{title:'活动中'}
	         ],
	         dataTime:[
	         	{title:'近7天'},
	        	{title:'近1月'},
	        	{title:'近半年'},
	        	{title:'近1年'}
	         ],
	        num:0,
	        num0:0,
	        num1:0,
	        num2:0,
	        num3:0,
	        isShow:false      
	      }
	    },
	    components: { // 声明子组件
	    },
	    mounted:function () {

				//alert(123);
	    		/*var self = this;
	    		
	    		let val=$('#centerList').val()
	    		alert(val);
	    		var arrId=[];
	    		if(val==''){
	    			console.log(this.searchList);
	    			for(var i=0;i<this.searchList.length;i++){
	    					var id=this.searchList[i].id;
	    					console.log(id);
	    				arrId.push(id);	
	    			}
		
	    			console.log(arrId);
	    		}else{
	    			console.log(val);
	    		}*/
          
	    	 //选择邻里中心
	      axios.get('http://www.shllzx.com/llzx/centerController/getCenterSearch', {params: {appMobile:''}}).then(res=>{
	        //console.log(res);
	        this.searchList=res.data;

		     // console.log(this.searchList);
            //console.log(res.data);

	      }).catch(error=>console.log(error));

	      	 //选择活动分类
	      axios.get('http://www.shllzx.com/llzx/SearchController/queryActivityTypeListByPd', {params: {appMobile:''}}).then(res=>{
             //console.log(res);
	         this.className=res.data;
		     // console.log(this.newsList);
		    // console.log(res.data);
		     //this.className.push(this.all)//向数组末尾添加
		     this.className.unshift(this.all)//向数组头部添加


		     
		    // console.log(this.className)

	        }).catch(error=>console.log(error));
	       },

          created(){

                 //如果没有这句代码，select中初始化会是空白的，默认选中就无法实现
				//alert(123);
	    		//var self = this;
	    		//let val=this.myVal;
	    		//let val=$('#centerList').val()
	    		//alert(val);
	    		//var arrId=[];
	    		//if(val==''){
	    			//console.log(this.searchList);
	    			//for(var i=0;i<this.searchList.length;i++){
	    					//var id=this.searchList[i].id;
	    					//console.log(id);
	    				//arrId.push(id);	
	    			//}
		
	    			//console.log(arrId);
	    		//}else{
	    			//console.log(val);
	    		//}
	    		                  
               },
	    methods: {
	    	tab(index){//选择搜索分类
	    		//alert(index)
	    		this.num=index
                     //let searchType=$('#searchType').text()//搜索分类
		    		// alert(searchType);
		    		// console.log(searchType);
	    		if(this.num==0){
	    			this.isShow=false

	    		}else if(this.num==1){
	    			this.isShow=true		
	    		}else if(this.num==2){
	    			this.isShow=false
	    		}		    		
	    	},
	    	tab0(idx){//选择子分类
	    		//alert(idx)
	    		this.num0=idx
	    		if(this.num0==0){
	    			this.isNo=false
	    		}else if(this.num0==1){
	    			this.isNo=true		
	    		}else if(this.num0==2){
	    			this.isNo=false
	    		}else if(this.num0==3){
	    			this.isNo=false
	    		}	   
	    	},
	    	tab1(indx){//选择子分类报名状态
	    		// alert(indx)
	    		 this.num1=indx	   	
	    	},
	    	tab2(index){//选择活动分类
	    		this.num2=index	  
	    	},
	    	tab3(index){//发布时间区间
	    		this.num3=index	    		
	          },
	    	startSearch(){//开始搜索
	    		//选择搜索分类 	
	    		console.log(this.num);
	    		//选择子分类	   
	    		console.log(this.num0)
	    		//选择子分类报名状态	    	
	    		console.log(this.num1)
	    		//选择活动分类	    		
	    		console.log(this.num2);
	    		//发布时间区间	    	
	    		console.log(this.num3);
	    		//alert('668899');
	    		var self = this;
	    		//let val=this.myVal;
	    		let val=$('#centerList').val();
	    		 //alert(val);
	    		var arrId=[];


	    		if(this.num==0){


	    		    }else if(this.num==1){
	    		    	if(this.num2==0){

	    		    	}



	    		    }else if(this.num==2){

	    		}





	    		if(val==''){
	    			//console.log(this.searchList);
	    			for(var i=0;i<this.searchList.length;i++){
	    					var id=this.searchList[i].id;
	    				    console.log(id);
	    				    arrId.push(id);	
	    			}
		
	    			console.log(arrId);//如果是空的时候查的是全部
	    		
	    		}else{
	    			console.log(val);//否则就是选中的那个
	    		}
	    		    	
	    		let searchType=this.num//搜索分类

		    		//alert(searchType);
		    	   console.log(searchType);

	    		//let sonType=$('#sonType').val()//选择子分类
	    		let sonType=this.num0;

	    			console.log(sonType);

	    			//alert(sonType)
	    		//let actType=$('#actType').val()//选择活动分类
	    		let actType=this.num1//选择活动分类

	    			console.log(actType);

	    			//alert(actType)
	    		//let newsType=$('#newsType').val()//选择最新活动可报名
	    		let newsType=this.num2//选择最新活动可报名

	    			console.log(newsType);
	    		   //alert(newsType)
		    		//let timeType=$('#timeType').val()//选择时间区间
		    		//alert(timeType)     

		    	let timeType=this.num3//选择时间区间           
                     console.log(timeType); 
		               // let dd=$('.nav1').children().attr('id')

		               // let dd=$('a').eq(this.num3).val()
	                  //alert(dd)

		    		 self.$router.push({  
							 path: '/search/searchResult',   
				             name: '/search/searchResult',  
				             query: {
				              			searchType:searchType,
				              			sonType:sonType,
				              			actType:actType,
				              			newsType:newsType,
				              			timeType:timeType

				              		  }                             
				                    });  

	    		  
						   	  $.ajax({
					             	 url:'http://www.shgdinfo.com/jcweChat/%20/SearchController/search',
					                 type: "get",
					                 data: {
					                 	"appMobile":'',
					                 	"type":'news',
					                 	'':'',
					                 	'centerId':'val',
					                 	'activityType':'',

					                 },
					                  dataType: 'json',
					                  success: function(data) {
					                 	//alert(data);
					                 	console.log(data);
					                	 
					                 }
					             }).then(function (res) {
					                console.log(res);
					　　　　　　　　　　//把从json获取的数据赋值给数组
					                self.model = res;
					               // alert(self.model)

					                if(res.code == "1"){
					                        // alert(res.msg);
					                        //  let id=res.memberId;
					                        // alert(id)
					                        // console.log(id)

					                     // self.$router.push({  
					                     //        path: 'register',   
					                     //        name: 'register',  
					                     //        query: {   
					                     //            memberId:id                                 
					                     //        }                             
					                     //    })  
					                                             
					                     }

					            }).fail(function () {
					                console.log('失败');
					            })

	    	}		
	    },
	      
      }
</script>

<style type="text/css" scoped>
	#foot{display:block;}
</style>