/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    //convert upper to lower case
    //remove all non-alphanumeric character
    //sorted, its the same string return true
    let s1 = s.toLowerCase().replace(/[^a-zA-Z0-9]/g,"")
    console.log(s1)
    for(let i=0;i<s1.length/2;i++){
        if(s1[i]!==s1[s1.length-1-i]){
            console.log(s[i],s1.length-1-i)
            return false
        }
    }
    
    return true
};

//test
let x = isPalindrome("A man, a plan, a canal: Panama")
console.log(x)