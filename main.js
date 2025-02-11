function wait(n){
    return new Promise((resolve, reject) => {
       
        setTimeout(() =>{
            resolve("Hi there")
        },n)
    }
)
}

const ans = wait(10000).then(function(data){
    //console.log(data);
    
})

function sleep(milliseconds){
    return new Promise((resolve, reject) => {
        const start = Date.now()
        while(Date.now()-start < milliseconds){
            
            

        }
        resolve();
    })
}

//sleep(5000).then(() => console.log("Slept for 5 seconds"))
//console.log(Date.now());


function wait1(t){
return new Promise((resolve, reject) => {
    setTimeout(()=>{resolve()},t)
})
}
function wait2(t){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve('hi there')},t)
    })
}
function wait3(t){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve()},t)
    }) 
}
function calculateTime(t1,t2,t3){
    const start = Date.now()
    return Promise.all([t1,t2,t3]).then((data) => {
        console.log(data)
        console.log( Date.now() - start);
    })
}



//calculateTime(wait1(10000),wait2(3000),wait3(3000))

function wait(n){
    return new Promise((resolve) =>{
        
     setTimeout(() => {
        resolve('hi there')
     },n)
    })
}

wait(5000).then((data) => {
    console.log(data);
    
})