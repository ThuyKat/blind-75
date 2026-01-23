**JavaScript methods to convert number → binary string:**

## 1. Simplest: `toString(2)` ✅
```javascript
13.toString(2);     // "1101"
5.toString(2);      // "101"
```

**For negatives** (32-bit unsigned first):
```javascript
(-13 >>> 0).toString(2);  // "11111111111111111111111111110011"
(-1 >>> 0).toString(2);   // "11111111111111111111111111111111"
```

## 2. Manual Loop (Your Cheat Sheet Method)
```javascript
function toBinary(n) {
    let binary = "";
    while (n > 0) {
        binary = (n % 2) + binary;
        n = Math.floor(n / 2);
    }
    return binary || "0";
}

toBinary(13);  // "1101"
```

## 3. Bitwise Version (Faster)
```javascript
function toBinary(n) {
    let binary = "";
    while (n > 0) {
        binary = (n & 1) + binary;
        n >>= 1;
    }
    return binary || "0";
}
```

## Pad to Fixed Width (Like Java 8-bit)
```javascript
13.toString(2).padStart(8, '0');  // "00001101"
```

**Quick test:**
```javascript
console.log(13.toString(2));           // "1101"
console.log((-1 >>> 0).toString(2));   // 32 ones
```

**Use `toString(2)`** for 99% of cases. Manual loop only for interviews showing division process from your cheat sheet! [stackoverflow](https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript)