// the string is not necs to be symmetrical. E.g: "()[]{}" is balanced, but "([)]" is not
str = "([]){}";
//odd len
if (str.length % 2 === 1) {
return false;
}
//even len
let collections = ["[]", "()", "{}"];
let i = 0;
while (str.length > 0 && i < Math.floor(str.length / 2)) {
console.log(str,str.length, i)
let leftBracket = str[i];
let rightBracket = str[i + 1];
let thePair = leftBracket + rightBracket;
console.log("checking pair", thePair);
if (collections.includes(thePair)) {
    console.log("found pair", thePair);
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

