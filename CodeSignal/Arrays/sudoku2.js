function sudoku2(grid) {
    //each row and column can contain only one instance of a number
    //each 3x3 sub grid can contain only one instance of a number
    
        let xIndex = Array(10).fill(null)
        let yIndex = Array(10).fill(null)
    
        //row and column checker
        //every element must be inspected if there is no early exit
        for(let i=0; i<9; i++){
           for(let j=0; j<9; j++){
               if(grid[i][j] != "."){
                    if(xIndex[grid[i][j]] === null){
                     xIndex[grid[i][j]] = [i];
                    } else if(xIndex[grid[i][j]].includes(i)){
                        return false
                        //log every x index of each value
                        //if ever there is a duplicate, early exit
                    }
                        else {
                        xIndex[grid[i][j]].push(i)
                    }

                    if(yIndex[grid[i][j]] === null){
                        yIndex[grid[i][j]] = [j];
                    } else if(yIndex[grid[i][j]].includes(j)){
                        return false
                        //log every x index of each value
                        //if ever there is a duplicate, early exit
                    }
                        else {
                        yIndex[grid[i][j]].push(j)
                    }           
                } 
            }
               
           if (!squareChecker((i % 3)*3, (Math.floor(i/3))*3 )){
               console.log("squareChecker")
               return false
           }
           //in the for loop, we may as well check each subsquare as there are 9 of them
           //i: 0 3 6 0 3 6 0 3 6
           //j: 0 0 0 3 3 3 6 6 6
           
        }
        
        return true
        
        
        
        function squareChecker (x,y){
            //checks for duplicates in a square whose top right element is at x,y
            let arr = []
            for(let i=0; i<3; i++){
                for(let j=0; j<3; j++){
                    if(grid[x+i][y+j] != "."){
                        if(arr[grid[x+i][y+j]]){
                            return false
                            //duplicate in square, early exit
                        } else {
                            arr[grid[x+i][y+j]] = true
                        }  
                    }  
                }
            }
            return true
        }
    }