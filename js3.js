// const obj = {
//   a: 1,
//   b: 2,
// };
const thinks = {
  da: 1,
  ba: 2,
  obh: {
    r: 3,
    f: 5,
  },
};
// const obj2 = {};
// let value;
// for (value in thinks) {
//   obj2[value] = thinks[value];
// }
// const obj3 = { ...obj, ...thinks };
// obj2.da = 4;
// obj3.obh.r = 19;
// console.log(obj3);
// console.log(thinks);

const oldArr = [1, 4, 6, 5];

// const newArr = oldArr.slice();
// newArr[2] = 222234566;
// new2Arr=[...oldArr, ...newArr]
// console.log(oldArr);
// console.log(newArr);
// new2Arr[0] = '000'
// console.log(new2Arr);

function g(a, b, s, d) {
  console.log(a);
  console.log(b);
  console.log(s);
  console.log(d);
}

const newObj12 = { oldArr, ...thinks };
console.log(newObj12);
