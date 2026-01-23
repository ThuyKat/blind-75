
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

