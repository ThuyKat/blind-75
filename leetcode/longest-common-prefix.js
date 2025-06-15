/*
    Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty.
*/
var longestCommonPrefix = function(strs) {
    //find the shortest length in all strings
    // iterate through that
    // again iterate through strs to check if all are equal? 
    // not efficent!!
    //how to check multiple string at once? turn each into array?
    // compare first and second string? find the common string
    // check if it's substring of the remaining strings
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];
   let min_length = Math.min(strs[0].length,strs[1].length)
   let common_str = ""
   for(let i = 0;i<min_length;i++){
        if(strs[0][i]==strs[1][i]){
            common_str += strs[0][i]
        }else{
            break
        }
    }
    
    for(let i= 2;i<strs.length;i++){
        for(let j=0;j<common_str.length;j++){
            if(strs[i][j]!== common_str[j]){
                common_str= common_str.slice(0,j) //[x,y)
            }
            
        }
        if(common_str.length ==0){
            return ""
        }
    }
    return common_str
  
};
// Example usage:
console.log(longestCommonPrefix(["flower","flow","flight"])); // Output: "fl"
//comment: dont need to slice the string, control the index of common_str instead for easy ++ or --