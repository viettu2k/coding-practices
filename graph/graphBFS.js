// Directions
/* Given an undirected graph of integers "graph", represented
by an adjacency list, and an integer "root", create a
function that prints its values in breadth first search, 
by considering the vertex whose value is "root" as the arbitrary node*/

// Time complexity: O(|V|+|E|)
// Space complexity: O(|V|)
function bfs(graph, root) {
    let queue = [root];
    let visited = new Set([root]);
    let i = 0;
    while (i < queue.length) {
        let vertex = queue[i++];
        console.log(vertex);
        for (let neighbor of graph.adjList[vertex]) {
            if (!visited.has(neighbor)) {
                queue.push(neighbor);
                visited.add(neighbor);
            }
        }
    }
}