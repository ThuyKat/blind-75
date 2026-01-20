/**
 * @param {string} s
 * @return {boolean}
 */
let s ="([])"
var isValid = function(s) {
    //open bracket must have close bracket in same order
    //FILO
    
    let open=[]
    for(let i=0;i<s.length;i++){
        if(s[i]=='('||s[i]=='{'||s[i]=='['){
            open.push(s[i])
        }else{
            let open_str = open.pop()
            console.log(open_str)
            if(open_str+s[i] =="()"||open_str+s[i] == "[]" || open_str+s[i] =="{}"){
                continue
            }else{
                return false
            }
        }
    }
    if(open.length>0){
        return false
    }
    return true
    
    
};
console.log(isValid(s))