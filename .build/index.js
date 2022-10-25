const bit = 5;
bit < 1 ? console.log("You should input bit value more than 0!") : drawTable();
function drawTable() {
  const Length = (value) => value.toString().length;
  const lastDec = 2 ** bit;
  const decStr = "Decimal", binStr = "Binary", HexStr = "Hex";
  const spaceLength = (value1, value2, splitMode = false) => Length(value2) > Length(value1) ? splitMode ? "" : Length(value2) - Length(value1) : "";
  const splitSpace = (value1, value2) => " ".repeat(spaceLength(value1, value2));
  console.log(decStr + splitSpace(lastDec, decStr, true) + "|", binStr);
  let decimal = 0;
  while (decimal < lastDec) {
    const Binary = decToBin(decimal);
    const Hex = decToHex(decimal);
    const decSpace = " ".repeat(spaceLength(decimal, lastDec));
    if (decimal === 0 || decimal === 1) {
      console.log(decSpace + decimal, splitSpace(lastDec, decStr) + "|", "0".repeat(bit - 1) + Binary);
      decimal++;
      continue;
    }
    console.log(decSpace + decimal, splitSpace(lastDec, decStr) + "|", "0".repeat(bit - Binary.length) + Binary);
    decimal++;
  }
}
function decToBin(decimal) {
  return parseInt(decimal.toString(), 10).toString(2);
}
function decToHex(decimal) {
  return parseInt(decimal.toString(), 10).toString(16);
}
//# sourceMappingURL=index.js.map
