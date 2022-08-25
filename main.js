// async function hello() {
//   return "hello"
// }

// const hello = async () => {
//   return "hello"
// }

// hello().then((res) => console.log(res))

const getUsers = async () => {
  // await response of the fetch call
  const response = await fetch("https://jsonplaceholder.typicode.com/users")

  // Only proceed once it resolved
  const data = await response.json()

  // only proceed once second promise is resolved
  return data
}

getUsers().then((users) => console.log(users))
