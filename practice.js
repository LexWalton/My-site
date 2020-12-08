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

