function maxSubsetSum(arr) {
    let len = arr.length
    let dp = Array(len).fill(0)
    dp[0] = arr[0];
    dp[1] = Math.max(arr[1], dp[0])
    for (let i = 2; i < arr.length; i++) { 
        dp[i] = Math.max(arr[i], dp[i - 1], arr[i] + dp[i - 2])
        //classic DP problem. As elements cannot be adjacent, the highest possible total will always be the maximum of these three cases
    }
    return dp[arr.length-1]    
}