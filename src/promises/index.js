const promise = new Promise((resolve,reject)=>{
    resolve('doned!!');
});

const bees = 9;
const countBees = new Promise((resolve,reject)=>{
    if(bees >= 10){
        resolve(`We have ${bees} bees on the panel`);
    }
    else{
        reject('there is no bees on the panel');
    }
});

countBees.then(result =>{
    console.log(result);
}).catch(error =>{
    console.log(error);
}).finally(()=>{
    console.log('finally');
})

