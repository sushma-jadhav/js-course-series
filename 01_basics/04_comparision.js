console.log(2 > 2)
console.log(2 < 2)
console.log(2 >= 2)
console.log(2 <= 2)
console.log(2 != 2)
console.log(2 == 2)

/* avoid null and undefined comparisions */

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0) // JS implements convertion by default so null is o

console.log(undefined > 0)
console.log(undefined < 0)
console.log(undefined == 0)

/* Strict equal === checks for VALUE AND DATATYPE it doesn't persform conversions */
console.log("2" === 2) // will be false