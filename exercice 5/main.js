let a = "jean"
let b = "paul"
let result

function checkName(firstName,secondName) {
    if (firstName == secondName){
        return true
} else {
    return false
}
}

result = checkName(a, b)
console.log(result)