function create_updated_collection(collection_a, object_b) {
 var collection_c =[];
  var count = 1;
  for(var i = 0; i < collection_a.length; i++)
  {
    count = createOne(i,collection_a,count);
  	collection_c.push({key:collection_a[i],count:count});
  	count = 1;
  }
var collection_b = object_b.value;
var  value ;
var result = [];
for(var i = 0; i < collection_c.length; i++)
{
	value = collection_c[i].key;
	createTwo(collection_b,value,collection_c[i],result);
}
return result;
}
function createOne(i,collection_a,count){
  	for(var j = i + 1; j < collection_a.length; j++)
  	{
  		if(collection_a[i] == collection_a[j])
  		{
  			count++;
  			collection_a.splice(j,1);
  			j--;
  		}
  	}
  	return count;	
}
function createTwo(collection_b,value,collection_c,result){
	var temp = 0;
	var reduce = 0;
	for(var k = 0; k < collection_b.length; k++)
	{
		if(value == collection_b[k] )
			if( collection_c.count >= 3)
			{
				temp = 1;
				reduce = parseInt(collection_c.count / 3);
			}
	}
	if(temp == 1)
	{
		result.push({key:collection_c.key,count:(collection_c.count - reduce)});
	}
	else if(temp == 0)
	{
		result.push({key:collection_c.key,count:collection_c.count});
	}
}
