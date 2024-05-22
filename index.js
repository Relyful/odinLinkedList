function linkedList(startValue) {
  const list = node(startValue);

  function append(value) {
    let currentVal = this.list;
    while (currentVal.nextNode !== null) {
      currentVal = currentVal.nextNode;
    }
    currentVal.nextNode = node(value);
  }

  return { list, append };
}

function node(value = null, nextNode = null) {
  return { value, nextNode };
}

let newList = linkedList("Ahoj ");
newList.append("ty ");
newList.append("kral.");

console.log(newList);
