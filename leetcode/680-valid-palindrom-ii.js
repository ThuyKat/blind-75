// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var validPalindrome = function(s) {
//     //delete at most 1 char and it can be palindrome
//     //left and right pointer, left !right then check left with right-- or right with left++, if not possible return false, if possible then keep going till left=right, let count ==1
//    var fixedPalin = function(s,count=1){
//     let left = 0
//     let right = s.length-1
//     while(left<right){
//         if(s[left] !== s[right]){
//             if(count ==1){
//                 count--

//                 return fixedPalin(s.slice(left,right)) || fixedPalin(s.slice(left+1,right+1))
//             }else{
//                 return false
//             }
//         }else{
//             left++
//             right--
//         }
//     }
//     return true
//     }
//     return fixedPalin(s)
// };
// let s = "abc"
// console.log(validPalindrome(s))

//above algo looks clumsy
//better approach: validate palidrome first, then write a second function to validate palidrome with one char removed, if not valid then return false, else return true
var validPalindrome = function (s) {
  const isPal = (l, r) => {
    while (l < r) {
      if (s[l] !== s[r]) return false;
      l++;
      r--;
    }
    return true;
  };

  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      // skip left OR skip right
      return isPal(left + 1, right) || isPal(left, right - 1);
    }
    left++;
    right--;
  }
  return true;
};
