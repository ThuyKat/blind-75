// the string is not necs to be symmetrical. E.g: "()[]{}" is balanced, but "([)]" is not
// eliminate all odd string
// because string can contain space char, so better not converting it to array
// the idea is looking for the first pair, remove it, and repeat until no pair found
// since I change length of the string, I should not use iteration, but rather use while loop
//the loop ends when either length of the string is 0,or no pair found when i reaches the middle of the string
str = "([]){}";
//odd len
if (str.length % 2 === 1) {
return false;
}
//even len
let collections = ["[]", "()", "{}"];
let i = 0;
while (str.length > 0 && i < Math.floor(str.length / 2)) {
    let leftBracket = str[i];
    let rightBracket = str[i + 1];
    let thePair = leftBracket + rightBracket;
    if (collections.includes(thePair)) {
        str = str.slice(0, i) + str.slice(i + 2);
        if (i > 0) {
        i--;
        }
    } else {
        i++;
    }
}
if (str.length > 0) {
return false;
}
return true;

//NOTE ABOUT SOLUTION:
/*
This solution is O(n^2) because of the string slicing operation.
It can be improved to O(n) by using a stack data structure.
A stack can be used to push opening brackets and pop them when a matching closing bracket is found.
This would allow us to traverse the string once, making it more efficient.
*/