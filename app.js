// DRY - Don't Repeat Yourself
for (let i=1; i<=20; i++) {
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
