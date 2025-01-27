document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('projects');
    createPortfolioCards()
        .then(projectsElements => {
            for (const projectElement of projectsElements) {
                projectsContainer.appendChild(projectElement);
            }
        })
        .catch(error => {
            console.error('Error creating portfolio cards:', error);
        });
});

const createPortfolioCards = () => {
    return new Promise((resolve, reject) => {
        const projectsElements = [];

        fetch('../js/portfolio.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (!Array.isArray(data.projects)) {
                    throw new Error('Invalid or missing "projects" array in JSON.');
                }

                for (const project of data.projects) {
                    const card = document.createElement('div');
                    card.classList.add('card');
                    const modalId = `popup-${project.number}`;

                    card.innerHTML = `
                    <li>
                        <div class="projectText">
                            <h3>${project.name}</h3>
                            <label>
                                <p><a class="button" href="#${modalId}">Read more!</a></p>
                            </label>
                        </div>
                        <div class="projectImage">
                            <img src="../images/${project.images[0]}" alt="${project.name}">
                        </div>
                    </li>
                    <!-- Modal for this project -->
                    <div id="${modalId}" class="overlay">
                        <a class="cancel" href="#"></a>
                        <div class="popup">
                            <a href="${project.link}" target="_blank">${project.name} &#128279;</a>
                            <a class="close" href="#">&times;</a>
                            <div class="content">
                                <p>${project.text}</p>
                                <div class="modalImages">
                                </div>
                            </div>
                        </div>
                    </div>
                    `;

                    // Add all images to the modal
                    const modalImagesContainer = card.querySelector('.modalImages');
                    // biome-ignore lint/complexity/noForEach: <explanation>
                    project.images.forEach(image => {
                        const img = document.createElement('img');
                        img.src = `../images/${image}`;
                        img.alt = project.name;
                        img.classList.add('modalImage'); // Optional: Add a class for styling
                        modalImagesContainer.appendChild(img);
                    });

                    // Push the card element into the projectsElements array
                    projectsElements.push(card);
                }

                resolve(projectsElements); // Resolve with created elements
            })
            .catch(error => {
                console.error('Error fetching or processing portfolio data:', error);
                reject(error); // Reject the promise
            });
    });
};
