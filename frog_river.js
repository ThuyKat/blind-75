/*
    The goal is to find the earliest time when the frog can jump to the other side of the river. The frog can cross only when leaves appear at every position across the river from 1 to X (that is, we want to find the earliest moment when all the positions from 1 to X are covered by leaves). You may assume that the speed of the current in the river is negligibly small, i.e. the leaves do not change their positions once they fall in the river.

For example, you are given integer X = 5 and array A such that:

  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4
In second 6, a leaf falls into position 5. This is the earliest time when leaves appear in every position across the river.

Write a function:

function solution(X, A);

that, given a non-empty array A consisting of N integers and integer X, returns the earliest time when the frog can jump to the other side of the river.

If the frog is never able to jump to the other side of the river, the function should return −1.

For example, given X = 5 and array A such that:

  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4
the function should return 6, as explained above.

Write an efficient algorithm for the following assumptions:

N and X are integers within the range [1..100,000];
each element of array A is an integer within the range [1..X].
*/

function solution(X, A) {
    //must find the index of A that we have full collection of 1 to X from value of A[i]
    //using MAP is expensive
    //X can be in form of index
    let arr_X = new Array(X)
    for(let i=0;i<X;i++){
        arr_X[i]=0
    }
    // iterate through A, X[A[i]] = X[A[i]] || 0 + 1
    // how can I check if X is filled? 
    //when all cell from index 0 to X-1 has value >0 --> use product? not efficient 
    //how to avoid recalculate it all the time? 
    let sum_value = 0
    for (let i=0; i< A.length;i++){
        if(arr_X[A[i]-1] ==0){
            arr_X[A[i]-1] = 1
            sum_value += 1; // increment the sum only when we fill a new position
        }
        // let sum_value = arr_X.reduce((sum,cur)=> multiply+cur,0) --> I can use sum instead all value is 1 or 0
        //instead of recalculating the sum, I can use a variable to keep track of the sum and conditionally add to it
        if(sum_value !== (X+1)*X/2){
            return i
        }
    }
}






