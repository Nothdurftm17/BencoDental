function getMin(s) {

    var count = 0
    
    for(var i = 0; i < s.length;i++){
        if (s[i] === "(") {
            count++
        }
        else {
            count--
        }
    }

    count = Math.abs(count)
    return count

}

console.log(getMin("(()))"))

