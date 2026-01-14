/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let my_result_arr = haystack.split(needle)
    if(my_result_arr[0].length == haystack.length){
        return -1
    }else{
        return my_result_arr[0].length
    }
};