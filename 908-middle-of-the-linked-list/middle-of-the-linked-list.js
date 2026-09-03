
var middleNode = function(head) {
    let counter=0
    let curr = head
    
    while(curr!=null){
        counter+=1
        curr= curr.next
    }
    let middle = Math.floor(counter / 2)+1

    let count=0
    curr = head
    let temp = 0
     while(curr!=null && count<middle){
       
        count+=1
        temp = curr
        curr= curr.next
    }
    return temp
};