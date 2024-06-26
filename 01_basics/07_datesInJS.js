// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);

// let MyCreateDate = new Date(2023, 0, 23)
// let MyCreateDate = new Date(2023, 0, 23, 5, 3)
// let MyCreateDate = new Date("2023-01-14")
let MyCreateDate = new Date("01-14-2024")
// console.log(MyCreateDate.toLocaleString());

let MyTimeStamp = Date.now()

// console.log(MyTimeStamp);
// console.log(MyCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleDateString('default',{
    weekday: "long",
})