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
    //   if(s.length ==0){
    //     return true
    // }
    // if(s.length==1 && t.includes(s[0])){
    //     return true
    // }
    // let t_length = t.length
    // let index = t.indexOf(s[0])
    // t = t.slice(index+1)
    // s=s.slice(1)
    // if(t.length == t_length){
    //     return false
    // }
    // if(t.length<s.length){
    //     return false
    // }
    // if(!isSubsequence(s,t)){
    //     return false
    // }
    
    // return true
    //BETTER APPROACH:
    let pos = -1; // last matched position in t
  for (let c of s) {
    pos = t.indexOf(c, pos + 1); // find c after previous match
    if (pos === -1) return false; // not found later in t
  }
  return true; // every char of s found in order
};
let s = "abc", t = "ahbgdc"
console.log(isSubsequence(s,t))

