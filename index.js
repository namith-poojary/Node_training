console.log("hello");

const pr=new Promise((resolve,reject) =>{
    resolve("Hello");
});

pr.then(msg=>
    console.log(msg)
);