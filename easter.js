// import readline-sync module, don't touch!
let y = 1947
let a = y % 19 
let b = y / 100 
let c = y % 100 
let d = y / 4 
let e = y % 4 
let f = b + 8 / 25 
let g = b - f + 1 / 3
let h = 19 * a + b - d - g + 15 % 30 
let i = c / 4 
let k = c % 4
let r = 32 + 2 * e + 2 * i - h - k % 7 
let m = a + 11 * h + 22 * r / 451 
let n = h + r - 7 * m + 114 / 31 
let p = h + r - 7 * m + 114 % 31 
console.log ()