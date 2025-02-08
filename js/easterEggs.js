let isEasterEgg2active = false;

const easterEgg1 = () => {
    alert("Grattis, du är nu officiellt 1337! 🎉");
};

document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    handleSequence(key);
});

const sequences = {
    "1337": easterEgg1
};
let userInput = "";

const handleSequence = (key) => {
    userInput += key;
    for (const [sequence, action] of Object.entries(sequences)) {
        if (userInput.endsWith(sequence)) {
            action();
            userInput = "";
            return;
        }
    }

    if (userInput.length > 10) {
        userInput = userInput.slice(-10);
    }
};

const easterEgg2 = () => {
    isEasterEgg2active = !isEasterEgg2active;
    if (!isEasterEgg2active) {
        document.body.style.backgroundImage = "url('')";
    } else {
        document.body.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/previews/041/879/642/non_2x/ai-generated-colorful-easter-eggs-nestled-in-alpine-meadow-with-majestic-mountain-landscape-springtime-celebration-and-holiday-traditions-amidst-breathtaking-natural-scenery-photo.jpg')";
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const easterEgg = document.getElementById("easterEgg");
    easterEgg.addEventListener("click", () => {
        easterEgg2();
    });
});
