# Regex Global Flag (/g) Explained

## What /g Does

The `/g` is the **global flag** in regex.

### Without /g - Finds only the FIRST match
```javascript
"cat cat cat".match(/cat/);    // ["cat"]
"cat cat cat".replace(/cat/, "dog");  // "dog cat cat"
```

### With /g - Finds ALL matches
```javascript
"cat cat cat".match(/cat/g);   // ["cat", "cat", "cat"]
"cat cat cat".replace(/cat/g, "dog"); // "dog dog dog"
```

## Common Regex Flags

```javascript
/pattern/g   // Global - find ALL matches
/pattern/i   // Case-Insensitive 
/pattern/m   // Multiline - ^ and $ match line breaks
/pattern/gi  // Combine flags - global AND case-insensitive
```

## Examples

```javascript
// Without flags
"Hello hello".match(/hello/);     // ["hello"] - only lowercase

// With 'i' flag
"Hello hello".match(/hello/i);    // ["Hello"] - matches first, any case

// With 'gi' flags  
"Hello hello".match(/hello/gi);   // ["Hello", "hello"] - all matches, any case

// Replace examples
"123-456-789".replace(/\d/, "X");    // "X23-456-789" - only first digit
"123-456-789".replace(/\d/g, "X");   // "XXX-XXX-XXX" - all digits
```

## ⚠️ Warning with test() and /g

```javascript
const regex = /\d/g;
console.log(regex.test("1"));  // true
console.log(regex.test("2"));  // false (!!)

// Why? The regex remembers its position with 'lastIndex'
// Better to create new regex each time or not use /g with test()
```

## Rule of Thumb

Use `/g` when you want to find/replace ALL occurrences, not just the first one!