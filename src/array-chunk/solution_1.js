module.exports = function array_chunk(array, size) {
  if (array.length === 0) {
    return [];
  } else if (size >= array.length) {
    return [array];
  }

  let returnArray = [];
  let chunkArray = [];

  for (let i = 0; i < array.length; i++) {
    chunkArray.push(array[i]);
    if (chunkArray.length === size) {
      returnArray.push(chunkArray);
      chunkArray = [];
    }
  }

  if (chunkArray.length > 0) {
    returnArray.push(chunkArray);
  }

  return returnArray;
};
