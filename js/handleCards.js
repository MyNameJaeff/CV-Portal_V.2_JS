document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.cardButtons button');

    for (const button of buttons) {
        button.addEventListener('click', () => {
            showCard(button.id.replace('Button', ''), button);
        });
    }
});

const cardTypes = ['about', 'skills', 'qualifications'];

function showCard(cardType, element) {
    const activeCard = document.getElementById("activeCard");

    const content = {
        about: {
            active: `<h3>About Me</h3><div class="cardLine"></div>
            <p>
            I am a 20-year-old student with ambitions to become a versatile full-stack developer. Rather than specializing in a single area, I believe that mastering multiple programming languages deepens one's overall understanding and adaptability.
            <br><br>
            My goal is to continuously improve my coding efficiency while maintaining high-quality standards, as both speed and quality are crucial in delivering exceptional products.
            </p>`,
            blurred: `<h3>Contact Me</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus ad accusamus explicabo sunt impedit, dolores voluptates aliquam quia quae! Necessitatibus, laboriosam eius saepe earum minima sunt odio doloremque eveniet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores voluptates alias sequi illo iusto incidunt, ratione odit aperiam harum inventore soluta, ad esse, at nostrum nulla nemo aliquid veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consectetur aut eum doloribus. Delectus labore vel, soluta, ab totam, nulla incidunt molestias placeat earum amet rerum? Odio alias nobis a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis minus sint quibusdam aut earum voluptas suscipit accusamus accusantium eligendi inventore quam dolorem rem sapiente excepturi, eveniet rerum. Voluptas, ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, et. Velit nemo quas enim, non vitae ullam dignissimos quae nam! Quae accusantium inventore nam modi porro temporibus illo vero et. 
            </p>`
        },
        skills: {
            active: `<h3>Skills</h3><div class="cardLine"></div>
            <p>
            I specialize in web technologies like HTML, CSS...
            </p>`,
            blurred: `<h3>Get in Touch</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus ad accusamus explicabo sunt impedit, dolores voluptates aliquam quia quae! Necessitatibus, laboriosam eius saepe earum minima sunt odio doloremque eveniet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores voluptates alias sequi illo iusto incidunt, ratione odit aperiam harum inventore soluta, ad esse, at nostrum nulla nemo aliquid veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consectetur aut eum doloribus. Delectus labore vel, soluta, ab totam, nulla incidunt molestias placeat earum amet rerum? Odio alias nobis a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis minus sint quibusdam aut earum voluptas suscipit accusamus accusantium eligendi inventore quam dolorem rem sapiente excepturi, eveniet rerum. Voluptas, ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, et. Velit nemo quas enim, non vitae ullam dignissimos quae nam! Quae accusantium inventore nam modi porro temporibus illo vero et. 
            </p>`
        },
        qualifications: {
            active: `<h3>Qualifications</h3><div class="cardLine"></div>
            <p>
            I hold a degree in Computer Science...
            </p>`,
            blurred: `<h3>Additional Info</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus ad accusamus explicabo sunt impedit, dolores voluptates aliquam quia quae! Necessitatibus, laboriosam eius saepe earum minima sunt odio doloremque eveniet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores voluptates alias sequi illo iusto incidunt, ratione odit aperiam harum inventore soluta, ad esse, at nostrum nulla nemo aliquid veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consectetur aut eum doloribus. Delectus labore vel, soluta, ab totam, nulla incidunt molestias placeat earum amet rerum? Odio alias nobis a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis minus sint quibusdam aut earum voluptas suscipit accusamus accusantium eligendi inventore quam dolorem rem sapiente excepturi, eveniet rerum. Voluptas, ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, et. Velit nemo quas enim, non vitae ullam dignissimos quae nam! Quae accusantium inventore nam modi porro temporibus illo vero et. 
            </p>`
        }
    };

    // Update active card content dynamically
    activeCard.innerHTML = content[cardType].active;

    // Select all blurred cards (if they have a common class name 'blurredCard')
    const blurredCards = document.querySelectorAll('.blurredCard');

    // Loop through blurred cards and update their content
    for (const blurredCard of blurredCards) {
        blurredCard.innerHTML = content[cardType].blurred;

        // Get the index of the current cardType
        const currentIndex = cardTypes.indexOf(cardType);
        const nextIndex = (currentIndex + 1) % cardTypes.length; // Loop back to the first card if necessary

        // Set the onclick of each blurred card to navigate to the next card
        blurredCard.onclick = () => showCard(cardTypes[nextIndex], blurredCard);
    }

    // Remove active class from all buttons and then add to the selected button
    const buttons = document.querySelectorAll('.cardButtons button');
    for (const btn of buttons) {
        btn.classList.remove('activeButton');
    }

    if (element.tagName === 'BUTTON') {
        element.classList.add('activeButton');
    } else {
        const activeButton = document.querySelector(`#${cardType}Button`);
        if (activeButton) {
            activeButton.classList.add('activeButton');
        }
    }
}
