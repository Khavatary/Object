export default function getArr(obj, order) {
  const arr = [];
  const temp = [];

  for (const prop in obj) {
    if (order.includes(prop)) {
      arr.push({
        key: prop,
        value: obj[prop],
      });
    } else {
      temp.push(prop);
    }
  }

  function getSort(array) {
    array.sort((a, b) => (a > b ? 1 : -1));
  }
  getSort(temp);

  for (let i = 0; i < temp.length; i += 1) {
    arr.push(
      { key: temp[i], value: obj[temp[i]] },
    );
  }
  return arr;
}
