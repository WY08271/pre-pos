function collect_same_elements(collection_a, collection_b) {
var result = [];
  for(var i = 0 ; i < collection_a.length ; i ++)
  {
  	for(var k = 0 ; k < collection_b.length ; k++)
  	{
  		if (collection_b[k] == collection_a[i])
  		{
  			result.push(collection_a[i]); 
  		}
  	}
  }
  console.log(result);
  return result;
}

