
function parimp(n) {
    if (n%2==0) {
        return 'par'
    } else {
        return 'impar'
    }
    
} 
let num = 15
let res = parimp(num)

console.log(`Ò número ${num} é ${res}.`)