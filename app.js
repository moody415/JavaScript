// DRY - Don't Repeat Yourself
/*for (let i=1; i<=20; i++) {
if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} -> Frontend Simplified`)
}
else if (i % 3 === 0) {
console.log(`${i} -> Frontend`)
}
else if (i % 5 === 0) {
    console.log(`${i} -> Simplified`)
}

else {
    console.log(`${i} -> ${i}`)
}
}

const str = "Frontend Simplified"

for (let i=0; i<str.length; i++) {
    console.log(str[i])

}
//  Function definition
function welcomePersonToFes(firstName, lastName) {
    console.log(`Welcome to FES, ${firstName} ${lastName} !`)
}

// Call the function



welcomePersonToFes(`Mahmudul`, `Hasan`)


function fn() {
    return 'my return'
    console.log('my function')
}

fn()


const celsiusFormula = (celsius) => {
    return celsius * 1.8 + 32
}

console.log(celsiusFormula(0))

let item1 = 20
let item2 = 30
let item3 = 40
let item4 = 50
let item5 = 100
// Converting 5 Seperate Sariables into One Array
let arr = [20, 30, 40, 50, 100]

// First element of array :

console.log(arr[0])

// Last element of array

console.log(arr[arr.length -1])

arr.push(200)

console.log(arr)


let arr = [20, 30, 40, 50, 100]

let newArr = arr.filter(element => element >= 50) 

console.log(newArr)




let grades = ['A+', 'A' , 'FAIL']

//let newGrades = grades.filter(elements => elements != 'FAIL')

//console.log(newGrades)

let goodGrades = []

for (let i=0; i < grades.length; i++ ) {
    if (grades[i] !== 'Fail')
    goodGrades.push(grades[i])
}

console.log(goodGrades)


let array = [1, 4, 9, 16]

  let newArray = array.map(element => element * .5
)

console.log(newArray)
*/


let dollars = [1 , 5 , 10 , 3];

let newDollars = dollars.map(elements => elements * 100 )

console.log(newDollars)