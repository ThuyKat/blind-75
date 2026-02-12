/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    //do we need to get the whole triangle ? like using recursive 
    //to get rowIndex, we need the previous row at rowIndex-1
    
    let ans = new Array(rowIndex+1)
    ans[0]=ans[rowIndex]=1
    for(i=1,up=rowIndex;i<rowIndex;i++,up--)
        ans[i] = ans[i-1]*up/i //deduce from function: C(n,k) = C(n,k-1) * (n-(k-1))/k
        //as k increase by 1, up = n-k+1 decrease by 1, because k starts from 1, up start from n
        //factorial definition: C(n,k) = nx(n-1)...(n-k)/k! = n!/k! *(n-k-1)!
        // C(n,k-1) = n!/(k-1)!*(n-k)! 
    return ans
};
