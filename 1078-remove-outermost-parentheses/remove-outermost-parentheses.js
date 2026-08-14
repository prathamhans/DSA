/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let ans = ''
    let depth= 0
    for(let i =0; i <s.length;i++){
        if(s[i]==')'){
            depth--
        }
        if(depth>0){
            ans+=s[i]
        }
        if(s[i]=='('){
            depth++
        }
    }
    return ans
};