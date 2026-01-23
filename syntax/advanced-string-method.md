## **Character Access Methods**

```javascript
const str = "Hello";

// charCodeAt(index) - returns Unicode code of character
console.log(str.charCodeAt(0)); // 72 (Unicode for 'H')

// codePointAt(index) - returns Unicode code point
console.log(str.codePointAt(0)); // 72
```
## **Case Conversion Methods**
```javascript
const str = "Hello World";

// toLocaleLowerCase(locale) - locale-specific lowercase
console.log(str.toLocaleLowerCase()); // "hello world"
console.log(str.toLocaleLowerCase('tr-TR')); // Turkish locale

// toLocaleUpperCase(locale) - locale-specific uppercase
console.log(str.toLocaleUpperCase()); // "HELLO WORLD"
```

## **Replacement Methods**
```javascript
const str = "Hello World Hello";

// replace(searchValue, newValue) - replace first occurrence
console.log(str.replace(/hello/i, "Hi")); // "Hi World Hello" (regex, case insensitive)

// replaceAll(searchValue, newValue) - replace all occurrences
console.log(str.replaceAll(/hello/gi, "Hi")); // "Hi World Hi" (regex with global flag)
```
## **Regular Expression Methods**
```javascript
const str = "The quick brown fox jumps over the lazy dog";

// search(regexp) - search for pattern, returns index
console.log(str.search(/fox/)); // 16
console.log(str.search(/cat/)); // -1 (not found)

// match(regexp) - match pattern, returns array
console.log(str.match(/quick/)); // ["quick", index: 4, input: "...", groups: undefined]
console.log(str.match(/the/gi)); // ["The", "the"] (global, case insensitive)

// matchAll(regexp) - returns iterator of all matches (requires global flag)
const matches = str.matchAll(/o/g);
console.log([...matches]); // Array of match objects for each 'o'
```
## **Comparison Methods**
```javascript
const str1 = "apple";
const str2 = "banana";

// localeCompare(compareString, locales, options) - compare strings
console.log(str1.localeCompare(str2)); // -1 (str1 comes before str2)
console.log(str2.localeCompare(str1)); // 1 (str2 comes after str1)
console.log(str1.localeCompare(str1)); // 0 (equal)

// With locale and options
console.log("ä".localeCompare("a", "de", { sensitivity: 'base' })); // 0
```
## **Unicode Methods**
```javascript
const str = "Hello 🌍";

// normalize(form) - Unicode normalization
console.log(str.normalize()); // "Hello 🌍"
console.log(str.normalize("NFD")); // Decomposed form

// isWellFormed() - check if string is well-formed Unicode (ES2024)
console.log("Hello".isWellFormed()); // true
console.log("\uD800".isWellFormed()); // false (lone surrogate)

// toWellFormed() - return well-formed version (ES2024)
console.log("Hello".toWellFormed()); // "Hello"
console.log("\uD800".toWellFormed()); // "�" (replacement character)
```
## **Conversion Methods**
```javascript
const str = "Hello";

// toString() - convert to string (usually unnecessary for strings)
console.log(str.toString()); // "Hello"

// valueOf() - return primitive value
console.log(str.valueOf()); // "Hello"
```

## **Static Methods**
```javascript
// String.fromCharCode(...codes) - create string from Unicode values
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // "Hello"

// String.fromCodePoint(...codePoints) - create string from code points
console.log(String.fromCodePoint(0x1F30D)); // "🌍"
console.log(String.fromCodePoint(72, 101, 108, 108, 111)); // "Hello"

// String.raw(template, ...substitutions) - raw template literal
console.log(String.raw`Hello\nWorld`); // "Hello\\nWorld" (escaped backslash)
console.log(String.raw`C:\Users\Name`); // "C:\\Users\\Name"
```