/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 */
var isPalindrome = function(x) {
    //turn into string
    //left = 0
    //right = length-1
    // if x negative, return false
    // if str[left] == str[right], left++, right--,else return false
    // stop when left ==right
    if(x<0){return false}
    let str = x.toString()
    let left = 0
    let right = str.length -1
    //if str.length is even --> left = Math.floor(str.length/2)-1
    // right = Math.floor(str.length/2)
    //if str.length is odd -> left = Math.floor(str.length/2) = right
    while(right >= Math.floor(str.length/2)){
        if(str[left]== str[right]){
            left++
            right--
        }else{
            return false
        }
    }
    if(str[left]!==str[right]){return false}

    return true
    
    
};