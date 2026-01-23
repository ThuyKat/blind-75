
## Comparing `>>` vs `>>>`

| Operator | Name | Decimal Effect | Fills With |
|----------|------|----------------|------------|
| `>>` | Signed right shift | Divide by `2^k` | Sign bit (`0` or `1`) |
| `>>>` | Unsigned right shift | Divide by `2^k` (treat as unsigned) | Always `0` |

---

## For Positive Numbers: Same Result

```java
int a = 16;          // Binary: 0000 0000 0000 0000 0000 0000 0001 0000

a >> 2;              // 0000 0000 0000 0000 0000 0000 0000 0100 → 4
a >>> 2;             // 0000 0000 0000 0000 0000 0000 0000 0100 → 4

// Both give 16 ÷ 4 = 4 ✅
```

---

## For Negative Numbers: Different Results!

```java
int a = -16;         // Binary: 1111 1111 1111 1111 1111 1111 1111 0000

a >> 2;              // 1111 1111 1111 1111 1111 1111 1111 1100 → -4
                     // ↑↑ fills with 1s (preserves negative sign)

a >>> 2;             // 0011 1111 1111 1111 1111 1111 1111 1100 → 1,073,741,820
                     // ↑↑ fills with 0s (becomes huge positive!)
```

| Operation | Binary Result | Decimal |
|-----------|---------------|---------|
| `-16 >> 2` | `1111...1111 1100` | **-4** (sign preserved) |
| `-16 >>> 2` | `0011...1111 1100` | **1,073,741,820** (huge positive!) |

---

## Visual Comparison

```
Original -16:     1111 1111 1111 1111 1111 1111 1111 0000

>> 2 (signed):    1111 1111 1111 1111 1111 1111 1111 1100
                  ↑↑
                  Fills with 1s (sign bit)
                  Result: -4

>>> 2 (unsigned): 0011 1111 1111 1111 1111 1111 1111 1100
                  ↑↑
                  Fills with 0s (always)
                  Result: 1,073,741,820
```

---

## When to Use Each?

| Operator | Use When... |
|----------|-------------|
| `>>` | You want **mathematical division** (preserving sign) |
| `>>>` | You're treating the number as **unsigned bits** (not a signed value) |

---

## Common Use Cases for `>>>`

**1. Working with bit patterns (not numbers)**
```java
int color = 0xFF5733;           // RGB color
int red = (color >>> 16) & 0xFF; // Extract red component
```
`color = 0xFF5733` packs RGB values into **24 bits** of a 32-bit integer like this:

```
0xFF5733 = 11111111 01010111 00110011
  [24 unused]   FF      57      33
                ↑Red    ↑Green  ↑Blue
```

## Step-by-Step Breakdown

**`(color >>> 16)`** shifts **right 16 bits** (red component moves to lowest 8 bits):
```
Before: 11111111 01010111 00110011
After >>>16:     00000000 00000000 11111111
                           ↑ Red = 0xFF = 255
```

**`& 0xFF`** masks to **keep only lowest 8 bits** (clears everything else):
```
11111111 & 11111111 = 11111111 = 255 (red value)
```

## Same for Other Colors
```javascript
int green = (color >>> 8)  & 0xFF;  // Shift 8 → mask 8 bits
int blue  = (color >>> 0)  & 0xFF;  // No shift → mask 8 bits
```

**Why `>>>` not `>>`?** `>>>` is **unsigned right shift** (fills with zeros). `>>` is signed (sign-extends), which corrupts colors. [stackoverflow](https://stackoverflow.com/questions/23211603/why-do-we-use-to-get-colour-values-from-rgb)

## Visual Trace
```
Original: FF 57 33
>>>16:      FF
& 0xFF:   FF (255 red)

>>>8:        57
& 0xFF:   57 (87 green) 

>>>0:        33  
& 0xFF:   33 (51 blue)
```

This packs **3 bytes RGB → 1 int** for efficient storage/transmission. [stackoverflow](https://stackoverflow.com/questions/19277010/bit-shift-and-bitwise-operations-to-encode-rgb-values)

**2. Hash code calculations**
```java
int hash = key.hashCode();
hash = hash ^ (hash >>> 16);    // Mix bits for better distribution
```

**3. Converting signed to unsigned behavior**
```java
// Java has no unsigned int, but >>> treats bits as unsigned
int signed = -1;                // 1111 1111 1111 1111 1111 1111 1111 1111
long unsigned = signed & 0xFFFFFFFFL;  // 4,294,967,295
```

---

## Summary

| Number | `>> 2` | `>>> 2` |
|--------|--------|---------|
| `16` | `4` | `4` |
| `-16` | `-4` | `1,073,741,820` |
| `32` | `8` | `8` |
| `-32` | `-8` | `1,073,741,816` |

**Rule:**
- **Positive numbers:** `>>` and `>>>` give the **same result**
- **Negative numbers:** `>>` stays negative, `>>>` becomes a **huge positive**

---

