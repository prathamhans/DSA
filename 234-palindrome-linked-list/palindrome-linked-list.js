// var isPalindrome = function(head) {
//     let curr= head
//     let stack=[]
//     while(curr!=null){
//         stack.push(curr.val)
//         curr= curr.next
//     }
//     curr= head
//     while(curr!=null){
//          if(curr.val!=stack[stack.length-1]){
//             return false
//          }
//         curr= curr.next
//         stack.pop()
//     }
   
//     return true
// };
var isPalindrome = function(head) {
    let slow=head
    let fast = head
   while(fast.next!=null && fast.next.next!=null ){
    slow=slow.next
    fast = fast.next.next
   }
   
   let secondhead= slow.next
   let current=  secondhead
   let prev=null
   while(current!=null){
    let store = current.next
    current.next= prev
    prev= current
    current= store
   }
   let curr=head
  while(prev != null && curr!=null){
     if(prev.val !=curr.val){
    return false
   }
    curr=curr.next
    prev= prev.next
  }
  return true
};