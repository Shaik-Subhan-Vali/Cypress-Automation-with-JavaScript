let promise =new Promise((resolve , reject)=>
{
    let a =5
    if(a==5)
    {
        resolve('Promise is achieved')
    }
    else
    {
        reject('Promise is rejected')
    }

})

promise.then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
})

