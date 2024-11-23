// Get the elements
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

// Add event listeners
header.addEventListener('click', () => {
    console.log('Header clicked!');
});

nav.addEventListener('click', () => {
    console.log('Nav clicked!');
});

main.addEventListener('click', () => {
    console.log('Main clicked!');
});

footer.addEventListener('click', () => {
    console.log('Footer clicked!');
});

// Tournament functionality
const tournaments = document.querySelectorAll('.tournament');

tournaments.forEach((tournament) => {
    tournament.addEventListener('click', () => {
        console.log('Tournament clicked!');
    });
});

// Match functionality
const matches = document.querySelectorAll('.match');

matches.forEach((match) => {
    match.addEventListener('click', () => {
        console.log('Match clicked!');
    });
});

// Bet functionality
const bets = document.querySelectorAll('.bet');

bets.forEach((bet) => {
    bet.addEventListener('click', () => {
        console.log('Bet clicked!');
    });
});