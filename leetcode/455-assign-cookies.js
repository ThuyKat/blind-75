/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b) => a-b)
    s.sort((a,b) => a-b)
    let i=0,j=0
    while(i<g.length && j<s.length){
        if(g[i] <= s[j]){
            i++
        }
        j++
    }
    return i
    // g = g.sort((a,b)=> a-b)
    // s = s.sort((a,b)=> a-b)
    // console.log(g,s)
    // let result = 0
    // for(let i=0;i<g.length;i++){
    //     let j =0
    //     while(j<s.length){
    //         if(s[j]>=g[i]){
    //             result++
    //             break
    //         }
    //         j++
    //     }
    //     if(j<s.length-1){
    //         s = s.slice(j+1)
    //         console.log(s)
    //     }else{
    //         return result
    //     }
    // }
    // return result
};
let g =
[10,9,8,7,10,9,8,7]
let s = [5,6,7,8]
console.log(findContentChildren(g,s))
