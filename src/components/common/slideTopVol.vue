<template>
<div class="vueBox">
  <div class="marquee">
    <div class="marquee_title">
      <img src="../../assets/image/activity/djtt.png" class="djtt hdimg" alt=""/>
    </div>
    <div class="marquee_box">
      <ul class="marquee_list" :class="{marquee_top:animate}">
        <li v-for="(item, index) in marqueeList">
          <span>{{item.content}}</span>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
  import Axios from 'axios'
  export default {
    data () {
      return {
        animate: false,
        marqueeList: [
         
        ]
      }
    },
    mounted: function () {
      // GET /someUrl
      //最新消息读取后台数据
      Axios.get('http://www.shllzx.com/llzx/indexController/getAdvertList?type=zyz').then(res=>{
        //console.log(res);
        this.marqueeList=res.data;
      //console.log(res.data);

    }).catch(error=>console.log(error));


    },
    created: function () {
      setInterval(this.showMarquee, 2000)
    },
    methods: {
      showMarquee: function () {
        this.animate = true;
        setTimeout(()=>{
          this.marqueeList.push(this.marqueeList[0]);

         // console.log(this.marqueeList.push(this.marqueeList[0]))
        this.marqueeList.shift();
        this.animate = false;
      },500)},
    }
  }
</script>

<style scoped="">
  .marquee_list {
  width: 323px;
  height: 30px;
  overflow: hidden;
  margin-bottom: 20px;
  margin-top: -26px;
  margin-left: 36px;
  color: #000000;
  font-size: 0.4rem;
  font-weight: bold;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.marquee_list li {
  height: 30px;
  text-indent: 15px;
  font-size: 0.4rem;
  line-height: 30px;
  list-style: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.marquee_list li a {
  color: #000000;
}
.marquee {
  height: 1rem;
  margin: 0 auto;
  background: #FFFFFF;
  position: relative;
  z-index: 10;
  line-height: 0.5rem;
}
.marquee .djtt {
  width: 0.58rem;
  height: 0.58rem;
  vertical-align: middle;
  margin-left: 0.3rem;
  margin-right: 0.2rem;
  margin-top: 0.2rem;
}
.marquee .djnotice {
  width: 0.830304rem;
  height: 0.489286rem;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  margin-top: 0.2007125rem;
  vertical-align: top;
}
.marquee .txt {
  font-size: 0.3rem;
  width: 6rem;
  text-decoration: none;
 
  top: 0.33rem;
  height: 1rem;
  overflow: hidden;
}
.marquee .txt #holder li {
  overflow: hidden;
  height: 0.5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.marquee .txt #holder li a {
  color: #4F4F4F;
  text-decoration: none;
}
.marquee #demo {
  overflow: hidden;
  height: 0.4rem;
  line-height: 0.4rem;
  margin-left: 0.3rem;
  display: inline-block;
  font-size: 0.4rem;
}

</style>

