<template>
     <el-aside>
      <el-row class="tac">
        <el-col :span="24">
          <div class="artboard-left">
            <h4>三鑫智慧社区</h4>
            <p>一口式受理平台</p>
            <div class="user-pic">
                <img src="../../../static/images/img_user.png" alt="">
                <p>管理员 张鑫</p>
            </div>
          </div>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#29282e"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu :index="idx.toString()" v-for="(item,idx) in $store.state.menu" :key="idx">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.name}}</span>
              </template>
                  <el-submenu :index="idx+'-'+idx_sub" v-for="(item_sub,idx_sub) in item.submenus" :key="idx_sub">
                      <template slot="title">{{item_sub.name}}</template>
                      <el-menu-item :index="idx+'-'+idx_sub+'-'+idx_sub_sub" v-for="(item_sub_sub,idx_sub_sub) in item_sub.submenus" :key="idx_sub_sub">{{item_sub_sub.name}}</el-menu-item>
                  </el-submenu>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      menu:[]
    }
  },
  methods: {
    handleOpen(key, keyPath) {

    },
    handleClose(key, keyPath) {

    }
  },
   created () {
        // axios.get('./mock/entry.json').then((res)=>{
        //     this.menu = res.data.data
        // })
    }
}
</script>

<style scoped>
.artboard-left{
    background:#29282e;
    overflow: hidden;
}
.artboard-left h4{
    font-size:24px;
    color:#ffffff;
    text-align:left;
    margin-left: 67px;
    margin-top: 32px;
}
.artboard-left > p{
	font-size:18px;
	color:#ffffff;
	text-align:left;
	margin-left: 67px;
	margin-top: 13px;
}
.artboard-left .user-pic{
	margin-left: 100px;
	margin-top: 32px;
}
.artboard-left .user-pic img{
	background:#d8d8d8;
	border:5px solid #ffffff;
	width:71px;
	height:71px;
	border-radius:100%;
}
.artboard-left .user-pic p{
	font-size:14px;
	color:#ffffff;
	margin-top: 19px;
}
.el-menu-vertical-demo{
    padding-top: 15px;
}
</style>
