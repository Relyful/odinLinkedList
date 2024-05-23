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
    }
    return counter;
  }

  function head() {
    return this.list;
  }

  function tail() {
    let lastNode = this.list;
    while (lastNode.nextNode !== null) {
      lastNode = lastNode.nextNode;
    }
    return lastNode;
  }

  function at(index) {
    let currIndex = 0;
    let currNode = this.list;

    if (index === 0) {
      console.log(this.list);
      return this.list;
    }

    while (currIndex !== index) {
      if (currNode.nextNode === null) {
        console.log('out of bounds');
        return undefined;
      }
      currIndex += 1;
      currNode = currNode.nextNode;
    }
    console.log(currNode);
    return currNode;
  }

  return { list, append, prepend, size, head, tail, at };
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
newList.tail();
newList.at(5); 

// console.log(newList);
