/*
    Instructions:
        1. Write your code below the "WRITE YOUR LOGIC HERE" comment
        2. Take input from terminal (seperated by spaces) to receive the list 
           e.g.
           1 0 1 1 0
        3. Return the maximum number of consecutive ones in the list after replacing at max one 0 with 1
*/

var findMaxConsecutiveOnes = function (nums) {
    //WRITE YOUR LOGIC HERE
   
};

/*DO NOT CHANGE ANYTHING BELOW THIS LINE*/
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("", function (s) {
    var nums = s.split(" ").map(Number);
    console.log(findMaxConsecutiveOnes(nums));
    rl.close();
});
