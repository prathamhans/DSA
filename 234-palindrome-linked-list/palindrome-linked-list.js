var isPalindrome = function(head) {
let slow= head
let fast= head
while(fast.next!=null  && fast.next.next!=null){
    slow= slow.next
    fast = fast.next.next
}
let newheadforsecondll= slow.next
let curr= newheadforsecondll
let prev= null
while(curr!=null){
    let store= curr.next
    curr.next = prev
    prev = curr
    curr= store
}
let oldcurrent= head
while(prev!=null  && oldcurrent!=null ){
    if(prev.val !=  oldcurrent.val){
        return false 
    }
    prev= prev.next
    oldcurrent= oldcurrent.next
}
return true
};