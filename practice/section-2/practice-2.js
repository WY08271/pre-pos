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
      var string = [];
      string = collection[i].split('-') ;
      result.push({key:string[0],count:string[1]});
    }      
}
console.log(result);
  return result;
}
