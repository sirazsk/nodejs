/*var mymod=require('./ls_module');

mymod(process.argv[2],process.argv[3],function (err,data) {
    if(err){
        console.log(err);
    }else {
        for(i=0;i<data.length;i++){
            console.log(data[i]);
        }
    }
});
*/
/*var htp=require('http');
const BufferList = require('bl');
var bl1 = new BufferList();
var bl2 = new BufferList();
var bl3 = new BufferList();
var x1=false,x2=false,x3=false;

htp.get(process.argv[2],function (responce) {
    responce.on('data',function (data) {
        bl1.append(data);
    });
    responce.on('error',function (err) {
        bl1.append(err);
    });
    responce.on('end',function () {
        x1=true;
        call();
    })
});

htp.get(process.argv[3],function (responce) {
    responce.on('data',function (data) {
        bl2.append(data);
    });
    responce.on('error',function (err) {
        bl2.append(err);
    });
    responce.on('end',function () {
        x2=true;
        call();
    })
});

htp.get(process.argv[4],function (responce) {
    responce.on('data',function (data) {
        bl3.append(data);
    });
    responce.on('error',function (err) {
        bl3.append(err);
    });
    responce.on('end',function () {
        x3=true;
        call();
    })
});
function call() {
    if(x1&&x2&&x3){
        console.log(bl1.toString());
        console.log(bl2.toString());
        console.log(bl3.toString());
    }
}*/
/*var net=require('net');
var data;
var date=new Date();
var hr=date.getHours(),mn=date.getMinutes().valueOf(),dt=date.getDate(),mnth=date.getMonth();
mnth=Number(mnth.toString())+1;

var server= net.createServer(function (socket) {

    if(hr%10===hr)
        hr="0"+hr;
    if(mn%10===mn)
        mn="0"+mn;
    if(dt%10===dt)
        dt="0"+dt;
    if(mnth%10===mnth)
        mnth="0"+mnth;
    data=date.getFullYear()+'-'+mnth+'-'+dt+' '+hr+':'+mn+'\n';
    socket.end(data);
});
server.listen(process.argv[2]);*/
/*var http=require('http');
var fs=require('fs');

var readable = fs.createReadStream(process.argv[3]);

var server = http.createServer(function (requst,responce) {
    readable.pipe(responce);
});
server.listen(process.argv[2]);*/
