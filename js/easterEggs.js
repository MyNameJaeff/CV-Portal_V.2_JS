const easterEgg1 = () => {
    alert('Easter Egg 1');
};

const easterEgg2 = () => {
    alert('Easter Egg 2');
};

document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase(); // Normalize key to lowercase
    handleSequence(key);
});

// Store sequences and user input
const sequences = {
    "1337": easterEgg1,
    "amogus": easterEgg2,
};
let userInput = "";

// Function to handle key sequences
const handleSequence = (key) => {
    userInput += key; // Add key to the current input
    console.log(`Current input: ${userInput}`); // Debug log

    // Check if the user input matches any sequence
    for (const [sequence, action] of Object.entries(sequences)) {
        if (userInput.endsWith(sequence)) {
            action(); // Trigger the matching function
            userInput = ""; // Reset input after triggering
            return;
        }
    }

    // Optionally limit the stored input length to avoid excessive memory use
    if (userInput.length > 10) {
        userInput = userInput.slice(-10);
    }
};


const easterEgg3 = () => {
    alert('Easter Egg 3');
};