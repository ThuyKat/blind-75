var fizzBuzz = function(n) {
    let answer =new Array()
    for(let i =1;i<n+1;i++){
        console.log(i)
        console.log(answer)
        if (i % 15==0){
            answer[i]="FizzBuzz"
        }else if(i%3==0 && i%5 !=0){
            answer[i]="Fizz"
        }else if(i%5==0 && i%3 !=0){
            answer[i]="Buzz"
        }else{
            answer[i]=i.toString()
        }
    }
    return answer.slice(1)
};
console.log(fizzBuzz(15))