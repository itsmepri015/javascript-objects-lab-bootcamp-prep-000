
var recipes = { 
  key: 'value',
  
};


function updateObjectWithKeyAndValue(recipes, key, value)
{
  return Object.assign({}, recipes,{[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value)
{
 object[key]=value
 
 return object;
}

function deleteFromObjectByKey(object, key)
{
  delete object.key
  return object
}

function destructivelyDeleteFromObjectByKey(object, key)
{
  delete object[key]
 
 return object;
  
}