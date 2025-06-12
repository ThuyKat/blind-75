# JavaScript Set Methods - Complete Reference

## **What is a Set?**
A Set is a collection of **unique values**. It automatically removes duplicates and provides **O(1)** operations for add, delete, and has.

## **Creating a Set**

```javascript
// Empty Set
const emptySet = new Set();

// Set from array
const setFromArray = new Set([1, 2, 3, 2, 1]); // {1, 2, 3}

// Set from string
const setFromString = new Set("hello"); // {"h", "e", "l", "o"}

// Set from iterable
const setFromIterable = new Set([..."abcabc"]); // {"a", "b", "c"}
```

## **Instance Properties**

### **size**
Returns the number of elements in the Set.

```javascript
const mySet = new Set([1, 2, 3]);
console.log(mySet.size); // 3

mySet.add(4);
console.log(mySet.size); // 4
```

## **Modification Methods**

### **add(value)**
Adds a new element to the Set. Returns the Set object (chainable).

```javascript
const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicate ignored
console.log(mySet); // Set {1, 2}

// Chaining
mySet.add(3).add(4).add(5);
console.log(mySet); // Set {1, 2, 3, 4, 5}

// Different data types
mySet.add("hello");
mySet.add({name: "John"});
mySet.add([1, 2, 3]);
mySet.add(true);
```

### **delete(value)**
Removes an element from the Set. Returns `true` if element existed and was removed, `false` otherwise.

```javascript
const mySet = new Set([1, 2, 3, 4, 5]);

console.log(mySet.delete(3)); // true
console.log(mySet.delete(10)); // false (doesn't exist)
console.log(mySet); // Set {1, 2, 4, 5}

// With objects/arrays (reference equality)
const obj = {name: "John"};
mySet.add(obj);
console.log(mySet.delete(obj)); // true
console.log(mySet.delete({name: "John"})); // false (different reference)
```

### **clear()**
Removes all elements from the Set.

```javascript
const mySet = new Set([1, 2, 3, 4, 5]);
console.log(mySet.size); // 5

mySet.clear();
console.log(mySet.size); // 0
console.log(mySet); // Set {}
```

## **Query Methods**

### **has(value)**
Returns `true` if the element exists in the Set, `false` otherwise.

```javascript
const mySet = new Set([1, 2, 3, "hello", true]);

console.log(mySet.has(1)); // true
console.log(mySet.has("hello")); // true
console.log(mySet.has("Hello")); // false (case sensitive)
console.log(mySet.has(4)); // false

// With objects (reference equality)
const obj = {id: 1};
mySet.add(obj);
console.log(mySet.has(obj)); // true
console.log(mySet.has({id: 1})); // false (different reference)
```

## **Iteration Methods**

### **forEach(callback[, thisArg])**
Executes a provided function once for each value in the Set.

```javascript
const mySet = new Set(["a", "b", "c"]);

// Basic forEach
mySet.forEach(value => {
    console.log(value); // "a", "b", "c"
});

// With index (same as value in Set)
mySet.forEach((value, value2, set) => {
    console.log(`${value} === ${value2}`); // true for each
    console.log(set === mySet); // true
});

// With thisArg
const context = {prefix: "Value: "};
mySet.forEach(function(value) {
    console.log(this.prefix + value); // "Value: a", "Value: b", "Value: c"
}, context);
```

### **values()**
Returns an iterator object that contains the values for each element in the Set.

```javascript
const mySet = new Set(["apple", "banana", "cherry"]);

const iterator = mySet.values();
console.log(iterator.next().value); // "apple"
console.log(iterator.next().value); // "banana"
console.log(iterator.next().value); // "cherry"
console.log(iterator.next().done); // true

// Convert to array
const valuesArray = [...mySet.values()]; // ["apple", "banana", "cherry"]
```

### **keys()**
Returns an iterator object that contains the values (same as values() in Set).

```javascript
const mySet = new Set([1, 2, 3]);

// keys() is same as values() for Set
console.log([...mySet.keys()]); // [1, 2, 3]
console.log([...mySet.values()]); // [1, 2, 3]
```

### **entries()**
Returns an iterator object that contains [value, value] pairs for each element.

```javascript
const mySet = new Set(["x", "y", "z"]);

const entries = mySet.entries();
console.log(entries.next().value); // ["x", "x"]
console.log(entries.next().value); // ["y", "y"]
console.log(entries.next().value); // ["z", "z"]

// Convert to array
const entriesArray = [...mySet.entries()]; // [["x", "x"], ["y", "y"], ["z", "z"]]
```

### **@@iterator (Symbol.iterator)**
Makes Set iterable in for...of loops.

```javascript
const mySet = new Set([1, 2, 3, 4, 5]);

// for...of loop
for (const value of mySet) {
    console.log(value); // 1, 2, 3, 4, 5
}

// Spread operator
const array = [...mySet]; // [1, 2, 3, 4, 5]

// Array.from()
const array2 = Array.from(mySet); // [1, 2, 3, 4, 5]
```

## **Practical Examples**

### **Remove Duplicates from Array**
```javascript
function removeDuplicates(array) {
    return [...new Set(array)];
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]
console.log(removeDuplicates(["a", "b", "a", "c"])); // ["a", "b", "c"]
```

### **Check if Arrays Have Common Elements**
```javascript
function hasCommonElements(arr1, arr2) {
    const set1 = new Set(arr1);
    return arr2.some(item => set1.has(item));
}

console.log(hasCommonElements([1, 2, 3], [3, 4, 5])); // true
console.log(hasCommonElements([1, 2], [3, 4])); // false
```

### **Set Operations**
```javascript
// Union
function union(setA, setB) {
    return new Set([...setA, ...setB]);
}

// Intersection
function intersection(setA, setB) {
    return new Set([...setA].filter(x => setB.has(x)));
}

// Difference
function difference(setA, setB) {
    return new Set([...setA].filter(x => !setB.has(x)));
}

const set1 = new Set([1, 2, 3, 4]);
const set2 = new Set([3, 4, 5, 6]);

console.log(union(set1, set2)); // Set {1, 2, 3, 4, 5, 6}
console.log(intersection(set1, set2)); // Set {3, 4}
console.log(difference(set1, set2)); // Set {1, 2}
```

### **Track Unique Visitors**
```javascript
class VisitorTracker {
    constructor() {
        this.visitors = new Set();
    }
    
    addVisitor(userId) {
        this.visitors.add(userId);
        return this.visitors.size;
    }
    
    hasVisited(userId) {
        return this.visitors.has(userId);
    }
    
    getUniqueCount() {
        return this.visitors.size;
    }
    
    getAllVisitors() {
        return [...this.visitors];
    }
}

const tracker = new VisitorTracker();
console.log(tracker.addVisitor("user1")); // 1
console.log(tracker.addVisitor("user2")); // 2
console.log(tracker.addVisitor("user1")); // 2 (duplicate ignored)
```

## **Performance Characteristics**

| Operation | Time Complexity | Notes |
|-----------|----------------|-------|
| add() | O(1) average | O(n) worst case |
| delete() | O(1) average | O(n) worst case |
| has() | O(1) average | O(n) worst case |
| clear() | O(n) | Must remove all elements |
| size | O(1) | Property access |

## **Set vs Array Comparison**

| Feature | Set | Array |
|---------|-----|-------|
| Duplicates | No | Yes |
| Order | Insertion order | Index order |
| Search | O(1) with has() | O(n) with includes() |
| Add | O(1) with add() | O(1) with push() |
| Remove | O(1) with delete() | O(n) with splice() |
| Index access | No | Yes with [index] |

## **When to Use Set**

✅ **Use Set when:**
- Need unique values only
- Fast membership testing (has())
- Set operations (union, intersection)
- Removing duplicates
- Order doesn't matter much

❌ **Don't use Set when:**
- Need indexed access
- Need to store key-value pairs
- Order is critical for your logic
- Working with simple arrays where duplicates are OK

## **Browser Support**
Set is supported in all modern browsers:
- Chrome 38+
- Firefox 13+
- Safari 8+
- Edge 12+
- IE 11+