/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if(numRows==1){
    return [[1]]
  }
  if(numRows==2){
    return[[1],[1,1]]
  }
  if(numRows>2){ //3
    let result = generate(numRows-1) //generate(2) => [[1],[1,1]]
    let lastEl = result[numRows-2] //result[1] => [1,1]
    let newEl =[1]
    for(let i=0;i<lastEl.length-1;i++){
        newEl.push(lastEl[i]+lastEl[i+1])
    }
    newEl.push(1)
    result.push(newEl)
    return result
  }
};
