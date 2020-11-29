// 匹配 ababcde 具有自重复字符串
function match(string){
    let state = start
    for(let c of string){
        state = state(c)
    }

    if(state === end)
        return true
    else
        return false
}

function start(c){
    if(c === 'a'){
        return foundA
    }else{
        return start
    }
}

function foundA(c){
    if(c === 'b')
        return foundB
    else
        return start(c)
}

function foundB(c){
    if(c === 'c')
        return foundC
    else
        return start(c)
}

function foundC(c){
    if(c === 'd')
        return foundD
    else
        return start(c)
}

function foundD(c){
    if(c === 'e')
        return end
    else
        return start(c)
}

function end(c){
    return end
}

console.log(match('ababcdefgh'))
console.log(match('abcabx'))