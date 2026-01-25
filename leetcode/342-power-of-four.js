var isPowerOfFour = function(n) {
    //n=2^2x >>4 still has 2^x binary presentation 
   var isPowerOfFour = function(n) {
     if(n<=0){
        return false
    }
    if(n==1){
        return true
    }
    n = Math.sqrt(n)
    if(n %2!==0){
        return false
    }
    return !(n&n-1)
    
}
   
    
}
console.log(isPowerOfFour(5))