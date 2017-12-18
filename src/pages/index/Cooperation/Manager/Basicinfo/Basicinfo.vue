<template>
       <div class="activity-main">
                <h4 class="basic-info">基本信息</h4>
              <el-row class="pic-uploader">
                <el-col :span="8">
                  <el-upload name="test" class="avatar-uploader" action="http://localhost:3000/user/upload" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                 </el-upload>
                  <p>图片格式:jpg\png 图片大小:小于200k 建议尺寸:宽度大于800px</p>
                </el-col>
                <el-col :span="15" class="basic-right">
                 <div class="inp-list">
                    <el-form :label-position="labelPosition" label-width="" :model="formLabelAlign">
                      <el-form-item label="活动名称">
                        <el-input v-model="formLabelAlign.name" placeholder="春暖花开四月生日会"></el-input>
                      </el-form-item>
                      <el-form-item label="活动时间"> <br>
              
                         <el-date-picker
                          v-model="startDate"
                          type="date"
                          placeholder="选择日期"
                          format="yyyy 年 MM 月 dd 日">
                        </el-date-picker>
                      </el-form-item>
                       <el-form-item label="请选择小区"> <br/>
                       
                        <selects :options="options" @info="getInfo"></selects>

                      </el-form-item>
                    </el-form>
                 </div>
                </el-col>
              </el-row>
               <el-row>
                 <el-col :span="23">
                   <div class="img-up-loader">
                   
                    <div class="up-loader">
                          <uploader v-for="(item,idx) in $store.state.up_img" :key="idx" :index="idx" :item="item"></uploader>  
                    </div>
                   
                </div>
                 </el-col>
              </el-row> 
              <div class="save">
                <el-row>
                  <el-col :span="20">
                      <el-button type="primary" @click="save_pulish">保存并发布</el-button> 
                  </el-col>
                </el-row>
              </div>
               
            </div> 
</template>

<script>
import uploader from '../../../../../component/upload.vue'
import selects from '../../../../../component/Contentmenu.vue'
export default {
  components:{
    uploader,
    selects
  },
  data() {
    return {
      imageUrl: '',
      labelPosition: 'right',
      startDate: '',
      addrInfo:null,
      prov:'',
      city:'',
      area:'',
      formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        options: []
    };
  },
  created () {
    this.$http.get('/admin/community/location/root').then((res)=>{
      this.options=res.data
    })
  },
  methods: {
    getInfo (data) {
       this.prov = data.prov
       this.city = data.city
       this.area = data.eaer
    },
    handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        this.$store.commit('upload_imgUrl',this.imageUrl)
    },
    beforeAvatarUpload(file) {
            //const isJPG = file.type === 'image/jpeg';
            const isPIC = (file.type === 'image/jpeg' || file.type === 'image/png')
            //const isPNG = file.type === 'image/png';
            const isLt2M = file.size / 1024 / 1024 < 2;
            console.log(isPIC)
            if (!isPIC) {
                this.$message.error('上传头像图片只能是 JPG或者PNG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isPIC && isLt2M ;
    },
      save_pulish () {
        if(!this.formLabelAlign.name){
            this.$message("请填写活动名称");
            return;
        }
        if(!this.imageUrl){
          this.$message("请至少上传一张图片");
          return;
        }
        this.$http.post('/admin/activity/add',{
          categoryId:"1",
          name:this.formLabelAlign.name,
          imagePath:this.$store.state.imgUrl,
          startDate:this.startDate,
          endDate:"结束时间",
          locationId:"地点id",
          locationName:this.prov+this.city+this.area
        }).then((res)=>{
          if(res){
              this.$message({
                message:'发布成功',
                onClose:function(){
                  console.log(123)
                }
              })
          }
        })

      }
  }
};
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
.img-up-loader h3{
    margin-top: 30px;
    text-align: left;
    padding-bottom: 10px;
}
.img-up-loader span{
    color:#01b0b9;
    margin-left: 10px;
    margin-right: 10px;
}
.img-up-loader cite{
    font-style: normal;
    color:red;
    margin-left: 10px;
}
.img-up-loader p{
text-align: left;
padding-top: 10px;
color:#ccc;
}
.save{
    margin-top: 20px;
    text-align: center;
}
.el-tabs{
  border:1px solid #ccc;
}

</style>
