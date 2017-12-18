<template>
  <el-main class="main">
    <el-row class="top-menu">
        <el-col :span="12">
            <el-menu
            class="el-menu-demo"
            mode="horizontal"
            >
            <el-menu-item index="1"><router-link :to="{name:'entry'}">一口式受理平台</router-link></el-menu-item>
            <el-menu-item index="2"><router-link :to="{name:'grid'}">网格化管理平台</router-link></el-menu-item>
            <el-menu-item index="3"><router-link :to="{name:'public'}">公共服务平台</router-link></el-menu-item>
            </el-menu>
        </el-col>
         <el-col :span="12">
            <el-menu
            class="el-menu-demo fl-right"
            mode="horizontal">
            <el-menu-item index="1">
               
                    <i class="el-icon-bell"></i>               
                </el-menu-item>
            <el-menu-item index="2"><i class="el-icon-message"></i></el-menu-item>
            <el-submenu index="2">
            <template slot="title"> <img src="../../../static/images/img_user.png" alt="" class="img">  管理员 {{$store.state.user_name}}</template>
                <el-menu-item index="2-1" @click="loginout">退出</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            </el-menu>
        </el-col>
    </el-row>
    <el-row>
        <div>
            <router-view></router-view>
        </div>
    </el-row>
    
  </el-main>
</template>

<script>
import activitys from './activity/activitys.vue'
import {delCookie} from '../../utils/utils'
export default {
     components:{
        activitys
     },
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
         activeName2: 'first'
        }
    },
    methods: {
    loginout(){
        delCookie('token');
        this.$router.push({name:'login'})
    },
    //   atype() {
    //     this.$router.push({name:'menu'})
    // },
    // meshing() {
    //     this.$router.push({name:'Meshing'})
    // },
    // cooperation () {
    //     this.$router.push({name:'Cooperation'})
    // },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
       handleClick(tab, event) {
        console.log(tab, event);
      }
  }}
</script>

<style scoped>
 /* .router-link-active{
 
    background: #01b0b9;
} */

.el-menu-item a{
    width: 100%;
    height: 100%;
    display: inline-block;
} 
.main{
    overflow: hidden;
}
.fl-right{
    float: right;
}
.el-main{
    padding:0;
    background: #eee;
}
.top-menu{
    box-shadow: 0 3px 3px #ccc;
    background: #fff;
}
.break-menu{
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
}
.tab-btn{
    text-align: center;
    margin-top: 20px;
    /* display: flex;
    justify-content: space-around; */
}

.el-button--primary{
    background: #01b0b9;
}
.activity{
    background: #fff;
}

.info-nav .el-tabs--border-card>.el-tabs__header{
    background: #eee !important;
}

.el-upload-dragger{
    border:0px;
}

.el-upload{
    width: 100%;
} 
.el-upload .el-upload-dragger{
width: 845px !important;
}
.bg-img .avatar-uploader{
    background:url(../../../static/images/img_02.png)
}
.bg-img .avatar-uploader .el-icon-plus:before{
    content: "";
} 

.img-up-loader{
    margin-top: 15px;
}
.info-right{
    padding-left: 10px;
}
.el-form-item{
    margin-bottom: 0px;
}
.el-form-item .el-form-item__label{
    height: 30px;
    line-height: 30px;
}
.img-up-loader{
    text-align: left;
}

.up-loader{
    margin-top: 15px;
}
.img-up-loader p{
    margin-top: 10px;
}

.el-menu{
    border:none;
}
.el-menu li.is-active{
   background:#01b0b9;
    border-bottom: none;
    color:#fff;
}
.img{
    width: 35px;
    margin-right: 5px;
}
</style>
