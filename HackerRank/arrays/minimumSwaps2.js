function minimumSwaps(arr) {
let count = 0

    for(let i=0; i<arr.length; i++){
        if(arr[i] != i+1){
            swap(i)
            i = -1;
        }
        
    }

    function swap(i){
        count++
        let temp = arr[i]
        arr[i] = arr[temp - 1]
        arr[temp - 1] = temp
    }

return count
}