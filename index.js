function linkedList(startValue) {
  const list = node(startValue);

  function append(value) {
    let currentVal = this.list;
    while (currentVal.nextNode !== null) {
      currentVal = currentVal.nextNode;
    }
    currentVal.nextNode = node(value);
  }

  function prepend(value) {
    let newHead = node(value, this.list);
    this.list = newHead;
  }

  function size() {
    let counter = 1;
    let currentNode = this.list;
    while (currentNode.nextNode !== null) {
      counter += 1;
      currentNode = currentNode.nextNode;
    };
    return counter;
  }

  function head() {
    console.log(this.list);
    return this.list;
  }

  return { list, append, prepend, size, head };
}

function node(value = null, nextNode = null) {
  return { value, nextNode };
}

let newList = linkedList("Ahoj ");
newList.append("ty ");
newList.append("kral.");
newList.prepend("Wow, ");
newList.size();
newList.head();

// console.log(newList);
