/**
* function to get random value by ratio
* @param ratioValues array of value with ther ratio, value can be anything but ratio should be either a decimal or an array of integers
*                    marking a range
* @param precision base number of the ratio: by default it's in percent (100)
* @exemple getRandomByRatio([{v: 'a', r: 0.25},{v: 'b', r: 0.65},{v: 'c', r: 0.1}], 100)
*/
const getRandomByRatio = (ratioValues: Array<{v: any, r: number | Array<number>}>, precision: number = 100) => {
  const _tempRatio = [];
  ratioValues.map((item, index) => {
    if (!Array.isArray(item.r)) {
      if (ratioValues[index - 1]) {
        item.r = [ratioValues[index - 1].r[1] + 1, ratioValues[index - 1].r[1] + item.r * precision];
      } else {
        item.r = [0, item.r * precision];
      }
    }
    _tempRatio.push(item);
  });
  const _idx = Math.floor(Math.random() * (precision + 1));
  for (const _item of _tempRatio) {
    // test if _idx is within the r range
    if (_idx >= _item.r[0] && _idx <= _item.r[1]) {
      // if it is return our value
      return _item.v;
    }
  }
};
