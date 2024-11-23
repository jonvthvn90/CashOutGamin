// Get the elements
const profileContainer = document.getElementById('profile-container');
const matchesContainer = document.getElementById('matches-container');
const betsContainer = document.getElementById('bets-container');

// Add event listeners
profileContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('match-link')) {
        const matchId = e.target.dataset.matchId;
        fetch(`/matches/${matchId}`)
            .then((response) => response.json())
            .then((data) => {
                const matchHtml = `
                    <h1>${data.tournament.name} - ${data.opponent.username}</h1>
                    <p>Result: ${data.result}</p>
                    <p>Created at: ${data.created_at}</p>
                `;
                matchesContainer.innerHTML = matchHtml;
            });
    }
});

betsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('bet-link')) {
        const betId = e.target.dataset.betId;
        fetch(`/bets/${betId}`)
            .then((response) => response.json())
            .then((data) => {
                const betHtml = `
                    <h1>${data.match.tournament.name} - ${data.match.opponent.username}</h1>
                    <p>Amount: ${data.amount}</p>
                    <p>Created at: ${data.created_at}</p>
                `;
                betsContainer.innerHTML = betHtml;
            });
    }
});