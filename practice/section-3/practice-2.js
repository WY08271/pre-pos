function create_updated_collection(collection_a, object_b) {
var collection_b = object_b.value;
var  value ;
var result = [];
for(var i = 0; i < collection_a.length; i++)
{
	value = collection_a[i].key;
	createOne(collection_b,value,collection_a[i],result);
}
return result;
}
function createOne(collection_b,value,collection_a,result){
	var temp = 0;
	var reduce = 0;
	for(var k = 0; k < collection_b.length; k++)
	{
		if(value == collection_b[k] )
			if( collection_a.count >= 3)
			{
				temp = 1;
				reduce = parseInt(collection_a.count / 3);
			}
	}
	if(temp == 1)
	{
		result.push({key:collection_a.key,count:(collection_a.count - reduce)});
	}
	else if(temp == 0)
	{
		result.push({key:collection_a.key,count:collection_a.count});	
	}	
}
