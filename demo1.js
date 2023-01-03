// // let letter=['a','b','c','d','e']

// // for(let key of letter){
// //     console.log(key)
// // }



// function demo(){
//   var x =5
//   if(x){
//     var y=6
//   }
//   console.log(y)
 // console.log(x)
// }
// demo()
// console.log(y)
// console.log(x)


// const car =["bmw","neno","baleno","eco"]
// for(let key in car){
//     console.log(car[key])
// }

// const arr={name:'ankit',sub:"english",age:"24"}
// for(let value in arr){
//     console.log(`${value}:${arr[value]}`)
// }
// create chank 20 bytes
// var buffer=Buffer.alloc(20);
// var buffer2=Buffer.from('hello')
// console.log(buffer2);
// console.log(buffer);
// buffer.write("hello eveyone")
// console.log(buffer);
// var http=require('http')
// var fs=require('fs')

// http.createServer(function(req,res){
//     // var content=''
    // var reader=fs.createReadStream('demo2.txt')
    // reader.setEncoding('utf-8')
    // reader.on('error',function(err){
    //     console.log(err);
    // }).on('data',function(chunk){
    //     content+=chunk
    // }).on('end',function(){
    //     res.on('err',function(err){
    //         console.log(err);
    //     })
    //     res.setHeader('200',{'Content-Type':'plain/text'})
    //     res.write(content)
    //     res.end()
    // })
// var content=' hello node.jnnnnnnnnnns writenStream'
// var write = fs.createWriteStream('demo3.txt')
// write.write(content,'utf-8')
// write.end()
// write.on('finish',function(){
//     console.log("data write successfully");
// }).on('error',function(err){
//     console.log(err);
// })
// }).listen(9000,()=>{
//     console.log("server is running : 9000");
