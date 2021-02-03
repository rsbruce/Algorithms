function rotLeft(a, d) {
    d = d % a.length
    let temp
    for(let i=1; i<=d; i++){
        temp = a[0]
        a.push(temp)
        a.splice(0, 1)
    }

return a
}