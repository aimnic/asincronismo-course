const fnAsync = ()=>{
    return new Promise ((resolve,reject)=>{
        (true)
        ? setTimeout(()=>resolve('Async!!'),2000)
        : reject(new Error('Error'))
    });
}
const anotherFunction = async () => {
    console.log('hello 1');
    const something = await fnAsync();
    console.log(something);
    setTimeout(()=>{
        console.log('hello 2');
    },1000)
}

console.log('before');
anotherFunction()
console.log('after');