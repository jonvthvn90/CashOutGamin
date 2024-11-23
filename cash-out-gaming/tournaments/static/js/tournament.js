// Get the elements
const tournamentContainer = document.getElementById('tournament-container');
const matchContainer = document.getElementById('match-container');

// Add event listeners
tournamentContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('tournament-link')) {
        const tournamentId = e.target.dataset.tournamentId;
        fetch(`/tournaments/${tournamentId}`)
            .then((response) => response.json())
            .then((data) => {
                const tournamentHtml = `
                    <h1>${data.name}</h1>
                    <p>${data.description}</p>
                    <h2>Matches</h2>
                    <ul>
                        ${data.matches.map((match) => `<li>${match.player1.username} vs ${match.player2.username}</li>`).join('')}
                    </ul>
                `;
                tournamentContainer.innerHTML = tournamentHtml;
            });
    }
});

matchContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('match-link')) {
        const matchId = e.target.dataset.matchId;
        fetch(`/matches/${matchId}`)
            .then((response) => response.json())
            .then((data) => {
                const matchHtml = `
                    <h1>${data.player1.username} vs ${data.player2.username}</h1>
                    <p>Winner: ${data.winner.username}</p>
                    <p>Created at: ${data.created_at}</p>
                `;
                matchContainer.innerHTML = matchHtml;
            });
    }
});