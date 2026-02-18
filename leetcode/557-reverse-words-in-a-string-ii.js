/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    //s reverse order in each word
    s= s.split(' ')
    for(let i=0;i<s.length;i++){
        let word = s[i].split('')
        let max = Math.floor(word.length/2)
        for(let j=0;j<max;j++){
            [word[j],word[word.length-1-j]] = [word[word.length-1-j],word[j]]
        }
        
        word=word.join('')
        s[i] = word
    }
    return s.join(' ')
};
let s = "Let's take LeetCode contest"
console.log(reverseWords(s))
