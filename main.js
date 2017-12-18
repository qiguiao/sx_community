import  './static/css/reset.css'
import Vue from 'vue'
import ElementUI from 'element-ui'
import {store} from './src/store/store.js'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import axios from './src/http/axios'
import router from './src/router/config.js'
import App from './App.vue'

let vm = new Vue({
    el:'.box',
    router,
    store,
    data:{
        name:'assaa'
    },
    render:function(createElement){
        return createElement(App)
    }
})
if(module.hot){
    module.hot.accept()
}