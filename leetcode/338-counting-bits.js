/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    //each number from 0 to n --> its bits representation
    //record number of 1s in each number --> push to array
    //just need to find number of 1s in even number then odd has +1 of that
    let result = [0,1]
    for(let num =2;num<n+1;num+=2){
        let count=0
        let temp = num
        while(temp>0){
            temp = temp>>1
            count+= temp&1
        }
        result.push(count)
        if (num + 1 <= n) result.push(count + 1);
    }
    return result.slice(0, n + 1);
};