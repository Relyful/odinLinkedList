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
      return this.list;
    }

    while (currIndex !== index) {
      if (currNode.nextNode === null) {
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
    currNode.nextNode = null;
    return;
  }

  function contains(value) {
    let target = value;
    let currNode = this.list;
    if (currNode.value === target) {
      return true;
    }
    while (currNode.nextNode !== null) {
      currNode = currNode.nextNode;
      if (currNode.value === target) {
        return true;
        // in case linked list is size 0 and we cannot set nextNode
      } else if (currNode.nextNode === null) {
        return false;
      }
    }
    return false;
  }

  function find(value) {
    let currNode = this.list;
    const listSize = this.size();

    for (let i = 0; i < listSize; i++) {
      if (currNode.value === value) {
        return i;
      } else {
        currNode = currNode.nextNode;
      }
    }
    return null;
  }

  return { list, append, prepend, size, head, tail, at, pop, contains, find };
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
newList.contains("Ahoj ");
console.log(newList.find("ty"))
// console.log(newList);
