function zipList(list1, list2) {
  const combine = [];
  for (let i = 0; i < list1.length; i++) {
    combine.push(list1[i], list2[i]);
  }
  return combine;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}
const letters = ['a', 'b', 'c'];
const nums = [1, 2, 3];

console.log(zipList(letters, nums));
console.log(zipListTheSimpleWay(letters, nums));
