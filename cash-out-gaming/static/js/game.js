// Add event listener to game platforms
document.querySelectorAll('.game-platform').forEach(function(platform) {
    platform.addEventListener('click', function(event) {
        event.preventDefault();
        var platformId = platform.getAttribute('data-platform-id');
        // Load platform content
        fetch('/game/platform/' + platformId + '/')
            .then(response => response.text())
            .then(html => {
                document.querySelector('.game-platform-content').innerHTML = html;
            });
    });
});

// Add event listener to game screenshots
document.querySelectorAll('.game-screenshot').forEach(function(screenshot) {
    screenshot.addEventListener('click', function(event) {
        event.preventDefault();
        var screenshotId = screenshot.getAttribute('data-screenshot-id');
        // Load screenshot content
        fetch('/game/screenshot/' + screenshotId + '/')
            .then(response => response.text())
            .then(html => {
                document.querySelector('.game-screenshot-content').innerHTML = html;
            });
    });
});