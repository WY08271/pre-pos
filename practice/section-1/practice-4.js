function collect_same_elements(collection_a, object_b) {
  var result = [];
  var complete = object_b.value ;
  for(var i = 0 ; i < collection_a.length ; i ++)
  {
  	collectOne(complete,result,collection_a[i]);
  }
  console.log(result);
  return result;
}
function collectOne(complete,result,collection_a){
  for(var k = 0 ; k < complete.length ; k++)
    {
      if (complete[k] == collection_a.key)
      {
        result.push(collection_a.key); 
      }
    }
}
