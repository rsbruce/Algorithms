function hourglassSum(arr) {
    let ans = 0
    let temp
        for(let i=0; i<4; i++){
            for(let j=0; j<4; j++){
                temp = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]  
              
                if(i==0 && j==0){
                    ans = temp
                }
              
                if (temp>ans){
                    ans=temp
                }
                console.log(arr[i][j])
            }
        }
        return ans
    }