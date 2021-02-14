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
let encode = (message, code)=> {
    let messageCopyArray = [...message.split('')]
    let codeIndex = 0
    messageCopyArray.forEach((element, index) => {
        const convertedCharacter = convertCharcter(element, code[codeIndex%code.length])
        if(!!convertedCharacter){
            messageCopyArray[index] = convertedCharacter
            codeIndex = codeIndex+1
        }
    })
    return messageCopyArray.join('')
};

const decode = (message, code) => {
    let messageCopyArray = [...message.split('')]
    let codeIndex = 0
    messageCopyArray.forEach((element, index) => {
        const convertedCharacter = convertCharcter(element, code[codeIndex%code.length])
        if(!!convertedCharacter){
            messageCopyArray[index] = convertedCharacter
            codeIndex = codeIndex+1
        }
    })
    return messageCopyArray.join('')
}

console.log(decode(encodedMessageOne, decodeArrayOne))

console.log(decode(encodedMessageTwo, decodeArrayTwo))
