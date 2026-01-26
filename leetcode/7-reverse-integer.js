/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    //outside rnge
    let result = 0
    let digitNum = x>=0? x.toString().length: x.toString().length-1
    while(result<2**31 && result>=-(2**31) && digitNum>0){
        console.log("x",x,"digitNum",digitNum)
        let digit = x%10
        console.log("digit",digit)
        x=(x-digit)/10
        result+=digit*(10**(digitNum-1))
        console.log("result",result)
        digitNum--
    }
    console.log(result)
    if(!(result<2**31 && result>=-(2**31))){
        return 0
    }else{
        return result
    }
};
console.log(reverse(-123))