# Why BFS?

Checking the cells surrounding the current cell, then checking the cells surrounding *those* cells, and so on layer by layer — this level-by-level expansion is exactly what BFS does. Since we want the **shortest** path to an exit, BFS is a natural fit: it explores all cells at distance `d` before moving on to distance `d + 1`, so the first exit it reaches is guaranteed to be the nearest one.

## How to solve

1. Use a **queue** to keep track of cells still waiting to be checked.
2. Use a **set** to keep track of visited cells, so we never revisit or re-enqueue the same cell.
3. Pop a cell off the queue:
   - If it's an exit, return its depth.
   - Otherwise, enqueue all of its unvisited, in-bounds, non-wall neighbors.
4. Repeat until the queue is empty. If it empties out without finding an exit, return `-1`.

A cell is only added to the queue if it:
- is within the maze's boundaries,
- is empty (not a wall), and
- is not already in the visited set.

## Bugs to avoid

- **Don't re-check "is this cell empty?" in the main loop.** The helper function already filters out walls before a cell is ever added to the queue, so by the time a cell is popped, it's guaranteed to be empty.
- **`step` starts at `1`, not `0`.** The entrance itself is depth 0 but is never enqueued (it's pre-marked as visited), so the first cells added to the queue — its direct neighbors — are already one step away.
- **`step` increases by one each time the helper is called for the next layer** — via `depth + 1` — not through recursion. The algorithm itself is iterative (a plain `while` loop over the queue); only the step count advances with each call.
- **Store `step` alongside each cell in the queue** (as `(row, col, depth)`), not in a separate variable. That's what lets us report the correct depth for whichever cell turns out to be the exit.
