/**
 * @param {number} k
 * @param {number[]} nums
 */
let k=7
let nums=[-10,1,3,1,4,10,3,9,4,5,1]
var KthLargest = function(k, nums) {
    //kth highest test score from sorted nums of test score
    //return null
    //sort the heap?
    //size k of heap?  I just need k parent
    this.nums = nums
    this.k = k
    this.shift_down = function(parent){
        while(true){
            let left = 2*parent+1
            let right = 2*parent+2
            let min = parent
            if(left<this.nums.length && this.nums[min]>this.nums[left]){
                min = left
            }
            if(right<this.nums.length && this.nums[min]>this.nums[right]){
                min = right
            }
            if(min==parent){
                break
            }
            [this.nums[parent],this.nums[min]]=[this.nums[min],this.nums[parent]]
            parent = min
        }
    }
    let start = Math.floor((this.nums.length-2)/2)
    for(let i=start;i>=0;i--){
        let parent = i
        this.shift_down(parent)
    }
    console.log("heapified nums",this.nums)
     
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    //new score added
    // return new kth highest continuously
    this.nums.push(val)
    //bubple up
    let idx = this.nums.length-1
    while(idx>0){
        let parent = Math.floor((idx-1)/2)
        if(this.nums[idx]>this.nums[parent]){
            break
        }
        [this.nums[parent],this.nums[idx]] = [this.nums[idx],this.nums[parent]]
        idx = parent
    }
    //pop until size k 
    while(this.nums.length>this.k){
        let last_index = this.nums.length -1;
        [this.nums[0], this.nums[last_index]] = [this.nums[last_index], this.nums[0]]
        this.nums.pop()
        this.shift_down(0) 
    }
    return this.nums[0]       
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
let obj = new KthLargest(k, nums)
let param_1 = obj.add(3)
console.log("result",param_1)