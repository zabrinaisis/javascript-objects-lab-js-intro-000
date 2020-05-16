function updateObjectWithKeyAndValue(object, key, value) {
  var clone = Object.assign({}, object);
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

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
}
