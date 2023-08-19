// conversion of operation
let score = 33  //  frontend request ra formula const {score} = req.body;
// if score = null // output of (typeof score) is 0
// or if score = undefined // output of (typeof score) is NaN
// or if score =boolean( true or false) // output of (typeof score) is 0 or 1
// or if score = string "" // output of (typeof score) is NaN

console.log(typeof score); 

console.log(typeof (score)); // value ko dekhna

let valueInNumber = Number(score);
console.log(typeof valueInNumber)

// '33' => 33
// 33asdf => conversion to NaN
// true => 1; false => 0

let isLoggedIn = -3;
let booleanisloggedIn = Boolean (isLoggedIn);

console.log(booleanisloggedIn)
// 1 => true ; 0 => false 
// "" => false 
// "Pintu" = > true

let sumNumber = 99;
let stringnumber = toString(sumNumber)
console.log(typeof stringnumber)