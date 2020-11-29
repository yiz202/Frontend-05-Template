function match(str){
    for (let i = 0; i < str.length-1;i++){
        if (str[i] === 'a' && str[i+1] === 'b') {
            return true
        }
    }
    return false
}
console.log(match('njknsab'))

