
// //Objects
// let obj = {
//     fname:"John",
//     lname:"Doe",
//     age:12,
//     status:'single',
//     //method: a function inside of an object
//     fullname:function(){
//         return `Hi! ${this.fname} ${this.lname}`
//     },
//     isMarried:function(){
//         if (this.status == 'married'){
//             return 'Yes'
//         }
//         else
//         {
//             return 'No'
//         }
//     },
//     Minor:function(){
//         if (this.age <18){
//             return "Yes"
//         }
//         else{
//             return "No"
//         }
//     }
// }
// //function - outside sa object


class myclass{
   constructor (Name,age,gender)

    {
        this.name = name,
        this.age = age,
        this.gender = gender
    }
    isMinor()
    {
        if(this.age <18)
        {
            return "Yes"
        }
        else 
        {
            return "No"
        }
    }
}


let           myobj = new myclass('John',23,'Male');
let myobj2 = new myclass('Mark',12,'male');