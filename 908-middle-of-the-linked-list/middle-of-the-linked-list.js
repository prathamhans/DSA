
var middleNode = function(head) {
    let counter=0
    let curr = head
    
    while(curr!=null){
        counter+=1
        curr= curr.next
    }
    let middle = Math.floor(counter / 2)+1

    curr = head
     while(curr!=null){
       middle= middle-1
       if(middle==0){
             return curr
       }
        curr= curr.next
    }
    return 0
};