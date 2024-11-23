// Get the elements
const gameContainer = document.getElementById('game-container');
const platformContainer = document.getElementById('platform-container');

// Add event listeners
gameContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('game-link')) {
        const gameId = e.target.dataset.gameId;
        fetch(`/games/${gameId}`)
            .then((response) => response.json())
            .then((data) => {
                const gameHtml = `
                    <h1>${data.name}</h1>
                    <p>${data.description}</p>
                    <p>Platforms:</p>
                    <ul>
                        ${data.platforms.map((platform) => `<li>${platform.name}</li>`).join('')}
                    </ul>
                `;
                gameContainer.innerHTML = gameHtml;
            });
    }
});

platformContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('platform-link')) {
        const platformId = e.target.dataset.platformId;
        fetch(`/platforms/${platformId}`)
            .then((response) => response.json())
            .then((data) => {
                const platformHtml = `
                    <h1>${data.name}</h1>
                    <p>${data.description}</p>
                    <p>Games:</p>
                    <ul>
                        ${data.games.map((game) => `<li>${game.name}</li>`).join('')}
                    </ul>
                `;
                platformContainer.innerHTML = platformHtml;
            });
    }
});