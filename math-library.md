# Essential Math Methods for DSA in JavaScript

## 1. Basic Arithmetic & Rounding

### Rounding Methods:
```javascript
Math.floor(4.9)    // 4    - Always rounds DOWN
Math.ceil(4.1)     // 5    - Always rounds UP  
Math.round(4.5)    // 5    - Rounds to nearest integer (0.5+ goes up)
Math.trunc(4.9)    // 4    - Removes decimal part

// Common DSA uses:
let mid = Math.floor((left + right) / 2);  // Binary search
let pages = Math.ceil(totalItems / itemsPerPage);  // Pagination
```

## 2. Min/Max Operations

```javascript
Math.min(2, 5, 1)      // 1
Math.max(2, 5, 1)      // 5
Math.min(...array)     // Min of array
Math.max(...array)     // Max of array

// DSA Examples:
let minCost = Math.min(cost1, cost2, cost3);
let maxProfit = Math.max(0, prices[i] - minPrice);
```

## 3. Power & Roots

```javascript
Math.pow(2, 10)     // 1024  (same as 2 ** 10)
Math.sqrt(16)       // 4
Math.cbrt(27)       // 3     (cube root)

// DSA Examples:
let isPerfectSquare = Math.sqrt(n) % 1 === 0;
let distance = Math.sqrt(dx**2 + dy**2);  // Euclidean distance
```

## 4. Absolute Value

```javascript
Math.abs(-5)        // 5
Math.abs(5)         // 5

// DSA Examples:
let diff = Math.abs(a - b);
let manhattanDist = Math.abs(x1 - x2) + Math.abs(y1 - y2);
```

## 5. Logarithms

```javascript
Math.log(Math.E)    // 1     (natural log, base e)
Math.log10(100)     // 2     (base 10)
Math.log2(8)        // 3     (base 2) - VERY useful for DSA!

// DSA Examples:
let binaryTreeHeight = Math.floor(Math.log2(n)) + 1;
let digitsCount = Math.floor(Math.log10(n)) + 1;
```

## 6. Random Numbers

```javascript
Math.random()              // 0 to 0.999... (never 1)
Math.floor(Math.random() * n)     // Random integer 0 to n-1
min + Math.floor(Math.random() * (max - min + 1))  // Random [min, max]

// DSA Examples:
let randomIndex = Math.floor(Math.random() * array.length);
let coinFlip = Math.random() < 0.5;  // true/false
```

## 7. Sign & Comparison

```javascript
Math.sign(5)        // 1
Math.sign(-5)       // -1
Math.sign(0)        // 0

// DSA Example:
let direction = Math.sign(target - current);  // -1, 0, or 1
```

## 8. Constants

```javascript
Math.PI            // 3.14159...
Math.E             // 2.71828... (Euler's number)
Math.SQRT2         // 1.41421... (√2)

// DSA Example:
let circleArea = Math.PI * r ** 2;
```

## Common DSA Patterns

### 1. Integer Division:
```javascript
let quotient = Math.floor(a / b);
let remainder = a % b;
```

### 2. Check if Power of 2:
```javascript
let isPowerOf2 = n > 0 && (n & (n - 1)) === 0;
// Or: Math.log2(n) % 1 === 0
```

### 3. Number of Digits:
```javascript
let digits = Math.floor(Math.log10(Math.abs(n))) + 1;
// Or: n.toString().length
```

### 4. Midpoint without Overflow:
```javascript
let mid = left + Math.floor((right - left) / 2);
```

### 5. Distance Calculations:
```javascript
// Euclidean
let dist = Math.sqrt((x2-x1)**2 + (y2-y1)**2);

// Manhattan
let dist = Math.abs(x2-x1) + Math.abs(y2-y1);
```

### 6. Modulo for Circular Arrays:
```javascript
let nextIndex = (currentIndex + 1) % array.length;
let prevIndex = (currentIndex - 1 + array.length) % array.length;
```

## Performance Tips

1. **Prefer `**` over `Math.pow()`** for simple powers
2. **Use bitwise for powers of 2**: `1 << n` equals `2^n`
3. **Integer check**: `n % 1 === 0` is faster than `Number.isInteger()`
4. **Even/Odd**: Use `n & 1` instead of `n % 2` for performance

## Common Gotchas

```javascript
Math.max()         // -Infinity (not error!)
Math.min()         // Infinity
Math.floor(-3.5)   // -4 (not -3!)
0.1 + 0.2          // 0.30000000000000004 (floating point issues)
```

**Remember**: For very large arrays, use loops instead of spread operator with Math.min/max to avoid stack overflow!