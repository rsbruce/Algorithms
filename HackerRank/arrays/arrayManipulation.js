function arrayManipulation(n, queries) {
    let arr = new Array(n+1).fill(0);
    for(let i=0; i<queries.length; i++){
        arr[queries[i][0]-1] += queries[i][2]
        arr[queries[i][1]] -= queries[i][2]
    }
    let x=0
    let max=0
    for(let i=0;i<=n;i++)
    {
       x=x+arr[i];
       if(max<x) max=x;

    }
    return max
}