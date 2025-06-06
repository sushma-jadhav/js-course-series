let score = true
let score1 = ""
let score2 = null
let score3 = undefined

// console.log(typeof score)
// console.log(typeof (score))

let numConv = Number(score) 
let numConv1 = Number(score1)
let numConv2 = Number(score2) 
let numConv3 = Number(score3) 

console.table([typeof numConv, typeof numConv1, typeof numConv2, typeof numConv3])
console.table([numConv, numConv1, numConv2, numConv3])

// "33" => 33
// "33aa" => NaN (Type is number for NaN)
// "" => 0
// null => 0
// undefined => NaN
// true => 1 false => 0

/* ------------------------------------------------------- */

let isloggedIn = 1
let isloggedInEmpty = ""
let isloggedInStr = "aaa"

let Bool = Boolean(isloggedIn)
let Bool1 = Boolean(isloggedInEmpty)
let Bool2 = Boolean(isloggedInStr)
console.table([Bool, Bool1, Bool2]);

// 1 => true 0 => false
// "" => false
// "string" => true

/* -------------------------------------------------------*/

let strConv = 1
let strConv1 = null
let strConv2 = undefined

let str = String(strConv)
let str1 = String(strConv1)
let str2 = String(strConv2)

console.table([str, str1, str2, typeof str, typeof str1, typeof str2])