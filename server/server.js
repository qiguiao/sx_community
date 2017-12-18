var fs = require('fs');
var jwt = require('jsonwebtoken');
var express = require('express');
var body_parser = require('body-parser');
var multer = require('multer');
var formidable = require('formidable');
var fieldname ='';

//图片
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
      console.log(file.fieldname)
      fieldname = file.fieldname
    cb(null, file.fieldname + '-' +file.originalname)
  }
})
 
var uploader = multer({ storage: storage })

var app = express();
app.use(body_parser.json())
//app.use(body_parser.urlencoded)
app.use(body_parser.raw())
app.all('*',function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Content-Type','application/json;charset=utf-8');
    next()
})
//登陆  /admin/loginUser
let login = '/admin/loginUser';
//注册 /admin/registerUser
let regist = '/admin/registerUser';
//公共页面菜单  name-[public|grid|enrty]
let publics = '/admin/menu/:name';
//文件上传
let upload = '/user/upload';

//请求地址信息
const addrApi = require('./api/location.js');
app.get('/admin/community/location/root',addrApi)

//添加活动
let addAct = '/admin/activity/add';
let addActCallback = require('./api/activity_add.js');
app.post(addAct,addActCallback)

app.post(upload,uploader.single('test'),function(req,res){
    
    res.end(JSON.stringify(1));
})
//活动信息 轮播图
let event = require('./api/event_ban.js');
app.get('/admin/event/banner',event)
//删除居民信息
let deleteResident = require('./api/deleteResident.js');
app.post('/admin/deleteResident',deleteResident)

//备注居民信息
let remarks = require('./api/userRemarks.js');
app.post('/admin/userRemarks',remarks)

//居民报名
let apply = require('./api/apply.js')
app.post('/admin/apply',apply)

//分页息列表
let userInfo = '/user/userInfo';

app.all(userInfo,function(req,res){
   
  var list =  fs.readFileSync('./data_table/inmate_info.json','utf-8'); 
  const data = {
        code: 0,
        message: 'ok',
        data: JSON.parse(list),
        total: list.length,
        count: 10,
        pageSize: 1,
        pageIndex: 1
    }
     const datas = Object.assign({}, data)
     const count = req.body.count;
     const pS = req.body.pageSize;
     const lists = data.data.slice((pS - 1) * count, (pS - 1) * count + 10)
     datas.data = lists
    res.end(JSON.stringify(datas))

    
  })


app.all(publics,function(req,res){
    var data=null;
    switch (req.params.name){
        case 'public' : data = fs.readFileSync('../mock/public.json','utf-8');
        break;
        case 'grid' : data = fs.readFileSync('../mock/grid.json','utf-8');
        break;
        case 'entry' : data = fs.readFileSync('../mock/entry.json','utf-8');
        break;
    }
  
  res.end(data);
})

app.post(login,function(req,res){
    // console.log(req.body);
    res.status(200);
    var admin_list = JSON.parse(fs.readFileSync('./data_table/admin_list.json','utf-8'));
    var token,response,flag=false;
    admin_list.list.forEach((item)=>{
        if(item.user_name==req.body.user_name){
            flag=true
            if(item.user_password==req.body.user_password){
                token = jwt.sign(req.body,'1508B',{expiresIn:60*30})
                response = {
                    "code": 1,
                    "token": token,
                    "msg": "SUCCESS"
                }
            }else{
                response = {
                    "code": 2,
                    "error":"error",
                    "msg": "密码错误"
                }
            }
        }
    })
    if(!flag){
        response = {
            "code": 3,
            "error":"error",
            "msg": "此用户不存在"
        }
    }
     
    res.end(JSON.stringify(response))
});
app.post(regist,function(req,res){
    

    res.writeHead(200,{'Content-Type':'application/json;charset=utf-8'});

    var admin_list = fs.readFileSync('./data_table/admin_list.json',{encoding:'utf-8'})
    
    admin_list = JSON.parse(admin_list);
    
    admin_list.list.push(req.body);
     
    fs.writeFileSync('./data_table/admin_list.json',JSON.stringify(admin_list))
    var obj = {
        "code": 1,
        "msg": "SUCCESS"
    }
    res.end(JSON.stringify(obj))
})
app.listen(3000,function(){
    console.log('listen is success')
})