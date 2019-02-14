

<template>
  <div class="slide" v-on:mouseover="stop()" v-on:mouseout="move()">
    <div class="slideshow">
      <transition-group tag="ul" name="image">
        <li v-for="(img, index) in imgArray" v-show="index===mark" :key="index">
          <a href="#">
            <img :src="'http://www.shllzx.com/'+img.picture_url">
          </a>
        </li>
      </transition-group>
    </div>
    <div class="bullet">
      <span v-for="(item, index) in imgArray" :class="{ 'active':index===mark }"
            @click="change(index)" :key="index"></span>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
  export default {
    data () {
      return {
        timer: null, //定时器
        mark: 0, //比对图片索引的变量
        imgArray: [
          // 'https://www.shgdinfo.com/uploadFiles/2018-04-08/20180408160832391.jpg',
          // 'https://www.shgdinfo.com/uploadFiles/2018-04-24/20180424104953477.jpg',
          // 'https://www.shgdinfo.com/uploadFiles/2018-04-20/20180420163958319.jpg',
          // 'https://www.shgdinfo.com/uploadFiles/2018-04-13/20180413152031555.png'
        ]
     }
    },
     mounted: function () {
      // GET /someUrl
      //最新消息读取后台数据
      Axios.get('http://www.shllzx.com/llzx/indexController/getNoticeList?type=zyz').then(res=>{
        //console.log(res);
        this.imgArray=res.data;
      //console.log(res.data);

    }).catch(error=>console.log(error));


    },
    methods: {
      autoPlay () {
        this.mark++;
        if (this.mark ===2) {
          this.mark = 0
        }
      },
      play () {
        this.timer = setInterval(this.autoPlay, 2500)
      },
      change (i) {
        this.mark = i
      },
      stop () {
        clearInterval(this.timer)
      },
      move () {
        this.timer = setInterval(this.autoPlay, 2500)
      }
    },
    created () {
      this.play()
    }
  }
</script>
<style>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
 }
  .slide {
    width:100%;
    height:100%;
    margin: 0 auto;
    /*margin-top: 50px;*/
    overflow: hidden;
    position: relative;
  }
  .slideshow {
    width: 100vw;
    height: 56.25vw;
  }
  .slideshow li {
    position: absolute;
  }
  .slideshow img {
    width: 100vw;
    height: 56.25vw;
    display:inline-block;
  }
  .bullet {
    position: absolute;
    width: 100%;
    bottom:40px;
    margin: 0 auto;
    z-index: 10;
    text-align: center;
  }
  .bullet span {
    width:0.13rem;
    height:0.13rem;
    border-radius:50%;
    /*border: 1px solid;*/
    background: white;
    display: inline-block;
    margin-right: 10px;
  }
  .active {
    background: red !important;
  }
  /*.slideshow img{*/
  /*display:inline-block;*/
  /*position: absolute;*/
  /*top: 0;*/

  /*width: 10rem;*/
  /*height: 5.625rem;*/
  /*left:0;*/
  /*}*/
  .image-enter-active {
    transform: translateX(0);
    transition: all 1.5s ease;
  }
  .image-leave-active {
    transform: translateX(-100%);
    transition: all 1.5s ease;
  }
  .image-enter {
    transform: translateX(100%);
  }
  .image-leave {
    transform: translateX(0);
  }

</style>
