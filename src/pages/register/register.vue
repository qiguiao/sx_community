<template>
  <div class="register">
      <ul>
           <h3>用户注册</h3>
          <li>
             <p> <label>账户名:</label><input type="text" v-model="user_name" placeholder="请输入用户名"></p>
          </li>
          <li>
             <p> <label>密&nbsp;&nbsp;&nbsp;码:</label><input type="password" v-model="user_password" placeholder="请输入密码"></p>
          </li>
          <li>
              <p><button @click="go_to_register">注册</button></p>
          </li>
          
      </ul>
  </div>
</template>

<script>
export default {
    data () {
        return{
            user_name:'',
            user_password:''
        }
    },
    methods :{
        go_to_register () {
            this.$http.post('/admin/registerUser',{
                user_password:this.user_password,
                user_name:this.user_name
            }).then((res)=>{
                console.log(res)
                this.$alert('注册成功', '网站后台管理系通提示您', {
                            confirmButtonText: '确定',
                            callback: action => {
                                this.$router.push({name:'login'})
                        }
                });
            })
        }
    }
}
</script>

<style scoped>
.register{
    width: 100%;
    height: 100%;
    position:relative;
    background-image: url(../../../static/images/bg.jpg)
}
.register ul h3{
    text-align: center;
    padding-bottom: 20px;
}

.register ul{
    width: 500px;
    height:300px; 
    background:rgba(0,0,0,.5);
    position: fixed;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    border-radius: 10px;
    color:#fff;
     padding-top: 30px;
}
.register ul li p{
    border:1px solid #3872f6;
    border-radius: 5px;
    display: flex;
}
.register ul li label{
    margin-left: 15px;
}
.register ul li{
    height: 45px;
    line-height: 45px;
    text-align: center;
    margin-bottom: 35px;
    padding-left: 35px;
    padding-right: 35px;
}

.register ul li input{
     flex:1;
    border:none;
     height: 44px;
    margin-left: 10px;
    padding-left: 10px;
    background: none;
    color:#fff;
}
.register ul li:nth-child(4) p{
    border:none;
}
.register ul li button{
    border:none;
    width: 100%;
    height: 100%;
    border:none;
    padding:10px 25px;
    background: limegreen;
    color:#fff;
    border-radius: 5px;
    cursor: pointer;
}
</style>
