学习笔记

异步处理：
callback    callbac khell
promise     solves the problem
async/await write code in sync way 基于promise的封装

const sleep = (duration) => {
    return new Promise( (resolve,reject) => {
        setTimeout(resolve,duration)
    })
}
async function* counter(){
    let i = 0;
    while (true) {
        await sleep(1000);
        yield i++;
    }
}
(async function() {
    for await(let p of counter()) {
        console.log(p)
    }
})()

//1
//2
//3
//4
.....
arrow functions cannot be used as generators
arrow function cannot use yield
const will throw error when using directly in console.log