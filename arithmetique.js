function divisionLinéaire(a,b,c,u,v){
    const result = b*u + c*v
    if(result % a === 0){
        console.log(`a = ${a}, b = ${b}, c = ${c}`);
        console.log(`${a} divise ${b} * ${u} + ${c} * ${v}`)
    }
}

divisionLinéaire(3,9,24,3,5)
// chercher tous les diviseur d'un nombre
function searchDiviserNumber(number){
    for(let diviseur = 1; diviseur <= number; diviseur++){
        if((number%diviseur) === 0){
            console.log('\n')
            console.log(`${diviseur} est un diviseur de ${number}`)
        }
    }
}

searchDiviserNumber(78)
// pour tester si un nombre est premier ou non.
function testNumberIsPremier(number) {
    const sqrt = Math.round(Math.sqrt(number))
    console.log(sqrt)
    for(let diviseur = 2; diviseur <= sqrt; diviseur++ ){
        if((number%diviseur) === 0){
            console.log(`${number} est pas premier parce que le reste de la division avec ${diviseur} est égale à 0 `)
            break
        }
    }
}
testNumberIsPremier(31)


function getTheGreatherNumberOnArray(array){
    let greatherNumer = 0;
    array.forEach(number => {
        if(number > greatherNumer){
            greatherNumer = number
        }
    })
    return greatherNumer
}


const result = getTheGreatherNumberOnArray([1,2,3,4,5])

console.log(result);