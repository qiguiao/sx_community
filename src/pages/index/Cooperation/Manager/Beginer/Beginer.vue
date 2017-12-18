<template>
    <div>
        <h3>
            <input type="text" :value="item.text_val">
            <span @click="text_compile(item)">编辑</span>
            <span @click="add_column">添加栏目</span>
            <b>预览</b>
            <cite v-if='item.hasDelete' @click="delete_column(index)">删除 </cite>
        </h3>
        <div class="up_load_img">
            <el-upload name="test" class="avatar-uploader" action="http://localhost:3000/user/upload" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <p>图片格式:jpg\png 图片大小:小于200k 建议尺寸:宽度大于800px</p>
        </div>
        
    </div>
</template>
<script>
export default {
    props:['index','item'],
    data(){
        return {
            imageUrl: '',
            text:'ss'
        }
    },
  methods: {
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
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
        add_column(){
            //this.arr.push({hasDelete:true})
            this.$store.commit('update_user_img',{hasDelete:true,text_val:'请输入栏目名称'})
        
        },
        delete_column(idx){
           // this.arr.splice(idx,1)
           this.$store.state.up_img.splice(idx,1)
        },
        text_compile (item) {
          item.text_val=''
        }
    }
}
</script>
<style scoped>
.up_load_img{
    padding-left: 20px;
}
div h3 input{
    width: 120px;
    height: 23px;
    font-size: 16px;
    border:none;
    font-weight: bold;
     /* border:1px solid #000;  */
    padding-left: 5px;
}
div h3 {
  padding-left: 20px;
  padding-bottom: 20px;
}

div h3 span {
    color: #01b0b9;
    margin-left: 10px;
    margin-right: 10px;
}

div h3 cite {
    font-style: normal;
    color: red;
    margin-left: 10px;
}
.upload-label {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: #fff;
    border: 1px solid #ccc;
}

.upload-input {
    display: none;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}

.avatar-uploader .el-upload {
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border: 1px solid #ccc;
    margin-top: 10px;
}

.el-row p {
    font-size: 12px;
    color: #ccc;
    margin-top: 10px;
}

.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}

.avatar-uploader-icon {
    font-size: 36px;
    color: #8c939d;
    width: 975px;
    height: 119px;
    line-height: 119px;
    text-align: center;
    font-weight: bold;
    border:1px solid #ccc;
}

.save {
    margin-top: 20px;
    text-align: center;
}
</style>

