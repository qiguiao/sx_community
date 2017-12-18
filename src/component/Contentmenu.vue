<template>
    <div>
        <el-select v-model="province" placeholder="请选择省份" @change="changePro">
            <el-option v-for="item in options" :key="item.name" :value="item.name">
            </el-option>
        </el-select>
        <el-select v-model="city" placeholder="请选择市" @change="changeCity">
            <el-option v-for="item in cityList" :key="item.name" :value="item.name">
            </el-option>
        </el-select>
        <el-select v-model="eaer" placeholder="请选择区" @change="changeEaer">
            <el-option v-for="item in areaList" :key="item" :value="item">
            </el-option>
        </el-select>
        <el-select v-model="door" placeholder="请选择门牌" @change="changeDoor">
            <el-option v-for="item in options" :key="item.value" :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>

<script>
export default {
    props:{
        options:{
            type:Array
        }
    },
    data () {
        return{
           province:'',
            city:'',
            eaer:'',
            door:'',
            cityList:[],
            areaList:[]
        }
    },
    methods:{
        changePro (val) {
          this.options.forEach((item,idx)=>{
              if(item.name == val){
                this.cityList = item.city
              }
          })
          this.city='';
          this.eaer='';
        },
        changeCity (val) {
            this.cityList.forEach((item,idx)=>{
              if(item.name == val){
                this.areaList = item.area
              }
          })
           this.eaer='';
        },
        changeEaer (val) {
            this.eaer = val;
            this.collectInfo();
        },
        changeDoor () {

        },
        collectInfo () {
            if(this.province && this.city && this.eaer){
                this.$emit('info',{
                    prov:this.province,
                    city:this.city,
                    eaer:this.eaer
                })
            }
        }
    }
}
</script>

<style scoped>
.basic-info{
    text-align: left;
    font-size: 18px;
}
.el-date-editor.el-input{
  width: 709px; 
}
.activity .el-tabs .el-tabs--card .el-tabs--top{
  border:2px solid #ccc;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 378px;
  height: 230px;
  line-height: 230px;
  text-align: center;
  border:1px solid #ccc;
}
.long-up-loader .avatar-uploader-icon{
  font-size: 28px;
  color: #8c939d;
  width: 1108px;
  height: 130px;
  line-height: 130px;
  text-align: center;
  border:1px solid #ccc;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.pic-uploader{
  margin-top: 20px;
}
.pic-uploader p{
  margin-top: 10px;
  font-size: 12px;
  color:#ccc;
}
.basic-right{
  padding-left: 20px;
  text-align: left;
}
.el-form-item__content .el-form-item__label{
    height: 30px;
    line-height: 30px;
}
.el-form-item{
  margin-bottom: 0px;
}
.inp-list{
  position: relative;
  top:-15px;
}
.el-select{
  width: 160px;
  margin:0 6px;
}
</style>
