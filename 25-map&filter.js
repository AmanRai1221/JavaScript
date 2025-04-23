const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums1 = myNumers.map ((num) => num + 10)
// console.log(newNums1);

// const newNums = myNumers.filter( (num) => {
//     return num > 4
// })

const newNums = []
myNumers.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
})

console.log(newNums);

const anotherNums = myNumers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)

console.log(anotherNums);