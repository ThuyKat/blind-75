# JavaScript Map Methods - Complete Reference

## **What is a Map?**
A Map is a collection of **key-value pairs** where keys can be **any type** (objects, primitives, functions). It maintains insertion order and provides **O(1)** operations for get, set, has, and delete.

## **Creating a Map**

```javascript
// Empty Map
const emptyMap = new Map();

// Map from array of [key, value] pairs
const mapFromArray = new Map([
    ["name", "John"],
    ["age", 30],
    [1, "number key"],
    [true, "boolean key"]
]);

// Map from another Map
const mapCopy = new Map(mapFromArray);

// Map from Object.entries()
const obj = {a: 1, b: 2, c: 3};
const mapFromObject = new Map(Object.entries(obj));
```

## **Instance Properties**

### **size**
Returns the number of key-value pairs in the Map.

```javascript
const myMap = new Map([["a", 1], ["b", 2], ["c", 3]]);
console.log(myMap.size); // 3

myMap.set("d", 4);
console.log(myMap.size); // 4
```

## **Modification Methods**

### **set(key, value)**
Sets the value for the key in the Map. Returns the Map object (chainable).

```javascript
const myMap = new Map();

// Basic usage
myMap.set("name", "Alice");
myMap.set("age", 25);
console.log(myMap); // Map {"name" => "Alice", "age" => 25}

// Chaining
myMap.set("city", "NYC").set("country", "USA").set("job", "Developer");

// Any type as key
myMap.set(1, "number key");
myMap.set(true, "boolean key");
myMap.set([1, 2], "array key");
myMap.set({id: 1}, "object key");
myMap.set(() => {}, "function key");

// Updating existing key
myMap.set("name", "Bob"); // Updates existing value
console.log(myMap.get("name")); // "Bob"
```

### **delete(key)**
Removes the key-value pair from the Map. Returns `true` if element existed and was removed, `false` otherwise.

```javascript
const myMap = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3]
]);

console.log(myMap.delete("b")); // true
console.log(myMap.delete("x")); // false (doesn't exist)
console.log(myMap); // Map {"a" => 1, "c" => 3}

// With object keys (reference equality)
const objKey = {id: 1};
myMap.set(objKey, "value");
console.log(myMap.delete(objKey)); // true
console.log(myMap.delete({id: 1})); // false (different reference)
```

### **clear()**
Removes all key-value pairs from the Map.

```javascript
const myMap = new Map([["a", 1], ["b", 2], ["c", 3]]);
console.log(myMap.size); // 3

myMap.clear();
console.log(myMap.size); // 0
console.log(myMap); // Map {}
```

## **Access Methods**

### **get(key)**
Returns the value associated with the key, or `undefined` if key doesn't exist.

```javascript
const myMap = new Map([
    ["name", "John"],
    ["age", 30],
    [1, "number"],
    [true, "boolean"]
]);

console.log(myMap.get("name")); // "John"
console.log(myMap.get("age")); // 30
console.log(myMap.get(1)); // "number"
console.log(myMap.get(true)); // "boolean"
console.log(myMap.get("unknown")); // undefined

// With object keys
const objKey = {id: 1};
myMap.set(objKey, "object value");
console.log(myMap.get(objKey)); // "object value"
console.log(myMap.get({id: 1})); // undefined (different reference)
```

### **has(key)**
Returns `true` if the key exists in the Map, `false` otherwise.

```javascript
const myMap = new Map([
    ["name", "John"],
    ["age", 30],
    [null, "null key"],
    [undefined, "undefined key"]
]);

console.log(myMap.has("name")); // true
console.log(myMap.has("email")); // false
console.log(myMap.has(null)); // true
console.log(myMap.has(undefined)); // true

// With object keys
const objKey = {id: 1};
myMap.set(objKey, "value");
console.log(myMap.has(objKey)); // true
console.log(myMap.has({id: 1})); // false (different reference)
```

## **Iteration Methods**

### **forEach(callback[, thisArg])**
Executes a provided function once for each key-value pair in the Map.

```javascript
const myMap = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3]
]);

// Basic forEach
myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`); // "a: 1", "b: 2", "c: 3"
});

// With map reference
myMap.forEach((value, key, map) => {
    console.log(map === myMap); // true
});

// With thisArg
const context = {prefix: "Item: "};
myMap.forEach(function(value, key) {
    console.log(this.prefix + key + "=" + value);
    // "Item: a=1", "Item: b=2", "Item: c=3"
}, context);
```

### **keys()**
Returns an iterator object that contains the keys for each element in the Map.

```javascript
const myMap = new Map([
    ["name", "John"],
    ["age", 30],
    ["city", "NYC"]
]);

const keysIterator = myMap.keys();
console.log(keysIterator.next().value); // "name"
console.log(keysIterator.next().value); // "age"
console.log(keysIterator.next().value); // "city"

// Convert to array
const keysArray = [...myMap.keys()]; // ["name", "age", "city"]

// Use in for...of
for (const key of myMap.keys()) {
    console.log(key); // "name", "age", "city"
}
```

### **values()**
Returns an iterator object that contains the values for each element in the Map.

```javascript
const myMap = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3]
]);

const valuesIterator = myMap.values();
console.log(valuesIterator.next().value); // 1
console.log(valuesIterator.next().value); // 2
console.log(valuesIterator.next().value); // 3

// Convert to array
const valuesArray = [...myMap.values()]; // [1, 2, 3]

// Use in for...of
for (const value of myMap.values()) {
    console.log(value); // 1, 2, 3
}
```

### **entries()**
Returns an iterator object that contains [key, value] pairs for each element in the Map.

```javascript
const myMap = new Map([
    ["x", 10],
    ["y", 20],
    ["z", 30]
]);

const entriesIterator = myMap.entries();
console.log(entriesIterator.next().value); // ["x", 10]
console.log(entriesIterator.next().value); // ["y", 20]
console.log(entriesIterator.next().value); // ["z", 30]

// Convert to array
const entriesArray = [...myMap.entries()]; // [["x", 10], ["y", 20], ["z", 30]]

// Destructuring in for...of
for (const [key, value] of myMap.entries()) {
    console.log(`${key}: ${value}`); // "x: 10", "y: 20", "z: 30"
}
```

### **@@iterator (Symbol.iterator)**
Makes Map iterable in for...of loops. Default iterator is same as entries().

```javascript
const myMap = new Map([
    ["name", "Alice"],
    ["age", 25],
    ["city", "Paris"]
]);

// for...of loop (same as entries())
for (const [key, value] of myMap) {
    console.log(`${key}: ${value}`); // "name: Alice", "age: 25", "city: Paris"
}

// Spread operator
const mapEntries = [...myMap]; // [["name", "Alice"], ["age", 25], ["city", "Paris"]]

// Array.from()
const mapArray = Array.from(myMap); // [["name", "Alice"], ["age", 25], ["city", "Paris"]]
```

## **Practical Examples**

### **Frequency Counter**
```javascript
function countFrequency(array) {
    const frequencyMap = new Map();
    
    for (const item of array) {
        frequencyMap.set(item, (frequencyMap.get(item) || 0) + 1);
    }
    
    return frequencyMap;
}

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
console.log(countFrequency(fruits));
// Map {"apple" => 3, "banana" => 2, "orange" => 1}
```

### **Cache/Memoization**
```javascript
function createMemoizedFunction(fn) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            console.log("Cache hit!");
            return cache.get(key);
        }
        
        console.log("Computing...");
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

const fibonacci = createMemoizedFunction(function(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(10)); // Computing... 55
console.log(fibonacci(10)); // Cache hit! 55
```

### **Object Key Mapping**
```javascript
function createObjectIndex(objects, keyProperty) {
    const index = new Map();
    
    for (const obj of objects) {
        index.set(obj[keyProperty], obj);
    }
    
    return index;
}

const users = [
    {id: 1, name: "Alice", email: "alice@example.com"},
    {id: 2, name: "Bob", email: "bob@example.com"},
    {id: 3, name: "Charlie", email: "charlie@example.com"}
];

const userIndex = createObjectIndex(users, "id");
console.log(userIndex.get(2)); // {id: 2, name: "Bob", email: "bob@example.com"}
```

### **Two-Way Mapping**
```javascript
class BiDirectionalMap {
    constructor() {
        this.forward = new Map();
        this.reverse = new Map();
    }
    
    set(key, value) {
        this.forward.set(key, value);
        this.reverse.set(value, key);
    }
    
    getByKey(key) {
        return this.forward.get(key);
    }
    
    getByValue(value) {
        return this.reverse.get(value);
    }
    
    deleteByKey(key) {
        const value = this.forward.get(key);
        this.forward.delete(key);
        this.reverse.delete(value);
    }
    
    deleteByValue(value) {
        const key = this.reverse.get(value);
        this.reverse.delete(value);
        this.forward.delete(key);
    }
}

const biMap = new BiDirectionalMap();
biMap.set("user1", "Alice");
biMap.set("user2", "Bob");

console.log(biMap.getByKey("user1")); // "Alice"
console.log(biMap.getByValue("Alice")); // "user1"
```

### **Converting Map to Object and Vice Versa**
```javascript
// Map to Object
function mapToObject(map) {
    const obj = {};
    for (const [key, value] of map) {
        obj[key] = value;
    }
    return obj;
}

// Object to Map
function objectToMap(obj) {
    return new Map(Object.entries(obj));
}

const myMap = new Map([["a", 1], ["b", 2], ["c", 3]]);
const myObj = {x: 10, y: 20, z: 30};

console.log(mapToObject(myMap)); // {a: 1, b: 2, c: 3}
console.log(objectToMap(myObj)); // Map {"x" => 10, "y" => 20, "z" => 30}
```

## **Performance Characteristics**

| Operation | Time Complexity | Notes |
|-----------|----------------|-------|
| set() | O(1) average | O(n) worst case |
| get() | O(1) average | O(n) worst case |
| has() | O(1) average | O(n) worst case |
| delete() | O(1) average | O(n) worst case |
| clear() | O(n) | Must remove all elements |
| size | O(1) | Property access |

## **Map vs Object Comparison**

| Feature | Map | Object |
|---------|-----|--------|
| Key types | Any type | String/Symbol only |
| Size | map.size | Object.keys(obj).length |
| Iteration | Guaranteed order | Insertion order (ES2015+) |
| Default keys | None | Prototype keys |
| Performance | Optimized for frequent additions/removals | Optimized for property access |
| Serialization | No direct JSON support | JSON.stringify() |

## **Map vs Object - When to Use**

### **Use Map when:**
✅ Keys are unknown until runtime  
✅ Keys are same type and values are same type  
✅ Need non-string keys  
✅ Frequent addition/removal of key-value pairs  
✅ Size needs to be tracked  
✅ Need to iterate in insertion order  

### **Use Object when:**
✅ Working with records/configurations  
✅ Need JSON serialization  
✅ Working with logic/functions as values  
✅ Keys are known string literals  
✅ Need property access syntax (obj.prop)  

## **Browser Support**
Map is supported in all modern browsers:
- Chrome 38+
- Firefox 13+
- Safari 8+
- Edge 12+
- IE 11+

## **Common Gotchas**

```javascript
// 1. Object keys are converted to strings
const obj = {};
obj[1] = "number";
obj["1"] = "string";
console.log(obj[1]); // "string" (overwritten!)

const map = new Map();
map.set(1, "number");
map.set("1", "string");
console.log(map.get(1)); // "number"
console.log(map.get("1")); // "string"

// 2. Object reference equality
const key1 = {id: 1};
const key2 = {id: 1};
const map2 = new Map();
map2.set(key1, "value1");
console.log(map2.get(key2)); // undefined (different references)

// 3. Map is not directly JSON serializable
const mapData = new Map([["a", 1], ["b", 2]]);
console.log(JSON.stringify(mapData)); // "{}" (empty)
// Convert to array first: JSON.stringify([...mapData])
```