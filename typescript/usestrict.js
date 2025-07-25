//"use strict"    // entire script is in strict mode

//x = 3.14;    // ReferenceError:x is not defind



function myFuc() {
    "use strict";
    y = 3.14;   // ReferenceError:y is not defind
}

/*
    1. Disallow undeclear variable
    2. Throw error for non-writtable properties
    3. Eliminating "this"
    4. prevent usinf duplicate paramter .... 
    5. use some reserve keywords.... and not allow them to use as identifires 
*/