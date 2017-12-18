<template>
  <div class="atype">
    <div class="atype-title">
      <p>……>社区生日会>活动预约申请</p>
    </div>
    <div class="banner">
      <div class="block">
        <h4>活动列表</h4>
        <el-carousel height="150px">
        <el-carousel-item v-for="(item,idx) in pro_list" :key="idx">
        <div class="box-one"  v-for="(item,idx) in pro_list" :key="idx">
          <div class="cont-title">
            <h5>
            “寿星齐相聚 温暖夕阳红”
          </h5>
          <h5>{{item.name}}</h5>
          <p>活动时间：{{item.startDate.split('T')[0]}}</p>
          </div>
          
        </div>
        <!-- <div class="box-two">
          <div class="cont-title">
            <h5>
            “寿星齐相聚 温暖夕阳红”
          </h5>
          <h5>社区第四期生日派对</h5>
          <p>活动时间：2017-04-02</p>
          </div>
        </div>
        <div class="box-three">
          <div class="cont-title">
            <h5>
            “寿星齐相聚 温暖夕阳红”
          </h5>
          <h5>社区第四期生日派对</h5>
          <p>活动时间：2017-04-02</p>
          </div>
        </div>
        <div class="box-four">
          <div class="cont-title">
            <h5>
            “寿星齐相聚 温暖夕阳红”
          </h5>
          <h5>社区第四期生日派对</h5>
          <p>活动时间：2017-04-02</p>
          </div>
        </div> -->
        </el-carousel-item>
        </el-carousel>
      </div> 
    </div>
    <div class="atype-tab">
      <el-button @click="apply">活动信息预报名</el-button>
      <el-button @click="administer">人员管理</el-button>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import bannCss from '../../../../static/css/banner.css'
export default {
  data () {
    return{
      pro_list:[]
    }
  },
created () {
    this.$store.commit('switch_loading',true)
    this.$http.get('/admin/menu/entry').then((res)=>{
      this.$store.commit('switch_loading',false)
        this.$store.commit('update_menu',res.data.data)
    })
  },
  methods:{
    apply () {
      this.$router.push({name:'Apply'})
    },
    administer () {
      this.$router.push({name:'Administer'})
    }
  },
  created () {
    this.$http.get('/admin/event/banner').then((res)=>{
      this.pro_list = res.data.list
      console.log(this.pro_list[2].startDate)
    })
  }
}
</script>

<style scoped>
.atype{
  padding-left: 15px;
  padding-right: 15px;
}
.atype-title{
  margin-top: 15px;
  font-size:14px;
  color:#01b0b9;
  text-align:left;
  padding-top: 15px;
  padding-bottom: 5px;
}
.el-carousel__item h3 {
  color: #01b0b9;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #01b0b9;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #01b0b9;
}
.banner{
  margin-top: 30px;
}

.atype-tab{
  text-align: center;
  margin-top: 30px;
}
.atype-tab button{
  margin:0 15px;
}
button{
    background: #01b0b9;
    color:#fff;
    width: 15%;
}
</style>
