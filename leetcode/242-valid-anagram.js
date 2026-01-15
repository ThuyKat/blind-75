/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // anagram has the same letters but different order, if we sort them in alphabetical order with ASCII we can see if its anagram
    //another approach is we can convert to ASCII then just compare the number sequence, or calculate sum then subtract each order value of the second string: if sum =0 at last then its anagram
    //Unicode: it cannot be converted into ASCII, so its better to use hashmap? 
    if(s.length !== t.length) return false
    const charCount = {}
    for(let i=0;i<s.length;i++){
        charCount[s[i]] = (charCount[s[i]] || 0) + 1
        charCount[t[i]] = (charCount[t[i]] || 0) - 1
    }
    for(const key in charCount){
        if(charCount[key] !== 0) return false
    }
    return true
};