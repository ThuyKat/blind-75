/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
     //string s is a subsequent of t -> true/false
    //each character of string s is found in t and in same order as s
    //find the first char, and then find the second char from the first char position in t
    //we can use split, pick the last element. If after split, only 1 element left, return false
    //if it's subsequent of original, second half of s should be subsequent of second half of t.. keep going to the last char of s
    if(s.length==1 && t.includes(s[0])){
        return true
    }
    let t_length = t.length
    console.log(t_length)
    t = t.split(s[0]).at(-1)
    s = s.split(s[0]).at(-1)
    console.log(s,t)
    console.log(t.length)
    if(t.length == t.length){
        return false
    }
    if(t.length<s.length){
        return false
    }
    if(!isSubsequence(s,t)){
        return false
    }
    
    return true
};
let s = "abc", t = "ahbgdc"
console.log(isSubsequence(s,t))
