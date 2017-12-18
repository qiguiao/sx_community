<template>
  <el-row>
    <div class="activity">
       <div class="activity-nav">
         <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
            <el-tab-pane label="活动介绍" name="first">
              <h4 class="basic-info">基本信息</h4>
              <el-row class="pic-uploader">
                <el-col :span="8">
                  <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
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
                      <el-form-item label="活动时间">
                        <el-input v-model="formLabelAlign.region" placeholder="2017年11月21日"></el-input>
                      </el-form-item>
                       <el-form-item label="请选择小区"> <br/>
                        <el-select v-model="value5" multiple placeholder="请选择小区">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                      <el-select v-model="value5" multiple placeholder="请选择楼宇">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                      <el-select v-model="value5" multiple placeholder="请选择门栋">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                     <el-select v-model="value5" multiple placeholder="请选择房号">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                      </el-form-item>
                    </el-form>
                 </div>
                </el-col>
              </el-row>
              <el-row>
                 <div class="img-up-loader">
                    <h3>请输入栏目名称<span>编辑</span><span>添加栏目</span><b>预览</b> <cite>删除</cite> </h3>
                    <div class="up-loader">
                        <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </div>
                    <p>图片格式:jpg\png 图片大小:小于200k 建议尺寸:宽度大于800px</p>
                </div>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="邀请居民" name="second">邀请居民</el-tab-pane>
            <el-tab-pane label="居民报名" name="third">居民报名</el-tab-pane>
            <el-tab-pane label="活动总结" name="fourth">活动总结</el-tab-pane>
        </el-tabs>
       </div>
    </div>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      activeName2: 'first',
      imageUrl: '',
      labelPosition: 'right',
       formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
          options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value5: [],
        value11: []
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
    },
     beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
  }
};
</script>

<style scoped>
.activity{
  background: #fff;
  margin-left: 15px;
  padding-left: 20px;
}
.basic-info{
    text-align: left;
    padding-top: 30px;
    font-size: 18px;
 
}
.avatar-uploader{
  border:1px solid #ccc;
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
}
</style>
