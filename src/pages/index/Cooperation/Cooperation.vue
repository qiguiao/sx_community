<template>
  <div>
     <el-row>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="break-menu">
        <el-breadcrumb-item>...</el-breadcrumb-item>
        <el-breadcrumb-item>社区生日会</el-breadcrumb-item>
        </el-breadcrumb>
    </el-row>
    <div class="tab-btn">
       <el-button type="primary" @click="info">信息管理</el-button>
       <el-button @click="manager">活动管理</el-button> 
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods:{
    info () {
       this.$router.push({name:'Information'})
    },
    manager () {
      this.$router.push({name:'Manager'})
    }
  },
  created () {
    this.$store.commit('switch_loading',true)
    this.$http.get('/admin/menu/public').then((res)=>{
      this.$store.commit('switch_loading',false)
        this.$store.commit('update_menu',res.data.data)
    })
  }
}
</script>

<style>
.break-menu{
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
}
.tab-btn{
    text-align: center;
    margin-top: 20px;
}
</style>
