// Add event listener to tournament brackets
document.querySelectorAll('.tournament-bracket').forEach(function(bracket) {
    bracket.addEventListener('click', function(event) {
        event.preventDefault();
        var bracketId = bracket.getAttribute('data-bracket-id');
        // Load bracket content
        fetch('/tournament/bracket/' + bracketId + '/')
            .then(response => response.text())
            .then(html => {
                document.querySelector('.tournament-bracket-content').innerHTML = html;
            });
    });
});

// Add event listener to tournament matches
document.querySelectorAll('.tournament-match').forEach(function(match) {
    match.addEventListener('click', function(event) {
        event.preventDefault();
        var matchId = match.getAttribute('data-match-id');
        // Load match content
        fetch('/tournament/match/' + matchId + '/')
            .then(response => response.text())
            .then(html => {
                document.querySelector('.tournament-match-content').innerHTML = html;
            });
    });
});