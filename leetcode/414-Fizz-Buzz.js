
    /**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let answer =new Array()
    for(let i =0;i<n+1;i++){
        if(i%3==0){
            answer[i]=answer[i]? answer[i]+"Fizz":"Fizz"
            console.log(i,answer[i])
        }
        if(i%5==0){
            answer[i]=answer[i]? answer[i]+"Buzz":"Buzz"
            console.log(i,answer[i])    
        }
        if(i%15!=0){
            answer[i]=answer[i]? answer[i]: i.toString()
            console.log(i,answer[i])
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
    return answer.slice(1)

};
console.log(fizzBuzz(3))