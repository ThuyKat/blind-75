# How to Solve

1. Precompute a prefix-max array: `left[i] = max(nums[0..i])`.
2. Precompute a suffix-min array: `right[i] = min(nums[i..n-1])`.
3. Scan indices left to right, computing `left[i] - right[i]`.
4. As soon as `left[i] - right[i] <= k`, return `i`.
5. If no index satisfies this, return `-1`.

This runs in `O(n)` time and `O(n)` space.

## Potential Trip-ups

- Reading the question, it's tempting to think we're looking for the index with the **smallest** instability score — that's not the case.
- The question asks for the **smallest stable index**, so we return the first `i` where the score is `<= k`, not the `i` with the minimum score.
- Track the index alongside its max/min, since we need to return the index itself, not the score.
