
// using var

for(var i=0; i<5; i++) {
    setTimeout( ()=> console.log("var i: ", i), 100 )       /// ?? 5 ? 0ms  // i ===5,5,
}




// using let
for(let j=0; j<5; j++) {
    setTimeout( ()=> console.log("let j: ", j), 100 )     // ?? 0, 1, 2
}

/*
iteration       var (shared i)          let (new j for every loop)
---------------------------------------------------------------------
1               i=0                     j=0            
2               i=1                     j=1
3               i=2                     j=2
4               i=3                     j=3
5               i=4                     j=4



*/

/*
Node - Runtime environment, command-line app [node -v]
NPM - Node Package Manager - (npmjs.com), command-line app [npm -v] [angular]
NPX - Node Package Executor - react ()
NVM -  


*/