<template>
  <div>
      <div class="events">
          <h4>活动信息</h4>
          <p>活动地点:社区居委会活动室</p>
          <p>温馨提示:请携带有效身份证前往,如身份证</p>
      </div>
      <div class="sign_up">
        <h4>居民报名</h4>
        <div class="flex-from">
            <el-form :label-position="labelPosition" label-width="" :model="formLabelAlign">
            <el-form-item label="姓名"> <br>
                <el-input v-model="formLabelAlign.name" placeholder="文本框内容"></el-input>
            </el-form-item>
            <el-form-item label="联系电话"> <br>
                <el-input v-model="formLabelAlign.tel" placeholder="文本框内容"></el-input>
            </el-form-item>
        </el-form>
        </div>
        <div class="remarks">
            <el-form :label-position="labelPosition" label-width="" :model="formLabelAlign">
            <el-form-item label="备注信息"> <br>
                <el-input v-model="formLabelAlign.region" placeholder="文本框内容"></el-input>
            </el-form-item>
        </el-form>
        </div>
        <div class="enroll">
            <el-button @click="apply">报名</el-button>
        </div>
        <el-row>
            <el-dialog
                title="提示"
                :visible.sync="centerDialogVisible"
                width="30%"
                center>
                <h3>报名成功</h3>
                <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible = false">知道了</el-button>
  </span>
</el-dialog>
        </el-row>
    </div>
    
  </div>
  
</template>

<script>
export default {
    data() {
      return {
        labelPosition: 'right',
        centerDialogVisible: false,
            formLabelAlign: {
                name: '',
                region: '',
                type: '',
                tel:''
        }
      }
    },
    methods:{
        apply () {
            if(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.formLabelAlign.tel)){
                    this.$http.post('/admin/apply',{
                    applyName:this.formLabelAlign.name,
                    applyTel:this.formLabelAlign.tel,
                    applyRegion:this.formLabelAlign.region
                    }).then((res)=>{
                            if(res.data == 'success'){
                                this.centerDialogVisible = true
                            }
                    })   
            }else{
                this.$message.error('请输入正确的手机号码');
            }
        
        }
    }
  }
</script>

<style scoped>
.events{
    background: #fff;
    height: 142px;
    padding-left: 20px;
    margin-top: 30px;
   
}
.events h4{
    padding-top: 30px;
   
    font-size: 18px;
}
h3{
    text-align: center;
}
.events p{
    margin-top: 13px;
    color:#212121;
}
.sign_up{
    height: 296px;
    background: #fff;
    margin-top: 30px;
    padding-left: 20px;
    padding-top: 30px;
    padding-right: 20px;
}
.sign_up h4{
    font-size: 18px;
}
.el-form-item{
    margin-bottom: 0px;
}
.flex-from{
    margin-top: 15px;
}
.flex-from .el-form{
    display: flex;
    
}
.flex-from .el-form-item{
    flex:1;
}
.flex-from .el-input{
    width: 75%;
}
.enroll{
    margin-top: 35px;
    text-align: center;
}
.enroll button{
    background: #01b0b9;
    color:#fff;
    width: 15%;
}
</style>
