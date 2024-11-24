// Get the elements
const adminContainer = document.getElementById('admin-container');
const userForm = document.getElementById('user-form');
const tournamentForm = document.getElementById('tournament-form');
const gameForm = document.getElementById('game-form');
const matchForm = document.getElementById('match-form');
const betForm = document.getElementById('bet-form');

// Add event listeners
adminContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('user-link')) {
        const userId = e.target.dataset.userId;
        fetch(`/users/${userId}`)
            .then((response) => response.json())
            .then((data) => {
                const userHtml = `
                    <h1>${data.username}</h1>
                    <p>${data.email}</p>
                `;
                userForm.innerHTML = userHtml;
            });
    }
});

adminContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('tournament-link')) {
        const tournamentId = e.target.dataset.tournamentId;
        fetch(`/tournaments/${tournamentId}`)
            .then((response) => response.json())
            .then((data) => {
                const tournamentHtml = `
                    <h1>${data.name}</h1>
                    <p>${data.description}</p>
                `;
                tournamentForm.innerHTML = tournamentHtml;
            });
    }
});

adminContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('game-link')) {
        const gameId = e.target.dataset.gameId;
        fetch(`/games/${gameId}`)
            .then((response) => response.json())
            .then((data) => {
                const gameHtml = `
                    <h1>${data.name}</h1>
                    <p>${data.description}</p>
                `;
                gameForm.innerHTML = gameHtml;
            });
    }
});

adminContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('match-link')) {
        const matchId = e.target.dataset.matchId;
        fetch(`/matches/${matchId}`)
            .then((response) => response.json())
            .then((data) => {
                const matchHtml = `
                    <h1>${data.tournament.name} - ${data.game.name}</h1>
                    <p>${data.created_at}</p>
                `;
                matchForm.innerHTML = matchHtml;
            });
    }
});

adminContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('bet-link')) {
        const betId = e.target.dataset.betId;
        fetch(`/bets/${betId}`)
            .then((response) => response.json())
            .then((data) => {
                const betHtml = `
                    <h1>${data.match.tournament.name} - ${data.match.game.name}</h1>
                    <p>${data.user.username} - ${data.amount}</p>
                `;
                betForm.innerHTML = betHtml;
            });
    }
});