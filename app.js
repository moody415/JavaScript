let fullName = 'Mahmudul Hasan'
let isRaining = true
let temperature = 20

temperature = temperature + 2

console.log(temperature)


 // if else statement examples


 let subscribed = true
 let loggedIn = true

 if (subscribed === true) {
     console.log ('show the video')

 }
 else if (loggedIn === true) {
     console.log('tell the user to upgrade')
 }
 else {
     console.log('tell user to log into account')
 }

 let cash = 50
 let cost = 40

 if (cash>cost) {
     console.log("successful transaction")
 }
 else if (cash<cost)  {
     console.log("Unsuccessful transaction due to insufficient funds")
 }
 else{
     console.log("Have a great day.")
 }


 let hot = true

hot ? console.log('weather is hot outside')  : console.log('weather is cold')

//

let currency = 50
let price = 40
let isStoreOpen = true

cash>=price && isStoreOpen ? console.log("give receipt") : console.log("do not give receipt")


let count = 1

while (count<=100) {
    console.log(count)
    count++
}