
// targeting the container div and the save button
const domContainer = document.querySelector("#container")
const saveButton = document.querySelector("#saveButton")


// things will now happen when the save button is clicked
saveButton.addEventListener("click", () => {
    // targeting the input boxes
    let favThing = document.querySelector("#favoriteThing")
    let favStore = document.querySelector("#store")

    // updating the dom with the contents of the text box
    domContainer.innerHTML += `
    <p>I can purchase ${favThing.value} at ${favStore.value}.</p>
    `

    // clearing out the input boxes
    favThing.value = ""
    favStore.value = ""

    // focusing on the favorite things box
    favThing.focus()
    
})
