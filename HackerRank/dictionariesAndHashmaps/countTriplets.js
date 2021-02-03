function countTriplets(arr, r) {

    let singlets = {}
    let doublets = {}
    let ans = 0
    


    for(let i=0; i<arr.length; i++){
      
        //read me third
        if(doublets[arr[i]]){
            ans += doublets[arr[i]]
        }
        //when a value which completes a triplet is found, the number of triplets made is the sum of each preceding doublets' number of singlets
        //the reason that we check in this order is because for r=1, if we inserted it to singlets BEFORE checking singlets, we would get errors
        //as r=1, value*r = 1, which means that a value would become it's own doublet and then make a triplet out of itself!

        //read me second
        if(singlets[arr[i]]){
                if(!doublets[arr[i]*r]){
                    doublets[arr[i]*r] = singlets[arr[i]]
                } else {
                    doublets[arr[i]*r] += singlets[arr[i]]
                }
                     
        }
        //if the current value is found in singlets, we repeat the process
        //we know how many singlets trail behind that doublet, which is the number of triplets that will be made if doubletValue*r is found
        //i.e. if there is a doublet of value 4 with three preceding singlets, three triplets will be made on the next 8 found 
    
        //read me first
        if(!singlets[arr[i]*r]){
            singlets[arr[i]*r] = 1
        } else {
            singlets[arr[i]*r]++
        }
        //singlets is a hash map which counts instances of a value found so far but stores that value*r
        //this is so that if value*r is found later we can search for it in singlets
        //i.e. if we see a 2, we know that we need a 4 so we store 4 as a property and the value is the number of 2s found so far
        //this means that we know how many 2s precede any found 4 on a given iteration
    }
    return ans
    
}