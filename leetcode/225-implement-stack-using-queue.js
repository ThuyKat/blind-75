
var MyStack = function() {
    //implement stack with 2 queues? means internally use 2 queues 
    //both are push to back, but pop queue is from front, so I need to pop queue until I find it? otherway is stack is sorted in 1 order, queue should be sorted in opposite order. Lets say 1 then 2, queue should sort it like 2 then 1, so when I pop it , 2 goes first. 
    this.arr1=[]
    this.arr2=[]
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    //push to top of stack
    this.arr1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    //return top element but remove that also from current stack
    while(this.arr1.length>1){
        this.arr2.push(this.arr1.shift())
    }
    let result = this.arr1.shift()
    while(this.arr2.length>0){
        this.arr1.push(this.arr2.shift())
    }
    return result
    
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    //return top element
    while(this.arr1.length>1){
        this.arr2.push(this.arr1.shift())
    }
    const top= this.arr1[0]
    this.arr2.push(this.arr1.shift())
    while(this.arr2.length>0){
        this.arr1.push(this.arr2.shift())
    }
    return top
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    //check if a stack is empty
    if(this.arr1.length==0 && this.arr2.length==0){
        return true
    }else{
        return false
    }
    
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */