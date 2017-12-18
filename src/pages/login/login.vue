<template>
      <div class="login" v-loading="$store.state.loading">
      <ul>
          <h3>用户登录</h3>
          <li>
             <p><label>账户名:</label><input type="text" v-model.trim="user_name" placeholder="请输入用户名"></p>
          </li>
          <li>
              <p><label>密&nbsp;&nbsp;&nbsp;码:</label><input type="password" v-model.trim="user_password" placeholder="请输入密码"></p>
          </li>
          <li>
             <p><button @click="go_to">登陆</button></p>
              <p><button @click="go_to_res">注册</button></p>
          </li>
          
      </ul>
  </div>
</template>
<script>
import {setCookie} from '../../utils/utils.js'
export default {
    data () {
        return{
            user_name:'',
            user_password:'',
             loading2: false
        }
    },
    methods :{
        go_to () {
            var query= this.$route.query.from || 'admin';
            this.$store.commit('switch_loading',true)
            this.$http.post('/admin/loginUser',{
                user_password:this.user_password,
                user_name:this.user_name
            }).then(({data})=>{
                setTimeout(()=>{
                   if(data.code=='1'){
                    setCookie('token',data.token)
                    this.$store.commit('update_user_name',this.user_name)
                    // this.$router.push({name:'admin'})
                    this.$router.push({name:query});
                   }else{
                         this.$alert(data.msg, '登陆信息有误', {
                            confirmButtonText: '确定',
                            callback: action => {
                                this.user_name='',
                                this.user_password=''
                            }
                        });
                       this.$store.commit('switch_loading',false)
                   }

                },2000)
                
            })
        },
        go_to_res () {
            this.$router.push({name:'register'})
        }
    },
    mounted () {
        
        console.log(document.cookie)
    }
}
</script>

<style scoped>

.login{
    width: 100%;
    height: 100%;
    position:relative;
    background-image: url(../../../static/images/bg.jpg)
}
.login ul{
    width: 500px;
    height:330px; 
    background:rgba(0,0,0,.5);
    position: fixed;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    border-radius: 10px;
    padding-top: 30px;
    color:#fff;
}
.login ul h3{
    text-align: center;
    padding-bottom: 20px;
}
.login ul li{
    height: 45px;
    line-height: 45px;
    text-align: center;
    margin-bottom: 35px;
    padding-left: 35px;
    padding-right: 35px;
}
.login ul li p{
    border:1px solid #3872f6;
    border-radius: 5px;
    display: flex;
}
.login ul li input{
    flex:1;
    border:none;
    height: 44px;
    margin-left: 10px;
    padding-left: 10px;
    background: none;
    color:#fff;
}
.login ul li label{
    margin-left: 15px;
}
.login ul li:nth-child(4) p{
    margin: 25px 0;
    border:none;
}
.login ul li button{
    border:none;
    width: 100%;
    height: 100%;
    padding:10px 25px;
    background: #3872f6;
    color:#fff;
    border-radius: 5px;
    cursor: pointer;
}
</style>
