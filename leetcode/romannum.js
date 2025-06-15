/*
    Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.


*/
var romanToInt = function(s) {
    //largest to smallest from left to right
    //when subtraction is needed, its from from right to left largest to smallest
    //6 instances of subtraction 
    //use mode to extract each digit
    //use map(roman,value) include the subtractions
    //iterate forward, if value of i <i+1 then convert s[i]+s[i+1] 
    //let result = 0, + value as iterating through the string
    let romans = ["I","V","X","L","C","D","M","IV","IX","XL","XC","CD","CM"]
    let values = [1,5,10,50,100,500,1000,4,9,40,90,400,900]
    let my_map = new Map()
    for (let i=0;i<romans.length;i++){
        my_map.set(romans[i],values[i])
    }
    let result = 0
    for(let i=0;i<s.length;i++){
        if(my_map.get(s[i])<my_map.get(s[i+1])){
            let current_roman = s[i]+s[i+1]
            console.log(current_roman)
            result += my_map.get(current_roman)
        }else{
            result += my_map.get(s[i])
        }
    }
    return result

};
console.log(romanToInt("MCMXCIV") )//1994

//comment: better to not include the substraction in the map, but to check for it as you iterate through the string