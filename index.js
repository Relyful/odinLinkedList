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
    console.log(lastNode);
    return lastNode;
  }

  function at(index) {
    let currIndex = 0;
    let currNode = this.list;

    if (index === 0) {
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
    return currNode;
  }

  function pop() {
    let listSize = this.size();
    let counter = 1;
    let currNode = this.list;

    while (counter !== listSize - 1) {
      currNode = currNode.nextNode;
      counter += 1;
    }
    console.log('Popped: ' + currNode.nextNode.value);
    currNode.nextNode = null;
    return;
  }

  return { list, append, prepend, size, head, tail, at, pop };
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
newList.at(0); 
newList.pop();
newList.tail();

// console.log(newList);
