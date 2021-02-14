let encodedMessageOne = "Ddo'u zbjw up vff bpv pjog jg l cpuspz uih dbu bhdjo? - f"
let decodeArrayOne = [-1,-3,-1];

let encodedMessageTwo = "enfxiti. wpwh px wlve qysa ys, dmtosua cobv osh mhr iu xhl aaf - g" 
let decodeArrayTwo = [-4,0,-7];

let isCharacter = /[a-zA-Z]/i
const convertCharcter = (character, shiftAmount) => {
    if(isCharacter.test(character)){
        let newCode =character.toLowerCase().charCodeAt(0)+shiftAmount
        if(newCode>122){
            newCode = newCode%122+96
        }
        if(newCode<96){
            newCode = newCode + 26
        }
        return String.fromCharCode(newCode)
    }
    return null
}

const cipher = (message, code, direction) => {
    let messageCopyArray = [...message.split('')]
    let codeCopy = code.map(value => direction == "decode"? value: value*-1)
    let codeIndex = 0
    messageCopyArray.forEach((element, index) => {
        const convertedCharacter = convertCharcter(element, codeCopy[codeIndex%codeCopy.length])
        if(!!convertedCharacter){
            messageCopyArray[index] = convertedCharacter
            codeIndex = codeIndex+1
        }
    })
    return messageCopyArray.join('')
}

console.log(cipher(encodedMessageOne, decodeArrayOne, "decode"))

console.log(cipher(encodedMessageTwo, decodeArrayTwo, "decode"))
