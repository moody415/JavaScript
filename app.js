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

  let newArray = array.map(element => element * .5)

console.log(newArray)



let dollars = [1 , 5 , 10 , 3];

//let newDollars = dollars.map(elements => elements * 100 )

//console.log(newDollars)

let cents = [];

for (let i = 0; i < dollars.length++; i++) {
    cents.push(dollars[i] * 100 )
}

console.log(cents);


let userFirstName = 'Mahmudul'
let userLastName = 'Hasan'
let userDiscordId = 'Mahmudul Hasan'
let Status = 'Vip'

let user = [ 
    {
    username: 'Mahmudul', 
    email: 'Mahmudul8522@gmail.com',
    password: 'test123',
    status: 'Vip' ,
    lessonsCompleted: [0]

},
{
    user : 'Mitri',
    username: 'Mahmudul', 
    email: 'Mitri@gmail.com',
    password: 'test1234',
    status: 'Vip+' ,
    lessonsCompleted: [0]
}
]

function login(email, password) {
    for(i=0; i < user.length; i++) {
        console.log(user[i])
    }
    console.log(email, password)
}

login('mahmudul@gmail.com', 'test123')




let users = [ {
    username: 'Mahmudul', 
    email: 'Mahmudul8522@gmail.com',
    password: 'test123',
    subscriptionStatus: 'Vip' ,
    discordId : '34556',
    lessonsCompleted: '0',
}

]

function register(username, email, password, subscriptionStatus, discordId, lessonsCompleted) {
    //for(i=0; i <users.length; i++) 
    {
        console.log(username, password)
    }
}


// First way of accessing an element

document.querySelector('#title')

// Second way of accessing an element

document.getElementById('title')

function addition(num1,num2) {
    return num1 + num2
}

console.log(addition(3,5))

function hoursIntoSecond(Num3) {
    return Num3 *3600
}

console.log(hoursIntoSecond(3))

//

function calcPerimiter(length, width) {
    return 2 * length + 2 * width
}

console.log(calcPerimiter(6,7))


function calcTriangleArea(base, height) {
    return .5 * base * height
}

console.log(calcTriangleArea(20,20))

function frontEnd(phrase) {
    return phrase + 'Frontend'
}

console.log(frontEnd('Apple'))



function sumGreaterThan100 (Num1, Num2) {
    return Num1 + Num2 > 100    
}

console.log(sumGreaterThan100(20,10))


function lessThanOrEqualToZero(num) {
    return num <= 0
}

//console.log(lessThanOrEqualToZero(-2))


function oppositeBoolean (bool) {
    return !true
}

console.log(oppositeBoolean(true))


function isNotZero(num1) {
    return num1 !== 0 
}

console.log(isNotZero(0))


function calcRemainder(Num1, Num2) {
    return Num1 % Num2;
}

console.log(calcRemainder(9,8));



function booleanInteger(num1) {
    if (num1 % 2 ===0) {
        return 1;
    }
    return -1;
}

console.log(booleanInteger(6))



function isLoggedIn(logged,subscribed) {
    if (logged === 'Logged' && subscribed === ' Subscribeds') {
        return true;
    }
    return false;
}

console.log(isLoggedIn('Logged','Subscribed'))


function arrayLength(arr) {
    return arr.length -1;
}

console.log(arrayLength([1,2,3,5]));


function arrSum(arr) {
    let sum = 0;
    for (i=0; i < arr.length; i++) {
        console.log(arr[i])
        sum= sum + arr[i];
    }
    return sum;
}

console.log([3,3,4])


function calcTime(num) {
    let timerMinutes = Math.floor(seconds / 60)
    let timerSeconds = seconds % 60;

    return timerMinutes + ':' + timerSeconds;
}

console.log(calcTime(4))


function getMax(arr) {
  let max = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(getMax([-100, -200, -300]));


console.log(reverseString("abc"));



function reverseString(str) {
    return str.split('').reverse().join('');
}


function convertToZeros(arr) {
  return arr.map((elem) => 0);
  
}


function removeApple(arr) {
  return arr.filter((elem) => !!elem === true);
}

console.log(removeApple([5, undefined, 7, null, "", "apple"]));



function arrSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum
}

console.log(arrSum([1, 2, 3, 4, 5]));



function pogressiveSum(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(pogressiveSum(3))

*/

function calcTime(seconds) {
    let timerSeconds = Math.floor(seconds % 60)
    let timerMinutes = seconds / 60;

    return timerMinutes + ':' + timerSeconds
}

console.log(calcTime(75));