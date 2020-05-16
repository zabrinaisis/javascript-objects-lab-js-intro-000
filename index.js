function updateObjectWithKeyAndValue(object, key, value) {
  var clone = object;
  clone[key] = value;
  return (clone)
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
}

function deleteFromObjectByKey(object, key) {
  var clone = object;
  delete clone[key];
  return (clone)
}