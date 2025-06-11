/*
A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

For example, in array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the elements at indexes 0 and 2 have value 9,
the elements at indexes 1 and 3 have value 3,
the elements at indexes 4 and 6 have value 9,
the element at index 5 has value 7 and is unpaired.
Write a function:

function solution(A);

that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

For example, given array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the function should return 7, as explained in the example above.

Write an efficient algorithm for the following assumptions:

N is an odd integer within the range [1..1,000,000];
each element of array A is an integer within the range [1..1,000,000,000];
all but one of the values in A occur an even number of times.
*/

function solution(A) {
    //push into a map with key = value, value=frequency
    let my_obj = {}
    for (let i = 0; i<A.length;i++){
        my_obj[A[i]] = (my_obj[A[i]] || 0) + 1
    }
    for (let [key,value] of Object.entries(my_obj) ){
        if (value ==1){
            return Number(key)
        }
    }
}
// using objects is O(n) time complexity and O(n) space complexity.
//better solution is using Map
function solution(A) {
    //push into a map with key = value, value=frequency
    let my_map = new Map();
    for (let i = 0; i<A.length;i++){
        my_map.set(A[i],(my_map.get(A[i])||0)+1) 
    }
    for (let [key,value] of my_map){
        if (value ==1){
            return key
        }
    }
}