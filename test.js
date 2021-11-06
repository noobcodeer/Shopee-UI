// let a={
//     name:"mercedes",
// };
// let b=a;
// a.name= 'BMW';
// console.log(b.name);

// const firstName= 'Nguyen'
// this.lastName= 'Anh'

// const teacher= {
//     firstName:"Phan",
//     lastName:"Dat",
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// const student ={
//     firstName:"Nguyen ",
//     lastName:"Cao",
// }

// // console.log(teacher.getFullName())
// // const teacherTest = teacher.getFullName
// const teacherTest = teacher.getFullName.bind(student)
// // console.log(teacherTest())
// console.log(teacherTest===teacher.getFullName)



// function random (){
//     console.log(Math.floor(Math.random()*100));
// }
// random()

const teacher={
    firstName:"Gioi",
    lastName:"Nguyen",
};

const me = {
    firstName:"Dat",
    lastName:"Phan",
    showFullName(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

me.showFullName()
me.showFullName.call(teacher)
console.log(me.showFullName)
