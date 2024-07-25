var hash = "#";
var space = "_";
for (var i = 0; i < 8; i++) {
  hash += "\n";
// console.log("\n")
  for (var j = 0; j < 8; j++) {
    if ((i + j) % 2 == 0) {
      hash += space;
    } else {
      hash += "#";
    }
  }
}

console.log(hash);
