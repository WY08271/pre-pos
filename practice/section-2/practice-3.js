function count_same_elements(collection) {
	var arr=[];
	var flag = 0;
	for (var i = 0;i < collection.length; i ++)
	{
		if(collection[i].length == 1)
		{
		for (var j = 0;j < arr.length; j ++)
		{
				if( collection[i] == arr[j].name )
				{
					arr[j].summary++;
					flag=1;
					break;
				}
		}
		if(flag==0)
		{
			arr.push({name:collection[i],summary:1});
		}
		flag=0;
		}
		else
		{
			for (var j = 0; j < arr.length; j ++)
			{
					if(collection[i].charAt(0) == arr[j].name)
					{
						arr[j].summary += countOne(collection[i]);
						flag=1;
						break;
					}
					
			}
			if(flag==0)
			{
				arr.push({name:collection[i].charAt(0),summary:parseInt(collection[i].charAt(2))})
			}
			flag=0;
		}
			
	}
	return arr;
}
function  countOne(collection)
{
	var sum = 0;
	for(var temp = 0;temp < collection.length; temp++)
	{
		if(collection[temp] != ']')
		{
			sum++;
		}
		else 
		{
			break;
		}
			
	}
	return parseInt(collection.substr(2,2));
}