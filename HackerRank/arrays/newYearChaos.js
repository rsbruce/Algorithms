function minimumBribes(q) {
        let n = q.length
        let count = 0
        let swapped = true
        while (swapped) {
            swapped = false
            for (let i=0; i<n-1; i++) {
                //iterate only up to the penultimate element as we consider current element and the one after it
                let init = q[i]
                if (init-i > 3) {
                    console.log('Too chaotic')
                    swapped = false
                    //end while loop
                    break
                    //end for loop
                    //if an element is more than 2 places ahead of where it should be we know it is too chaotic (3 bribes)
                } else if (init > q[i+1]) {
                    //if an element is of greater value than the element that is behind it in the queue, a swap has occurred
                    swapped = true
                    //this restarts the while loop to do another pass over the array to check if it is still out of order after this pass
                    count++
                    let temp = init
                    q[i] = q[i+1]
                    q[i+1] = temp
                    //swap the elements back and increment the ccunt of swaps occurred
                }
            }   
        }
        //if the while loop was completed then the array is either ordered or too chaotic
        if (i == n - 1) {
            //if we reach the end of the for loop the array is in order so print the count
            console.log(count)            
        }
        
}