var searchMatrix = function(arr, target) {
    let row=0
    let col= arr[0].length-1
    while(row<arr.length && col>=0){
        if(target == arr[row][col]) return true;

        if(target < arr[row][col]){
            col--
        } 
        if(target > arr[row][col]){
            row++
        }
    }
    return false
};