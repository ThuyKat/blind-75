/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {

        let left = 1
        let right = n
        let middle = left+ Math.floor((right-left)/2) //middle or right half
        while(left<middle){
            
            if (isBadVersion(middle)){
                right = middle
            }else{
                left = middle
            }
            middle = left+ Math.floor((right-left)/2)
        }
        if(isBadVersion(left)){
            return left
        }else{
            return left+1
        }
    };
};
//bad version and all after it is bad
//n version --> isBadVersion(i) --> true is bad, false is not
//given API to check if version is bad. 
//this is like searching for a specific position to satisfy the condition, this one is searching for min index that satisfy the condition. if middle is bad, whole right is bad, first bad be on left so middle==right, middle is not bad, left =middle. keep going until left is not and right is bad, 
