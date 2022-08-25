// const sayHello = function () {
//   console.log("hello ")
// }

// const sayHello = () => {
//   console.log("hello ")
// }

// One line function does not need braces
// const sayHello = () => console.log("hello world")

// one line returns
// const sayHello = () => "Hello world"

// return an object
// const sayHello = () => ({
//   msg: "Hello world",
// })

// function params

// const sayHello = (firstName, lastName) =>
//   console.log(`Hello ${firstName} ${lastName}`)

// sayHello("Ramez", "Taher")

const users = ["name12", "name222", "name366"]

// const getNameLenghts = users.map(function (name) {
//   return name.length
// })

// shorter
// const getNameLenghts = users.map((name) => {
//   return name.length
// })

// The Shortest
const getNameLenghts = users.map((name) => name.length)

console.log(getNameLenghts)
