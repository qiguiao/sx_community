var fs = require('fs');
var url = '../server/data_table/apply.json'
module.exports=function(req,res){
    
    var list = JSON.parse(fs.readFileSync(url,'utf-8'));

        list.list.push(req.body);

        fs.writeFileSync(url,JSON.stringify(list)); 

     res.end(JSON.stringify('success'));

}   