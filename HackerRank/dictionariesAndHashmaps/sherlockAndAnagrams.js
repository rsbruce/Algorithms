function sherlockAndAnagrams(s) {
    //1.a. find all combos of a string (sum of 1 to n combos)
    //1.b. these need to be sorted to check for equality
    //1.c. these need to be stored in a map which counts the number of instances of each anagram
    //2. generate hash map linking number of matching items and number of pairs (sum of 1 to i-1) - this is based on s.length - 1
    //3. reduce the combo map by extracting values in pair map and sum these
    
        let instancesToPairs = [0]
        function findCombos(k){
            let combo = ""
            for(let i=k; i<s.length; i++){
                combo += s[i]
                combo = combo.split('').sort()
                combo = combo.join('')
                if(!anagrams[combo]){
                    anagrams[combo] = 1
                } else {
                    anagrams[combo] += 1
                }
            }
        }
    
        let anagrams = {}
    
        for(let i=0; i<s.length; i++){
            //for very index, find all combos that start with that index
            findCombos(i)
            
            if(i!=0){
                instancesToPairs[i] = instancesToPairs[i-1] + i 
            }
        }
        let ans=0
        Object.keys(anagrams).forEach(key=>{
            ans+=instancesToPairs[anagrams[key]-1]
        })
        return ans
    }