function create_updated_collection(collection_a, object_b) {
  var collection_c =[];
  var count = 1;
for(var i = 0; i < collection_a.length; i++)
{
    if(collection_a[i].length < 2)
    {
    for(var j = i + 1; j < collection_a.length; j++)
    {
      if(collection_a[i] == collection_a[j])
      {
        count++;
        collection_a.splice(j,1);
        j--;
      }
    }
    collection_c.push({key:collection_a[i],count:count});
    count = 1;
    }
    else
    {  
      var string = [];
      string = collection_a[i].split('-') ;
      collection_c.push({key:string[0],count:string[1]});
    }      
}
var collection_b = object_b.value;
var  value ;
var result = [];
for(var i = 0; i < collection_c.length; i++)
{
	value = collection_c[i].key;
	var temp = 0;
	var reduce = 0;
	for(var k = 0; k < collection_b.length; k++)
	{
		if(value == collection_b[k] )
			if( collection_c[i].count >= 3)
			{
				temp = 1;
				reduce = parseInt(collection_c[i].count / 3);
			}
	}
	if(temp == 1)
	{
		result.push({key:collection_c[i].key,count:(collection_c[i].count - reduce)});
	}
	else if(temp == 0)
		result.push({key:collection_c[i].key,count:collection_c[i].count});
}
return result;
}
