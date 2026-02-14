/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
     //each cost $5, bill notes $5,10,or 20. give change
    //true if enough change
    //iterate, if need to give change (10 or 20 or !5), find previous bills if sum up to the difference
    //order is not important, sort notes into a map.. 
    //issue here is how to get the total sum quickest way. 10 needs 5, 20 needs either 10 and 5, or 3x5
    //if number of 5 notes is <3 then see number of 10 notes if <1
   let five = 0, ten = 0;
   for (let bill of bills) {
       if (bill === 5) {
           five++;
       } else if (bill === 10) {
           if (five === 0) return false;
           five--;
           ten++;
       } else {
           if (ten > 0 && five > 0) {
               ten--;
               five--;
           } else if (five >= 3) {
               five -= 3;
           } else {
               return false;
           }
       }
   }
   return true;
}
let bills = [5,5,5,10,20]
console.log(lemonadeChange(bills))
