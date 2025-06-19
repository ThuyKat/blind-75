    /**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // go from the end of digits
    //the result is (digits[i]+1) % 10 if it's >10 then it's the large integer +10
    let i = digits.length -1
    while (i>=0){
        
        if(digits[i]+1>=10){
            digits[i] = (digits[i] +1)%10
            if(i==0){
                digits.unshift(1)
                return digits
            }
        }else{
            digits[i] ++
            return digits
        }
        
        i--
        
    }
    
};