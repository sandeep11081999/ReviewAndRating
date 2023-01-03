//  const data=[
//     {name:"aayush",email:"aayush@gmail.com"},
//     {name:"ajay",email:"ajay@gmail.com"}
//  ]



//  function getData(){
//     setTimeout(() => {
//        data.forEach((data,index)=>{
//         console.log('Data :',data);
//        }) 
//     }, 1000);
//  }

//  function createData(newData){
//     setTimeout(() => {
//         data.push(newData)
//         getData()
//     }, 1000);
//  }
//  createData({name:"ankit",email:"ankit@gmail.com"},getData())
 function register(callback){
    setTimeout(()=>{
        console.log("Register User Call");
        callback()
    },2000)
 }

 function sendEmail(callback){
    setTimeout(()=>{
        console.log("Send Email Call");
        callback()
    },1000)
 }
function loginUser(callback){
    setTimeout(()=>{
        console.log("login User Call");
        callback()
    },1000)
}
function getUser(callback){
    setTimeout(() => {
        console.log("get User Data Call");
        callback()
    },2000);
}
function DisplayUserData(callback){
    setTimeout(() => {
        console.log("Display User Data Call");
    }, 1000);
}

register(function(){
    sendEmail(function(){
        loginUser(function(){
            getUser(function(){
                DisplayUserData()
            })
        })
    })
})

console.log("End OF Program");