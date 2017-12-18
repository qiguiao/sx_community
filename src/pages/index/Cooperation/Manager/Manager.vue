<template>
  <el-row>
    <div class="activity">
       <div class="activity-nav">
         <div class="nav-style">
           <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
            <el-tab-pane label="活动介绍" name="first">
            <Basicinfo></Basicinfo>
            </el-tab-pane>
            <el-tab-pane label="邀请居民" name="second">
              <Invitepeople></Invitepeople>
            </el-tab-pane>
            <el-tab-pane label="居民报名" name="third">
              <Residents></Residents>
            </el-tab-pane>
            <el-tab-pane label="活动总结" name="fourth">
              <Beginer v-for="(item,idx) in $store.state.up_img" :key="idx" :index="idx" :item="item"></Beginer>
            </el-tab-pane>
        </el-tabs>
         </div>
       </div>
    </div>
  </el-row>
</template>

<script>
import Basicinfo from './Basicinfo/Basicinfo.vue'
import Invitepeople from './Invitepeople/Invitepeople.vue'
import Residents from './Residents/Residents.vue'
import Beginer from './Beginer/Beginer.vue'
export default {
  components:{
      Basicinfo,
      Invitepeople,
      Residents,
      Beginer
  },
  data() {
    return {
      activeName2: 'first'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style scoped>
.nav-style > div.el-tabs__header{
  margin-bottom: 0px;
}
.activity{
  background: #fff;
  margin-left: 15px;
  margin-top: 30px;
}
.el-tabs{
  border:1px solid #ccc;
}
.activity-main{
  padding-left: 15px;
}
/* .nav-style .el-tabs .el-tabs__header .el-tabs__nav-wrap .resize-triggers{
    background: #eee !important;
    border: 1px solid #000 !important;
} */
</style>
