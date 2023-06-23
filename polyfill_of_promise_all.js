const dummyAPI = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time)
        }, time)
    })
}

const tasksArray = [dummyAPI(1000), dummyAPI(2000), dummyAPI(3000)];

const promisePolyFill = (tasksArray) => {
    return new Promise((resolve, reject) => {
        let resultArray = [];
        tasksArray.forEach((task, index) => {
            task.then((result) => {
                resultArray[index] = result;
                if (index === tasksArray.length - 1) {
                    resolve(resultArray);
                }
            }).catch((err) => {
                reject(err)
            })
        })
    })
}

promisePolyFill(tasksArray).then((data) => {
    console.log(`the output is ${data}`)
}).catch(err => {
    console.log(`the error is ${err}`)
})