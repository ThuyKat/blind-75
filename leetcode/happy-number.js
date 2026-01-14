/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    /*
    - n =1 will return true
    - square n to the point it has 2 digit, extract its digit by collecting residual of n//10, square each and sum up. until n=0, r= n%10, n=(n-r)%10, sum +=r^2
    - only when it added up to power of 10 then it will be happy number  
    - the question stated that there will be either happy number or loop, so the main point here is to detect a loop.
    - Method 1: use a set to record all previous number, if the new number is already in the set, then it is a loop
    - Method 2: use floyd's cycle detection algorithm, use slow and fast pointer to detect loop
    - Additional note: max digit sum of number >1000 is 9^2*4=324, so any number >1000 will eventually fall below 1000 after several iterations. From 1000 to 9999, there are 8999 numbers but only 324 possible digit sums, so there must be loops in these numbers. 
    */
    const getNext = (num) => {
        let totalSum =0
        while(num>0){
            let digit = num %10
            totalSum += digit*digit
            num = Math.floor(num/10)
        }
        return totalSum
    }

    let slow = n
    let fast = getNext(n)

    while(fast !=1 && slow != fast){ // if fast reaches 1, then it is happy number, if slow meets fast, then it is a loop
        slow = getNext(slow)
        fast = getNext(getNext(fast))
    }

    return fast ==1

    /*
    - Time complexity: O(log n) since each iteration the number of digits decrease roughly by half
    - Space complexity: O(1) since we only use constant space for slow and fast pointer
    
    */
    
};