/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    //s into chunks, each has 2k chars, reverse k of them
    //chunk has less than k , reverse everything 
    s = s.split('');
    for(let i = 0; i < s.length; i += 2 * k) {
        let j=i
        let end=Math.min(i+k-1,s.length-1)
        while(j<end){
            [s[j],s[end]] = [s[end],s[j]]
            j++
            end--
        }
    }
    return s.join('');
}; 
let s ="abcdefg"
let k= 2
reverseStr(s,k) 
