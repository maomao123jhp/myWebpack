import "babel-polyfill"
let func = ()=>{
    console.log('func is running~~~~~ ')    
}
const NUM = 45
let arr = [1,2,3]
arr.includes(8)

let arrB = arr.map(item=>item*2)
console.log(new Set(arrB))