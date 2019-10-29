// When the button is clicked, display the data in the following format in the DOM.

// I can purchase {thing} at {location}

const domContainer = document.querySelector("#container")
const saveButton = document.querySelector("#saveButton")



saveButton.addEventListener("click", () => {
    const favThing = document.querySelector("#favoriteThing").value
    const favStore = document.querySelector("#store").value

    domContainer.innerHTML += `
    <p>I can purchase ${favThing} at ${favStore}.</p>
    `
    
})
