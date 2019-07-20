//Array
// let persons = ['John','Tony','Paul']
// let output = "";
// for (let x = 0 ; x < persons.length ; x++)
// {
// output +=   `<li> ${persons[x]} </li>`
// }

// document.getElementById('container').innerHTML = `<ul> ${output} </ul>`

// //Objects
// let person = {
//     fname: "John",
//     lname: "Doe",
//     age:32

// }

//Array of Objects
let persons = [
    {
        fname: "John",
        lname: "Doe",
        age: 23
    },
    {
        fname: "Lucas",
        lname: "Films",
        age:32
    },
    {
        fname: "Tony",
        lname: "Stark",
        age:3000
    }

]

let output = ""; 
persons.forEach (function(item){
    output += `<p> your name is ${item.fname} ${item.lname} </p>`
})


document.getElementById('container').innerHTML = output