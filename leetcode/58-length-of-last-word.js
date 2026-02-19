    /**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    //string s, return last word of string
    let arr_s = s.trim().split(" ")
    return arr_s.pop().length
};