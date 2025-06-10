# Complete JavaScript String Methods Reference

## **String Properties**
```javascript
const str = "Hello World";
console.log(str.length); // 11 - returns length of string
```

## **Character Access Methods**
```javascript
const str = "Hello";

// charAt(index) - returns character at specified index
console.log(str.charAt(0)); // "H"
console.log(str.charAt(10)); // "" (empty string for out of bounds)

// at(index) - returns character at index, supports negative indices
console.log(str.at(0)); // "H"
console.log(str.at(-1)); // "o" (last character)
console.log(str.at(-2)); // "l" (second to last)

```

## **Search Methods**
```javascript
const str = "Hello World Hello";

// indexOf(searchString, fromIndex) - first occurrence index
console.log(str.indexOf("l")); // 2
console.log(str.indexOf("l", 3)); // 3 (search from index 3)
console.log(str.indexOf("xyz")); // -1 (not found)

// lastIndexOf(searchString, fromIndex) - last occurrence index
console.log(str.lastIndexOf("l")); // 15
console.log(str.lastIndexOf("l", 10)); // 9 (search backwards from index 10)

// includes(searchString, position) - check if string contains substring
console.log(str.includes("World")); // true
console.log(str.includes("world")); // false (case sensitive)
console.log(str.includes("Hello", 1)); // true (search from position 1)

// startsWith(searchString, position) - check if string starts with substring
console.log(str.startsWith("Hello")); // true
console.log(str.startsWith("World", 6)); // true (check from position 6)

// endsWith(searchString, length) - check if string ends with substring
console.log(str.endsWith("Hello")); // true
console.log(str.endsWith("World", 11)); // true (check within first 11 characters)
```

## **Extraction Methods**
```javascript
const str = "Hello World";

// slice(start, end) - extract section (supports negative indices)
console.log(str.slice(0, 5)); // "Hello"
console.log(str.slice(6)); // "World"
console.log(str.slice(-5)); // "World"
console.log(str.slice(-5, -1)); // "Worl"

// substring(start, end) - extract section (no negative indices)
console.log(str.substring(0, 5)); // "Hello"
console.log(str.substring(6)); // "World"
console.log(str.substring(-5)); // "Hello World" (treats negative as 0)
```

## **Case Conversion Methods**
```javascript
const str = "Hello World";

// toLowerCase() - convert to lowercase
console.log(str.toLowerCase()); // "hello world"

// toUpperCase() - convert to uppercase
console.log(str.toUpperCase()); // "HELLO WORLD"

```

## **Whitespace Methods**
```javascript
const str = "  Hello World  ";

// trim() - remove whitespace from both ends
console.log(str.trim()); // "Hello World"

// trimStart() / trimLeft() - remove whitespace from start
console.log(str.trimStart()); // "Hello World  "
console.log(str.trimLeft()); // "Hello World  " (alias for trimStart)

// trimEnd() / trimRight() - remove whitespace from end
console.log(str.trimEnd()); // "  Hello World"
console.log(str.trimRight()); // "  Hello World" (alias for trimEnd)
```

## **Replacement Methods**
```javascript
const str = "Hello World Hello";

// replace(searchValue, newValue) - replace first occurrence
console.log(str.replace("Hello", "Hi")); // "Hi World Hello"

// replaceAll(searchValue, newValue) - replace all occurrences
console.log(str.replaceAll("Hello", "Hi")); // "Hi World Hi"
```

## **Split Methods**
```javascript
const str = "apple,banana,orange";

// split(separator, limit) - split string into array
console.log(str.split(",")); // ["apple", "banana", "orange"]
console.log(str.split(",", 2)); // ["apple", "banana"] (limit to 2)
console.log(str.split("")); // ["a", "p", "p", "l", "e", ",", "b", "a", "n", "a", "n", "a", ",", "o", "r", "a", "n", "g", "e"]
console.log("hello world".split(" ")); // ["hello", "world"]
```

## **Concatenation Methods**
```javascript
const str1 = "Hello";
const str2 = "World";

// concat(...strings) - concatenate strings
console.log(str1.concat(" ", str2)); // "Hello World"
console.log(str1.concat(" ", str2, "!")); // "Hello World!"

// Template literals (modern alternative)
console.log(`${str1} ${str2}`); // "Hello World"
```

## **Padding Methods**
```javascript
const str = "5";

// padStart(targetLength, padString) - pad at beginning
console.log(str.padStart(3, "0")); // "005"
console.log("hello".padStart(8, "*")); // "***hello"

// padEnd(targetLength, padString) - pad at end
console.log(str.padEnd(3, "0")); // "500"
console.log("hello".padEnd(8, "*")); // "hello***"
```

## **Repetition Methods**
```javascript
const str = "abc";

// repeat(count) - repeat string
console.log(str.repeat(3)); // "abcabcabc"
console.log("*".repeat(5)); // "*****"
console.log("Hi ".repeat(0)); // ""
```



## **String Iteration (Strings are Iterable!)**
```javascript
const str = "Hello";

// for...of loop (most common)
for (const char of str) {
    console.log(char); // H, e, l, l, o
}

// Index-based access (like arrays)
console.log(str[0]); // "H"
console.log(str[1]); // "e"

// Traditional for loop
for (let i = 0; i < str.length; i++) {
    console.log(str[i]); // H, e, l, l, o
}

// for...in loop (gets indices)
for (const index in str) {
    console.log(index, str[index]); // 0 H, 1 e, 2 l, 3 l, 4 o
}
```

## **String to Array Conversion (Without split!)**
```javascript
const str = "Hello";

// Spread operator (ES6+) - cleanest method
const arr1 = [...str];
console.log(arr1); // ["H", "e", "l", "l", "o"]

// Array.from() - explicit conversion
const arr2 = Array.from(str);
console.log(arr2); // ["H", "e", "l", "l", "o"]

// Traditional split with empty string
const arr3 = str.split('');
console.log(arr3); // ["H", "e", "l", "l", "o"]

// Manual loop method
const arr4 = [];
for (let i = 0; i < str.length; i++) {
    arr4.push(str[i]);
}
console.log(arr4); // ["H", "e", "l", "l", "o"]
```
