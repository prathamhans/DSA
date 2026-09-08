
var detectCycle = function(head) {
  let temp= head
  let map =new Map()  
  while(temp!=null){
    if(map.has(temp)){
        // let ans= map.get(temp)
        return temp
    }
    map.set(temp,true)
    temp= temp.next
  }
  return null
};