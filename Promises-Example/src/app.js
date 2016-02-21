import "babel-polyfill";

function timeout(duration = 0) {
    return new Promise((resolve, reject) => {
        console.log('------ 做一些同步的工作 ------');
        setTimeout(resolve, duration);
    })
}

//做一些同步的工作
var p = timeout(1000)
    .then(() => {
        //做一些同步的工作
        return timeout(2000);
    }).then(() => {
        console.log('------ 同步的工作做完了 ------');
        throw new Error("hmm");
    }).catch(err => {
        console.log('------ 有錯誤發生了 ------');
        //做一些同步的工作
        return Promise.all([timeout(100), timeout(200)]);
    })