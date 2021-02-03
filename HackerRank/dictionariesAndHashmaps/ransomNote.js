function checkMagazine(magazine, note, m, n) {
    //magazine is an array of m strings
    //note is an array of n strings
    //If every element in note has a unique matching element in magazine log yes else no
    //sub-optimal solution, hashmap not necessary to pass but would optimise
    
    for(let i=0; i<n; i++){
        if (magazine.includes(note[i])){
            magazine.splice(magazine.indexOf(note[i]),1)
        } else {
            console.log("No")
            return
        }
    }
    
    console.log("Yes")
}