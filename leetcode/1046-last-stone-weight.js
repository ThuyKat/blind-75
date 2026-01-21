/**
 * @param {number[]} stones
 * @return {number}
 */
let stones = [2,7,4,1,8,1]
var lastStoneWeight = function(stones) {
    // ith stone weight = stone(i)
    //select heaviest 2 stones
    //same weight, destroyed. larger weight survive with new weight = difference between 2 stones. 
    //re-select, smash it, everytime 2 biggest stone be replaced with their diffrences. 
    //n stone --> n-1 times smashing
    //sort them, get the first difference, pop current arr until we find smaller or equal to the difference, push all popped value into second array. 
    //if second array has length >=2 then take next 2 stones from there: nums2.at(-1)and nums2.at(-2)
    // if second array has length =1 then take 2 stones is nums2.at(-1)and nums1.at(-1)
    //in new round we have second difference, unshift arr2 until encounter the larger number, push all unshifted value to arr1. 
    stones.sort((a, b) => a - b);
    console.log(stones)
    let arr =[]
    while(stones.length>1){
        let diff 
        if(arr.length>=2){
            diff = arr.at(-1) - arr.at(-2)
            arr = arr.slice(0,arr.length-2)
        }else if(arr.length==1){
            diff = arr.at(-1) - stones.at(-1)
            arr.pop()
            stones.pop()
        }else{
            diff = stones.at(-1) - stones.at(-2)
            stones = stones.slice(0,stones.length-2)
        }
        while(stones.length && stones.at(-1)>diff){
            arr.unshift(stones.pop()) //pop until <=diff    
        }
        while(stones.length && arr[0]<diff && arr.length>0){
            stones.push(arr.shift()) //push until <= diff
        } 
        stones.push(diff) 
        console.log(stones,arr) 
    }
     // Now decide the last stone
    const all = stones.concat(arr).sort((a, b) => a - b);
    if (all.length === 0) return 0;
    if (all.length === 1) return all[0];
    // If somehow two remain, smash once more
    return all[all.length - 1] - all[all.length - 2];   
};
console.log(lastStoneWeight(stones))