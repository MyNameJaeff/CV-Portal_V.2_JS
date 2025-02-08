document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.cardButtons button');

    for (const button of buttons) {
        button.addEventListener('click', () => {
            showCard(button.id.replace('Button', ''), button);
        });
    }
});

const cardTypes = ['about', 'skills', 'credentials'];

function showCard(cardType) {
    const activeCard = document.getElementById("activeCard");

    const content = {
        about: {
            active: `<h3>About Me</h3><div class="cardLine"></div>
            <p>
            I am a 20-year-old student with ambitions to become a versatile full-stack developer. My passion for technology fuels my continuous desire to expand my knowledge and skills in programming.
            <br><br>
            My interests are largely centered around computers, which is why I have developed a strong enthusiasm for coding. In my free time, I enjoy gaming, 3D printing, and creating websites for personal projects.
            <br><br>
            I have studied both JavaScript and C# .NET, as I believe that learning multiple programming languages offers a deeper understanding of software development. My goal is to become proficient in a wide range of technologies, enhancing my problem-solving abilities and adaptability as a developer.
            </p>`,
            blurred: `<h3>Skills</h3>
            <p>
            I specialize in web technologies such as HTML, CSS, React, and Node.js. Additionally, I have experience with C# .NET and some Python, allowing me to take on diverse development challenges.            
            <br><br>
            Currently, I am enhancing my expertise by deepening my knowledge of C# and .NET to become a more versatile web developer.
            <br><br>
            I am proficient with version control systems like Git and use GitHub for collaboration. I have experience with SQL (MySQL) databases, which has helped me understand various approaches to structuring and querying data.
            </p>`
        },
        skills: {
            active: `<h3>Skills</h3><div class="cardLine"></div>
            <p>
            I specialize in web technologies such as HTML, CSS, React, and Node.js. Additionally, I have experience with C# .NET and some Python, allowing me to take on diverse development challenges.            
            <br><br>
            Currently, I am enhancing my expertise by deepening my knowledge of C# and .NET to become a more versatile web developer.
            <br><br>
            I am proficient with version control systems like Git and use GitHub for collaboration. I have experience with SQL (MySQL) databases, which has helped me understand various approaches to structuring and querying data.
            </p>`,
            blurred: `<h3>Credentials</h3>
            <p>
            I hold two diplomas in information technology: one from high school and another from a post-high-school engineering program that focused on software development. This latter diploma provided me with a solid foundation in programming and web development, as well as practical experience with databases and version control systems, having been responsible for several projects.
            <br><br>
            Additionally, I hold two web development certifications from Certiport, one in HTML & CSS and the other in JavaScript. These certifications have given me the confidence to take on more advanced projects and further expand my skill set.
            </p>`
        },
        credentials: {
            active: `<h3>Credentials</h3><div class="cardLine"></div>
            <p>
            I hold two diplomas in information technology: one from high school and another from a post-high-school engineering program that focused on software development. This latter diploma provided me with a solid foundation in programming and web development, as well as practical experience with databases and version control systems, having been responsible for several projects.
            <br><br>
            Additionally, I hold two web development certifications from Certiport, one in HTML & CSS and the other in JavaScript. These certifications have given me the confidence to take on more advanced projects and further expand my skill set.
            </p>`,
            blurred: `<h3>About Me</h3>
            <p>
            I am a 20-year-old student with ambitions to become a versatile full-stack developer. My passion for technology fuels my continuous desire to expand my knowledge and skills in programming.
            <br><br>
            My interests are largely centered around computers, which is why I have developed a strong enthusiasm for coding. In my free time, I enjoy gaming, 3D printing, and creating websites for personal projects.
            <br><br>
            I have studied both JavaScript and C# .NET, as I believe that learning multiple programming languages offers a deeper understanding of software development. My goal is to become proficient in a wide range of technologies, enhancing my problem-solving abilities and adaptability as a developer.
            </p>`
        }
    };

    activeCard.innerHTML = content[cardType].active;

    const blurredCards = document.querySelectorAll('.blurredCard');

    for (const blurredCard of blurredCards) {
        blurredCard.innerHTML = content[cardType].blurred;

        const currentIndex = cardTypes.indexOf(cardType);
        const nextIndex = (currentIndex + 1) % cardTypes.length;

        blurredCard.onclick = () => showCard(cardTypes[nextIndex]);
    }

    // Ta bort 'activeButton' och 'activeButtonText' från alla knappar och texter
    for (const btn of document.querySelectorAll('.cardButtons button')) {
        btn.classList.remove('activeButton');
    }
    for (const text of document.querySelectorAll('.cardButtons p')) {
        text.classList.remove('activeButtonText');
    }

    // Hitta rätt knapp och text att aktivera
    const activeButton = document.getElementById(`${cardType}Button`);
    const activeText = document.getElementById(`${cardType}Text`);

    if (activeButton) activeButton.classList.add('activeButton');
    if (activeText) activeText.classList.add('activeButtonText');
}
