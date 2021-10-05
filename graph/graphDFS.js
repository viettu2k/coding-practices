// Directions
/* Given an undirected graph of integers "graph", represented
by an adjacency list, and an integer "root", create a 
function that prints its values in depth first search,
by considering the vertex whose value "root" as the arbitrary node */

// Time complexity: O(|V|+|E|)
// Space complexity: O(|V|)
function dfs(graph, root, visited = new Set()) {
    if (visited.has(root)) return;
    else {
        console.log(root);
        visited.add(root);
        for (let neighbour of graph.adjList[root]) dfs(graph, neighbour, visited);
    }
}