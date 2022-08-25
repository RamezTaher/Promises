const fetchBtn = document.querySelector(".btn")

fetchBtn.addEventListener("click", function getJson() {
  fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      let output = ""
      data.forEach((user) => {
        output += `<li>${user.login}</li>`
      })

      document.getElementById("output").innerHTML = output
    })
    .catch((err) => {
      console.log(err)
    })
})

// https://api.github.com/users
