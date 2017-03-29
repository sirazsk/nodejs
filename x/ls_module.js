var arr=[];
var error;
module.exports=function (dir,ext,callback) {
    var fs=require('fs');
    fs.readdir(dir,function (err,list) {
        if(err){
            return callback(err);
        }else {
            var l=-ext.split("").length;
            var str="."+ext.toString();
            for(i=0;i<list.length;i++){
                if(list[i].split(".").length-1){
                    if(list[i].slice(l-1)===str){
                        arr.push(list[i]);
                    }

                }
            }
            x(err,arr,callback);
        }
    });

};
function x(err,dat,callback) {
    if(err){
        return callback(err);
    }
    callback(null,dat)
}