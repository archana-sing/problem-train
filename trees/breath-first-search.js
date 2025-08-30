class BinarySearchNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert (val) {
    const node = new BinarySearchNode(val);
    if (this.root === null) {
      this.root = node;
    } else {
      let currentNode = this.root;
      while (true) {
        if (val < currentNode.value) {
          if(currentNode.left === null) {
            currentNode.left = node;
            return;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if(currentNode.right === null) {
            currentNode.right = node;
            return;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  lookup(val) {
    if (!this.root) {
      return null;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === val) {
        return currentNode;
      } else if (val < currentNode.value) {
        currentNode = currentNode.left;
      } else if (val > currentNode.value) {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  breathFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);
    while (queue.length > 0) {
      let currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if(currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    console.log(list);
  }
}


const  traverse = (node) => {
  // console.log(node);
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const b1 = new BinarySearchTree();
b1.insert(9);
b1.insert(20);
b1.insert(4);
b1.insert(6);
b1.insert(1);
b1.insert(170);
b1.insert(15);
console.log(b1.lookup(170));
b1.breathFirstSearch();
//console.log(JSON.stringify(traverse(b1.root)));
