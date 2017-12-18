function getCookie(target) {
    var value;
    document.cookie.split('; ').forEach((item, index) => {
        let _key = item.split('=');
        if (_key[0] == target) {
            value = _key[1]
        }
    })
    return value;
}
function setCookie(a,b){
    // console.log(Object.prototype.toString.call(arr))
    // if(Object.prototype.toString.call(arr)=='[object Array]'){
    //     document.cookie = arr[0]+'='+arr[1]
    // }else{
    //   console.error('入参必须是数组')  
    // }
    if(!a || !b) return;
    document.cookie = a+'='+b
}
function delCookie(name){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
    document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}
export {getCookie,setCookie,delCookie}



//  function getCookie (name) {
   
//         var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
//         if(arr=document.cookie.match(reg))
//         return unescape(arr[2]);
//         else
//         return null;
    
// }