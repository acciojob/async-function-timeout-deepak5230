// Function to introduce delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function displayMessage() {
    const textInput = document.getElementById('text').value;
    const delayInput = parseInt(document.getElementById('delay').value, 10);
    const outputDiv = document.getElementById('output');

    await delay(delayInput);
    outputDiv.textContent = textInput;
}

// Add event listener to the button
document.getElementById('btn').addEventListener('click', () => {
    displayMessage();
});

