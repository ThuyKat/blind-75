/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    //extract each digit and sum it up
    //repeat the process till sum <10
        if(num<10){
            return num
        }
        while(num>=10){
            let sum=0
            while(num>0){
                sum +=num%10
                num= (num-num%10)/10
            }
            num=sum
            // num=num.toString().split("").reduce((sum,curr) => sum+Number(curr),0)
        }
    return num
};

//OTHER SOLUTION:
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
let sumDigit = 0
    while(num>=10){
        sumDigit = 1+(num-1)%9
        num = sumDigit
    }
    return num
};