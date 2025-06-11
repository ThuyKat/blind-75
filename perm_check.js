/*
A non-empty array A consisting of N integers is given.

A permutation is a sequence containing each element from 1 to N once, and only once.

For example, array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
is a permutation, but array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
is not a permutation, because value 2 is missing.

The goal is to check whether array A is a permutation.

Write a function:

function solution(A);

that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

For example, given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
the function should return 1.

Given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
the function should return 0.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [1..1,000,000,000].
*/
function solution(A) {
    //A has N length and must contain numbers from 1 to N
    // sum of el must equal sum of 1 to N but it can be duplicate el
    // a+b = c+d but ab = cd? too complicated
    //i can have arr where I add value from A, if el existed or > N, return 0 immediately, if not I continue adding. 
    //add the end check the length of that arr to see if it has N length.

    let result_arr = new Array(A.length)
    for(let i = 0;i<A.length;i++){
        result_arr[i] = 0
    }
    for(let i =0; i<A.length;i++){
        if(A[i] > A.length || result_arr[A[i]-1] !== 0){
            return 0
        }else{
            result_arr[A[i]-1] = 1
        }
    }
    let sum = result_arr.reduce((sum,curr)=>sum+curr,0)
    if(sum == A.length){
        return 1
    }else{
        return 0
    }
}