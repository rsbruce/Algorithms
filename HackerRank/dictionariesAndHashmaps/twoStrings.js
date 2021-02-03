function twoStrings(s1, s2) {
    //if there is a common substring (i.e. any matching characters) return "YES" else "NO"
    //"common substring" really just means common character
    //sort strings into alapabetical order
    //if the inspected element of one string is alphabetically before (i.e. less than) the other, move onto next element
    //if there is a common string return yes
    //if while loop completes return no

    s1 = s1.split('').sort()
    s2 = s2.split('').sort()
        let s1_i = 0;
        let s2_i = 0;
        while (s1_i < s1.length
               && s2_i < s2.length)
        {
            if (s1[s1_i] === s2[s2_i]) {
                return "YES"
            }
            else if(s1[s1_i] < s2[s2_i]) {
                s1_i++;
            }
            else {
                s2_i++;
            }
        }
        return "NO";
    }