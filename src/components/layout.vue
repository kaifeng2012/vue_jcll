<template>
  <div>
    <div class="app-head">

    </div>
    <div class="app-content">
      <keep-alive>
        <router-view>

        </router-view>
      </keep-alive>
    </div>
    <div class="app-foot">
        <!-- <div style="background:red">在哪里</div> -->
      
      <!-- <tabs v-if="tabType"></tabs> -->
      <tabs v-show="$route.meta.showFooter"></tabs>

      <!-- <vuefooter v-show="$route.meta.showFooter"></vuefooter> -->
    </div>
  </div>
</template>
<script>
  import '../js/jquery-1.7.1.js'
  import Tabs from "./tab.vue"
 
  export default {
   components: {Tabs},
    data() {
          return{ 
            tabType:false
          }
      },
     /*watch:{
            $route(e){
              console.log(e)
                if(e.name=='index'){
                     this.tabType=false
                }else if(e.name=='search'){
                    this.tabType=true
                }else if(e.name=='search'){
                    this.tabType=true
                }else if(e.name=='search'){

                }
            }
        }*/
    
  }
</script>

