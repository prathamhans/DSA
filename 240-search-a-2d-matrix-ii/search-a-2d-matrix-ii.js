/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(arr, target) {
    let row=0
    let col = arr[0].length -1
    while(row<arr.length && col>=0){
        if(arr[row][col] == target) return true
        if(arr[row][col]<target){
            row++
        }else{
            col--
        }
    }
return false
};