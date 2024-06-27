// const tinderUser = new Object()     //singleton object
const tinderUser = {}       // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "@gmail.com",
    fullname: {
        userfullname: {
            firstname: "prayag",
            middlename: "raj",
            lastname: "singh"
        }
    }
}
// console.log(regularUser.fullname.userfullname.middlename);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = { obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);


const users = [
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty(`isLoggedIn`));


const course ={
    courssename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "prayag",
//     "courssename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]