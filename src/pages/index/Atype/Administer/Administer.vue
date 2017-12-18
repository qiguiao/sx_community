<template>
  <div class="Invitepeople">
    <el-row>
      <div class="roll">
        <h4>报名名单</h4>
      </div>
    </el-row>
    <el-row class="table-people-info">
      <el-table ref="multipleTable" :data="$store.state.residentList" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="name" label="居民姓名" >
        </el-table-column>
        <el-table-column prop="tel" label="联系电话" >
        </el-table-column>
        <el-table-column prop="send" label="短信通知" >
        </el-table-column>
        <el-table-column prop="info" label="备注信息" >
        </el-table-column>
        <el-table-column
         fixed="right"
      label="操作"
     >
      <template slot-scope="scope">
       <el-button
          size="small"
          type="text"
          @click="handleDelete(scope.row.id)">删除</el-button>
      </template>
    </el-table-column>
      </el-table>
    </el-row>
    <el-row>
      <div class="pagination">
        <el-pagination background layout="prev, pager, next" @current-change="update_index" :total="100">
        </el-pagination>
      </div>
    </el-row>
    <el-row>
      
        <el-dialog
        title="提示"
         :visible.sync="centerDialogVisible"
         width="30%"
        center>
        <p><input type="text" v-model="remarks_text"></p>
        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
      
    </el-row>
  </div>
</template>

<script>
import styleCss from '../../../../../static/css/style.css'
import {getCookie} from '../../../../utils/utils.js'
export default {
  data() {
    return {
      tableData3: [],
      multipleSelection: [],
      centerDialogVisible: false,
       page:0,
       pageSize:1,
       count:10,
       remarks_text:'请输入内容'
    }
  },
  created () {
      // this.$http.post('/user/userInfo',{
      //     pageSize:1,
      //     count:this.count
      // }).then((res)=>{
      //   console.log(res)
      //   var data = res.data.data
      //   this.tableData3=data

      // })
      this.$store.dispatch('update_resident_list',1)
},
  methods: {
    handleDelete(row) {
      console.log(row)
       this.$http.post('/admin/deleteResident',{id:row,token:getCookie('token')}).then((res)=>{
       //删除用户 时间超长重返登陆页面
        if(res.data.code === 1001){
                     this.$msgbox({
                        title: '消息',
                        message: res.data.message,
                        showCancelButton: true,
                        confirmButtonText: '重新登陆',
                        cancelButtonText: '取消',
                        beforeClose:(action, instance, done)=>{
                            console.log(action);                            
                            if(action === 'confirm') {
                                this.$router.push({
                                    name:'login',
                                    query:{
                                        from:this.$route.name
                                    }
                                });
                            }
                            done();                         
                        }
                     });
                    return;
                }
                if (res.data=="success") {
                  this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    center: true
                  }).then(() => {
                    this.$message({
                      type: 'success',
                      message: '删除成功!'
                    });
                    this.$store.dispatch('update_resident_list',1)
                    // this.$store.dispatch('update_resident_list',this.page); 
                     
                  }).catch(() => {
                    this.$message({
                      type: 'info',
                      message: '已取消删除'
                    });
                  });               
                }
       }) 
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    update_index (page) {
     
     this.$store.dispatch('update_resident_list',page)
     this.page = page
    }
  }
}
</script>

<style scoped>

.Invitepeople {
  background: #fff;
  margin-top: 30px;
}

.roll {
  padding-left: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
}

.roll h4 {
  font-size: 18px;
  padding-top: 20px;
}

.roll h4 span {
  color: #01b0b9;
  font-size: 14px;
  margin-left: 15px;
}

.roll h4 b {
  color: #ccc;
  font-size: 14px;
  margin-left: 15px;
}

.pagination {
  float: right;
  margin-top: 20px;
  margin-bottom: 20px;
}
.table-people-info{
  padding-left: 15px;
}

</style>
