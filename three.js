/*
    Instructions:
        1. Write your code below the "WRITE YOUR LOGIC HERE" comment
        2. Take arr (seperated by space), m and k as input from terminal
           e.g.
           arr: 1 2 4 4 4 4
           m: 1
           k: 3
        3. Return true if a pattern of length m is repeated k or more times, else return false
*/

var containsPattern = function(arr, m, k) {
    //WRITE YOUR LOGIC HERE
    let arr = [1, 2, 3, 1, 2, 3, 1, 2, 3];
    let m = 3;
    let k = 3;

    let num = arr.length;
    for (let i = 0; i < num - m * k + 1; i++) {
        let pattern = arr.slice(i, i + m);
        if (arr.slice(i, i + m * k).join('') === pattern.join('').repeat(k)) {
            console.log(true);
            break
        }
        console.log(false);

    }
};

/*DO NOT CHANGE ANYTHING BELOW THIS LINE*/
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("arr: ", function(s) {
    var arr = s.split(" ").map(Number);
    rl.question("m: ", function(s) {
        var m = Number(s);
        rl.question("k: ", function(s) {
            var k = Number(s);
            if (containsPattern(arr, m, k)) {
                console.log("true");
            } else {
                console.log("false");
            }
            rl.close();
        });
    });
});
