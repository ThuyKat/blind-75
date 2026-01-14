/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    //if the character repeats in the string? the string is dividing in more than 2 parts, while if there is only 1, it divides into 2 only
    //not very efficient if we iterate through each of them and count appearance
    //we can use a set, but still lots of steps
    //we can use a hashmap to count the frequency of each character
    const charCount = {}
    for(let i=0;i<s.length;i++){
        charCount[s[i]] = (charCount[s[i]] || 0) + 1
    }
    //then we can iterate through the string again and find the first character with count 1
    for(let i=0;i<s.length;i++){
        if(charCount[s[i]] === 1){
            return i
        }
    }
    return -1
    //another approach is to use ASCII values to sort it in alphabetical order and check for the first unique character
};