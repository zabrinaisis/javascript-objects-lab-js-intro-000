function updateObjectWithKeyAndValue(object, key, value) {
  var clone = object;
  clone[key] = value;
  return (clone)
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
}
