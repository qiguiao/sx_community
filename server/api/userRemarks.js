var fs = require('fs');
module.exports=function(req,res){
     var list =  JSON.parse(fs.readFileSync('../server/data_table/inmate_info.json','utf-8')); 
     var idx = req.body.id;
     var cont = req.body.cont;
     list.forEach((v, i) => {
            if (v.id === idx) {
               v.info=cont
            }
    });
   fs.writeFileSync('../server/data_table/inmate_info.json',JSON.stringify(list))
     res.end(JSON.stringify('success'))
}