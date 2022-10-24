const bit = 8;
function convertToBin(num) {
  let arr = [num];
  while (num / 2 != 0) {
    num = Math.floor(num / 2);
    arr.push(num);
  }
  arr.pop();
  arr.reverse();
  let binaryDigs = arr.map((x) => x % 2 == 0 ? 0 : 1);
  return Number(binaryDigs.join(""));
}
for (let i = 0; i < 2 ** bit; i++) {
  if (i === 0 || i === 1) {
    console.log("0".repeat(bit - 1) + convertToBin(i));
    continue;
  }
  console.log("0".repeat(bit - convertToBin(i).toString().length) + convertToBin(i));
}
//# sourceMappingURL=index.js.map
