/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function(arr) {
    function call(arr,mid){
        let max=-Infinity
        let index= 0
        for(let i=0;i<arr.length;i++){
            if(arr[i][mid]>max){
                max= arr[i][mid]
                index= i
            }
        }
        return index   
    }
    let l= 0
    let r= arr[0].length-1 //horizontal len nikalni h
    while(l<=r){
        let mid=Math.floor((l+r)/2) //coloumnumber
        let rownumber=  call(arr,mid) //to_get_max_element
        let left = (mid==0)? -Infinity : arr[rownumber][mid-1]
        let right = (mid==arr[rownumber].length-1)? -Infinity : arr[rownumber][mid+1]
        if(arr[rownumber][mid]>left && arr[rownumber][mid]>right){
            return [rownumber,mid]
        }else if(arr[rownumber][mid]<left){
            r= mid-1
        }else{
            l=mid+1
        }
    }
    return [-1,-1]
};