let testFunc =function(n,k){
  var flag=false;
  n.forEach(function(item,index){
    if(item==k && index%2===0){
      flag= true;    
    }
    
  });
  return flag;
}
 const testar=[123, 92, 32, 13, 12, 10, 9, 2, 1];
  
console.log(testFunc(testar,32));
