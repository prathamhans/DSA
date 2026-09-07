var reverseList = function(head) {
    if(head == null) return null
    let stack=[]
    let ttemp = head
    while(ttemp!=null){
        stack.push(ttemp)
        ttemp = ttemp.next
    }
    let newhead = stack.pop()
    temp = newhead
    while(stack.length>0){
        let node = stack.pop()
        temp.next= node
        temp = node
    }


    temp.next = null


    return newhead
};