
// var reverseList = function(head) {
//     if(head == null) return null
//    let curr= head
//    let stack=[]
//    while(curr!= null){
//     stack.push(curr)
//     curr= curr.next
//    } 
//    let newhead = stack.pop()
//    let start= newhead
//    while(stack.length>0){
//     let nextnode = stack.pop()
//     newhead.next= nextnode
//     newhead = nextnode
//    }

//     newhead.next = null
//    return start
   
// };





var reverseList = function(head) {
    let previous =  null
    let current  = head
    while(current!=null){
        let storedata= current.next 
        current.next =previous
        previous= current 
        current = storedata 
    }

    return  previous
   
};










