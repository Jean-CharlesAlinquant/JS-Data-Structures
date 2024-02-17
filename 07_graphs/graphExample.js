class Graph {
    constructor() {
        this.nodes = 0;
        this.adjacencyList = {};
    }

    addVertex(node) {
        this.adjacencyList[node] = [];
        this.nodes++;
    }

    addEdge(node1, node2) {
        //undirected graph = 2 ways connection
        this.adjacencyList[node1].push(node2);
        this.adjacencyList[node2].push(node1);
    }

    showConnections() {
        const nodes = Object.keys(this.adjacencyList);
        for(let node of nodes) {
            const nodeConnections = this.adjacencyList[node];
            let connections = "";
            for(let vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + " --> " + connections);
        }
    }
}

//  3-----4-----5
//  |     |     |
//  1-----2     6
//   \   /
//     0

// adjacencyList = {
//   '0': [ '1', '2' ],
//   '1': [ '3', '2', '0' ],
//   '2': [ '4', '1', '0' ],
//   '3': [ '1', '4' ],
//   '4': [ '3', '2', '5' ],
//   '5': [ '4', '6' ],
//   '6': [ '5' ]
// }

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');
console.log(myGraph.adjacencyList);

myGraph.showConnections();
//Answer:
// 0 --> 1 2
// 1 --> 3 2 0
// 2 --> 4 1 0
// 3 --> 1 4
// 4 --> 3 2 5
// 5 --> 4 6
// 6 --> 5