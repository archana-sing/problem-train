class Graph {
  constructor () {
    this.numberOfNodes = 0;
    this.adjacentList = {}; // {1: [2,3] , 2: [1,3]}
  }

  addVertex (val) {
    this.adjacentList[val] = [];
    this.numberOfNodes++;
  }

  addEdge (node1, node2) {
    this.adjacentList[node1].push(node2); // directed graph
    // if undirect graph then 
    this.adjacentList[node2].push(node1); 
  }

  showGraph() {
    for(let key in this.adjacentList) {
      console.log(`${key} => ${[...this.adjacentList[key]]}`)
    }
  }
}

const g1 = new Graph();
g1.addVertex(0);
g1.addVertex(2);
g1.addVertex(1);
g1.addVertex(3);
g1.addEdge(0,2);
g1.addEdge(2,1);
g1.addEdge(2,3);
g1.addEdge(1,3);
g1.showGraph();