const bit = 8 //input value of bit here

function convertToBin(num: number){
  let arr = [num];
  while(num / 2 != 0) {
    num = Math.floor(num / 2);
    arr.push(num);
  }
  arr.pop();
  arr.reverse();
  let binary = arr.map(x => x % 2 == 0 ? 0: 1);
  return Number(binary.join(''))
}
for (let i = 0; i < 2 ** bit; i++) {
  if (i === 0 || i === 1) {
    console.log("0".repeat(bit - 1) + convertToBin(i))
    continue
  }
  console.log("0".repeat(bit - convertToBin(i).toString().length) + convertToBin(i))
}