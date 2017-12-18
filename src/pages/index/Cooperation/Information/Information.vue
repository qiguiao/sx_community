<template>
    <div class="info-nav">
        <el-row>
            <h4 class="basic-info">基本信息</h4>
        </el-row>
        <el-row>
            <el-col :span="20" class="info-right">
                <el-form :label-position="labelPosition" label-width="" :model="formLabelAlign">
                    <el-form-item label="责任人">
                        <el-input v-model="formLabelAlign.name" placeholder="张鑫 1151265488"></el-input>
                    </el-form-item>
                    <el-form-item label="温馨提示">
                        <el-input v-model="formLabelAlign.region" placeholder="文本框内容"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="20">
                <uploader v-for="(item,idx) in $store.state.up_img" :key="idx" :index="idx" :item="item"></uploader>    
            </el-col>
        </el-row>
        

        <div class="save">
            <el-row>
                <el-col :span="20">
                    <el-button type="primary" @click="save_up">保存并发布</el-button>
                </el-col>
            </el-row>
        </div>
        <el-row>
            <el-dialog
                title="提示"
                :visible.sync="centerDialogVisible"
                width="30%"
                center>
                <h3>发布成功</h3>
                <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible = false">知道了</el-button>
  </span>
</el-dialog>
        </el-row>
    </div>
</template>

<script>
import uploader from '../../../../component/upload.vue'
export default {
    data() {
        return {
            arr:[{hasDelete:false}],
            labelPosition: 'right',
            centerDialogVisible: false,
            formLabelAlign: {
                name: '',
                region: '',
                type: ''
            }
        }
    },
    components:{
        uploader:uploader
    },
    methods:{
        save_up () {
            this.centerDialogVisible=true
            this.formLabelAlign.name=''
        }
    }
}
</script>

<style>
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

.info-nav {
    margin-top: 30px;
    padding-left: 15px;
    background: #fff;
    margin-left: 15px;
    border: 1px solid #ccc;
}

.basic-info {
    text-align: left;
    padding-top: 30px;
    font-size: 18px;
}

.el-form-item {
    margin-bottom: 0px;
}

h3 {
    margin-top: 30px;
}

h3 span {
    color: #01b0b9;
    margin-left: 10px;
    margin-right: 10px;
}

h3 cite {
    font-style: normal;
    color: red;
    margin-left: 10px;
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
}

.save {
    margin-top: 20px;
    text-align: center;
}
</style>
