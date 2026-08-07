var deleteNode = function(node) {
    let nex = node.next.next
    node.val = node.next.val
    node.next= nex
};