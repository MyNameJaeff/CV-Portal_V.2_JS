document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('projects');
    createPortfolioCards().then(projectsElements => {
        for (const projectElement of projectsElements) {
            projectsContainer.appendChild(projectElement);
        }
    }).catch(error => {
        console.error('Error creating portfolio cards:', error);
    });
});

const createPortfolioCards = () => {
    return new Promise((resolve, reject) => {
        const projectsElements = [];

        // Fetch JSON data
        fetch('../js/portfolio.json')
            .then(response => response.json())  // Parse JSON response
            .then(data => {
                for (const project of data.projects) {
                    const card = document.createElement('div');
                    card.classList.add('card');
                    const modalId = `popup-${project.number}`; // Unique modal id based on project id
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
                            <a href="${project.link}" target="_blank">${project.name}&#128279;</a>
                            <a class="close" href="#">&times;</a>
                            <div class="content">
                                <p>${project.text}</p>
                                <div class="modalImages">
                                    <img src="../images/${project.images[1] ? project.images[1] : project.images[0]}" alt="${project.name}" class="modalImage">
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                    projectsElements.push(card);
                }

                resolve(projectsElements);
            })
            .catch(error => {
                reject(error);  // Reject the promise if there's an error
            });
    });
};
