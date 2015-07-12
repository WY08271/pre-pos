function count_same_elements(collection) {
  var result =[];
  var count = 1;
for(var i = 0; i < collection.length; i++)
{
    if(collection[i].length < 2)
    {
    for(var j = i + 1; j < collection.length; j++)
    {
      if(collection[i] == collection[j])
      {
        count++;
        collection.splice(j,1);
        j--;
      }
    }
    result.push({key:collection[i],count:count});
    count = 1;
    }
    else
    {  
      var string = collection[i];
      for(var i = 0; i < string.length; i ++)
      {
        if(string[i] == 5)
        {
          result.push({key:collection[i],count:string[i]});
        }
      } 
    }
}
  return result;
}
