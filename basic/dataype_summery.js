// 2 type of data type on js 
// 1. primitive data type
    // they are 7 type of primitive data type 
    // 1. string
    // 2.Number
    // 3.boolean
    // 4.null
    // 5.undefined
    // 6.Symbol
    // 7.Bigint

//2. non primitive data type
    // 1. array
    //2.object
    //3.function
    // 
    const heros = ["shaktiman", "naagraj", "doga"];
        let myObj = {
         name: "hitesh",
         age: 22,
        }

        const myFunction = function(){
            console.log("Hello world");
        }

        console.log(typeof anotherId);


    //https://262.ecma-international.org/5.1/#sec-11.4.3
         
    
        // Type of val	Result
        // Undefined	"undefined"
        // Null	"object"
        // Boolean	"boolean"
        // Number	"number"
        // String	"string"
        // Object (native and does not implement [[Call]])	"object"
        // Object (native or host and does implement [[Call]])	"function"
        // Object (host and does not implement [[Call]])	Implementation-defined except may not be "undefined", "boolean", "number", or "string".
    //         