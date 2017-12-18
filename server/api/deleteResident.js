var fs = require('fs');
const jwt = require('jsonwebtoken');
module.exports= function(req,res)  {
    jwt.verify(req.body.token, '1508B', (errs, decoded) => {
        // console.log(errs);
        if (errs) {
            errs.code = 1001;// 登录超时
            res.end(JSON.stringify(errs));
        } else {
            var list =  JSON.parse(fs.readFileSync('../server/data_table/inmate_info.json','utf-8')); 

            var idx = req.body.id
            // console.log(idx)
            //不做forEach 会出现删错情况
            list.forEach((v, i) => {
                if (v.id === idx) {
                    list.splice(i, 1);
                }
            });
            fs.writeFileSync('../server/data_table/inmate_info.json',JSON.stringify(list))
            res.end(JSON.stringify('success'))
        }
    });
    
  
}