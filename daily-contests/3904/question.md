# Smallest Stable Index

You are given an integer array `nums` of length `n` and an integer `k`.

For each index `i`, define its **instability score** as:

```
max(nums[0..i]) - min(nums[i..n-1])
```

In other words:

- `max(nums[0..i])` is the largest value among the elements from index `0` to index `i`.
- `min(nums[i..n-1])` is the smallest value among the elements from index `i` to index `n - 1`.

An index `i` is called **stable** if its instability score is less than or equal to `k`.

Return the smallest stable index. If no such index exists, return `-1`.

## Example 1

**Input:** `nums = [5,0,1,4]`, `k = 3`

**Output:** `3`

**Explanation:**

| Index | max(nums[0..i]) | min(nums[i..n-1]) | Instability score |
|:-----:|:----------------:|:-------------------:|:------------------:|
| 0 | 5 | 0 | 5 - 0 = 5 |
| 1 | 5 | 0 | 5 - 0 = 5 |
| 2 | 5 | 1 | 5 - 1 = 4 |
| 3 | 5 | 4 | 5 - 4 = 1 |

Index `3` is the first index with an instability score `<= k = 3`. Thus, the answer is `3`.

## Example 2

**Input:** `nums = [3,2,1]`, `k = 1`

**Output:** `-1`

**Explanation:**

| Index | Instability score |
|:-----:|:------------------:|
| 0 | 3 - 1 = 2 |
| 1 | 3 - 1 = 2 |
| 2 | 3 - 1 = 2 |

None of these values is less than or equal to `k = 1`, so the answer is `-1`.

## Example 3

**Input:** `nums = [0]`, `k = 0`

**Output:** `0`

**Explanation:**

At index `0`, the instability score is `0 - 0 = 0`, which is less than or equal to `k = 0`. Therefore, the answer is `0`.

## Constraints

- `1 <= nums.length <= 10^5`
- `0 <= nums[i] <= 10^9`
- `0 <= k <= 10^9`
