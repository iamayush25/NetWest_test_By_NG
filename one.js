/*
    Instructions:
        1. Write your code below the "WRITE YOUR LOGIC HERE" comment
        2. Take input from terminal 
           e.g. 
           s1: pale
           s2: ealp
        3. Return true if strings are almost equal else return false
*/

var areAlmostEqual = function(s1, s2) {
    //WRITE YOUR LOGIC HERE
    var s1 = "bank"
    var s2 = "kanb"
    if (s1.length === s2.length) {
        let count = 0;
        for (let i = 0; i < s1.length; i++) {
            if (s2.includes(s1[i])) {
                count++;
            }
        }
        if (count == s2.length) {
            console.log("true");
        }
        else {
            console.log("false");
        }
    }
    else {
        console.log("false");
    }
};

const { log } = require('console');
/*DO NOT CHANGE ANYTHING BELOW THIS LINE*/
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("s1: ", function(s1) {
    rl.question("s2: ", function(s2) {
        if (areAlmostEqual(s1, s2)) {
            console.log("true");
        } else {
            console.log("false");
        }
        rl.close();
    });
});