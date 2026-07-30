const sumbitButton = document.querySelector("button")
const inputForm = document.getElementById("howManySquares")
sumbitButton.addEventListener("click", () => {
    const userInput = inputForm.value
    if (userInput > 100) {
        alert("The size of the one side has to be less than 100.")

    } else {
        const squares = userInput ** 2
        const gridBox = document.querySelector(".container")
        if (!(gridBox.childNodes.length === 0))
            gridBox.innerHTML = ""

        for (let i = 0; i < userInput; i++) {
            let row = document.createElement("div")
            row.classList = "row"
            gridBox.appendChild(row)

            for (let j = 0; j < userInput; j++) {
                let block = document.createElement("div")
                block.classList = "square"
                row.appendChild(block)
                block.addEventListener("mouseover", () => {
                    block.style.opacity -= '-0.1'                   
                })
            }
        }
        
    }

})

