/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    //to reverse a string, just need to replace i with n-i element
    let dummy = 0
    for(let i=0;i<s.length/2;i++){
        if(s[i]!= s[s.length-1-i]){
            dummy=s[i]
            s[i]=s[s.length-1-i]
            s[s.length-1-i]=dummy
        }
    }
    return s
};