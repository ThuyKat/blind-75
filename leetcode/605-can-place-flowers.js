/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    //plant n flowers in flowerbed without being adjacent
    // adj happens when we dont have enough empty spots on left and right of a spot. lets say 3 empty spots in middle, only 1 flower can be plant. so every 3 adjacent empty spots, we can plan 1 flower. Find the number of 3 adjacent empty spots. If there are 5 adjacent empty spots, we can plant 2 flowers.. this can be decided greedily from 3 positions: prev, curr, next when moving along the flowerbed array
    //Exception happens is when 2 adjacent empty spots are at beginning or ending, we can plant 1 flower there. Again this can be decided greedily like above. 
    let count =0
    for(let i=0;i<flowerbed.length;i++){
        if(flowerbed[i]==0){
            let prev = i-1>=0?flowerbed[i-1]:0
            let next = i+1<flowerbed.length? flowerbed[i+1]:0
            if(prev==0 && next==0){
                count++
                flowerbed[i]=1
            }
        } 
    }
    return count >=n
};
