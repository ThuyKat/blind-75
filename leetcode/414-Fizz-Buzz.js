
    /**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let answer =new Array()
    for(let i =1;i<n+1;i++){
        if(i%3==0){
            answer.push("Fizz")
        }
        else if(i%5==0){
            answer.push("Buzz")
        }
        else if(i%15!=0 && i%3!=0 && i%5!=0){
            answer.push(i.toString())
        }
        else{
            answer.push("FizzBuzz")
        }
        // if (i% 15==0){
        //     answer[i]="FizzBuzz"
        // }else if(i%3==0 && i%5 !=0){
        //     answer[i]="Fizz"
        // }else if(i%5==0 && i%3 !=0){
        //     answer[i]="Buzz"
        // }else{
        //     answer[i]=i.toString()
        // }
    }
    return answer

};
console.log(fizzBuzz(3))