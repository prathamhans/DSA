
var searchMatrix = function(arr, target) {
        let m = arr[0].length
        let n = arr.length
    let l=0
    let r = (n*m) -1

    while(l<=r){
        let mid= Math.floor((l+r)/2)
        let row = Math.floor(mid/m)
        let col = Math.floor(mid%m)
        if(arr[row][col]== target) return true 
        if(arr[row][col]>target){
            r=mid-1
        }else{
            l= mid+1
        }
    }
    return false
};