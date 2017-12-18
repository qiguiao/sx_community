<template>
    <div>
        <h3>
            <input type="text" :value="item.text_val">
            <span @click="text_compile(item)">编辑</span>
            <span @click="add_column">添加栏目</span>
            <b>预览</b>
            <cite v-if='item.hasDelete' @click="delete_column(index)">删除 </cite>
        </h3>
        <el-upload name="test" class="avatar-uploader" action="http://localhost:3000/user/upload" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <p>图片格式:jpg\png 图片大小:小于200k 建议尺寸:宽度大于800px</p>

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
div h3 input{
    width: 120px;
    height: 23px;
    font-size: 16px;
    border:none;
    font-weight: bold;
     /* border:1px solid #000;  */
    padding-left: 5px;
}
</style>

