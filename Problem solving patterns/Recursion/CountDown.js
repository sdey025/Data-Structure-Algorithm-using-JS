const countDown = (num) => {
    if(num < 1)
        return
    console.log(num)
    num--
    countDown(num)
}

let num = 5
countDown(num)