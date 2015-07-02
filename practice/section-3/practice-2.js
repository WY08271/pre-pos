function create_updated_collection(collection_a, object_b) {
var collection_b = object_b.value;
var  value ;
var result = [];
for(var i = 0; i < collection_a.length; i++)
{
	value = collection_a[i].key;
	var temp = 0;
	var reduce = 0;
	for(var k = 0; k < collection_b.length; k++)
	{
		if(value == collection_b[k] )
			if( collection_a[i].count >= 3)
			{
				temp = 1;
				reduce = parseInt(collection_a[i].count / 3);
			}
	}
	if(temp == 1)
	{
		result.push({key:collection_a[i].key,count:(collection_a[i].count - reduce)});
	}
	else if(temp == 0)
		result.push({key:collection_a[i].key,count:collection_a[i].count});
}
return result;
}
