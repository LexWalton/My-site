//This is for Cool feature #1
const ourInput = document.getElementById("ourInput")
const ourH = document.getElementById("ourH")

ourInput.addEventListener("input", amF)

function amF () {
  if (ourInput.value) {
    ourH.innerText = ourInput.value + " is using JavaScript"
  } else {
    ourH.innerText = 'Please enter a name'
  }
}


//This is for Cool feature #1
let ourForm = document.getElementById("ourForm")
let ourField = document.getElementById("ourField")
let ourList = document.getElementById("ourList")

ourForm.addEventListener("submit", (e) => {
  e.preventDefault()
  createIteam(ourField.value)
})

function createIteam(x) {
  let ourHTML = `<li>${x} <button onclick="deleteItem(this)">Delete</button></li>`
  ourList.insertAdjacentHTML("beforeend", ourHTML)
  ourField.value = ""
  ourField.focus
}

function deleteItem(elementToDelete) {
  elementToDelete.parentElement.remove()
}