/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    //lowercase a-z
    //remove adjacent duplicate until no longer can
    // return the string, only 1 answer
    let stack=[]
    for(let i =0;i<s.length;i++){
        if(stack.length !=0 && stack[stack.length-1] == s[i]){
            stack.pop()
            continue
        }
        console.log(i, stack)
        stack.push(s[i]) 
    }
    let result = stack.reduce((result,curr) => result+curr,"")
    return result
};
console.log(removeDuplicates("abbaca"))