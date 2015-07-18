function collect_same_elements(collection_a, collection_b) {
  var result = [];
  for(var i = 0 ; i < collection_a.length ; i ++)
  {
  	collectOne(collection_a[i],collection_b,result);
  }
  console.log(result);
  return result;
}
function collectOne(collection_a, collection_b,result){
  for(var k = 0 ; k < collection_b.length ; k ++)
    {
      for(var x = 0; x < collection_b[k].length ; x ++)
        if (collection_b[k][x] == collection_a)
      {
        result.push(collection_a); 
      }
    }
  }