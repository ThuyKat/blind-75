# Regex Guide for DSA Questions

## 1. Basic Syntax

### Character Classes
```javascript
/\d/     // Any digit (0-9)
/\D/     // Any non-digit
/\w/     // Any word character (a-z, A-Z, 0-9, _)
/\W/     // Any non-word character
/\s/     // Any whitespace (space, tab, newline)
/\S/     // Any non-whitespace
/./      // Any character except newline
```

### Quantifiers
```javascript
/a*/     // 0 or more 'a'
/a+/     // 1 or more 'a'
/a?/     // 0 or 1 'a'
/a{3}/   // Exactly 3 'a'
/a{2,4}/ // Between 2 and 4 'a'
/a{2,}/  // 2 or more 'a'
```

### Anchors
```javascript
/^start/  // Must start with "start"
    /*
        NOTE: [^a-zA-Z]/g means "everything that is NOT a letter"
                The ^ inside [] means "NOT"
    */
/end$/    // Must end with "end"
/\b/      // Word boundary
```

## 2. Common DSA Patterns

### Validate Email
```javascript
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
```

### Extract Numbers
```javascript
"Price is $123.45".match(/\d+\.?\d*/g);  // ["123.45"]
"abc123def456".match(/\d+/g);            // ["123", "456"]
```

### Check if String Contains Only Digits
```javascript
function isNumeric(str) {
    return /^\d+$/.test(str);
}
```

### Remove Non-Alphanumeric
```javascript
str.replace(/[^a-zA-Z0-9]/g, '');  // Keep only letters and numbers
str.replace(/\W/g, '');            // Same but keeps underscore
```

## 3. Key JavaScript Regex Methods

### test() - Returns boolean
```javascript
/\d{3}/.test("123");     // true
/^[A-Z]/.test("hello");  // false
```

### match() - Returns matches
```javascript
"cat and dog".match(/cat/);      // ["cat"]
"cat and cat".match(/cat/g);     // ["cat", "cat"]
"no match".match(/xyz/);         // null
```

### replace() - Replace matches
```javascript
"hello123".replace(/\d+/, "XXX");        // "helloXXX"
"a1b2c3".replace(/\d/g, "X");           // "aXbXcX"
```

### split() - Split by pattern
```javascript
"a,b;c:d".split(/[,:;]/);    // ["a", "b", "c", "d"]
"hello123world".split(/\d+/); // ["hello", "world"]
```

## 4. Common DSA Use Cases

### 1. Palindrome (ignoring non-alphanumeric)
```javascript
function isPalindrome(s) {
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}
```

### 2. Count Words
```javascript
function countWords(str) {
    return str.match(/\b\w+\b/g)?.length || 0;
}
```

### 3. Valid Phone Number
```javascript
function isValidPhone(phone) {
    // Matches: 123-456-7890, (123) 456-7890, etc.
    return /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(phone);
}
```

### 4. Extract Groups
```javascript
// Extract parts of a date
const dateRegex = /(\d{4})-(\d{2})-(\d{2})/;
const match = "2024-03-15".match(dateRegex);
// match[1] = "2024", match[2] = "03", match[3] = "15"
```

### 5. Valid Identifier
```javascript
// Check if valid variable name (starts with letter/underscore)
function isValidIdentifier(name) {
    return /^[a-zA-Z_]\w*$/.test(name);
}
```

## 5. Performance Tips

### 1. Precompile regex if using multiple times:
```javascript
const regex = /\d+/g;  // Define once
for (let str of strings) {
    str.match(regex);  // Reuse
}
```

### 2. Avoid regex for simple checks:
```javascript
// Don't use regex for this:
/^a/.test(str)         // Checking if starts with 'a'
str.startsWith('a')    // Use this instead
```

### 3. Be careful with global flag:
```javascript
const regex = /\d/g;
regex.test("1");  // true
regex.test("2");  // false (!) - lastIndex issue
// Reset or create new regex each time
```

## 6. Common Interview Patterns

```javascript
// IP Address validation
/^(\d{1,3}\.){3}\d{1,3}$/.test("192.168.0.1");

// Remove consecutive duplicates
"aaabbbccc".replace(/(.)\1+/g, "$1");  // "abc"

// CamelCase to snake_case
"camelCase".replace(/[A-Z]/g, m => '_' + m.toLowerCase());

// Extract hashtags
"Hello #world #test".match(/#\w+/g);  // ["#world", "#test"]
```

## Key Takeaways

**Most DSA problems use regex for:**
- Input validation
- String cleaning/preprocessing  
- Pattern matching
- Extracting specific parts

