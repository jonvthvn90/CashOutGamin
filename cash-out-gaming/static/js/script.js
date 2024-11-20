// Add event listener to navigation links
document.querySelectorAll('header nav a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var href = link.getAttribute('href');
        // Load page content
        fetch(href)
            .then(response => response.text())
            .then(html => {
                document.querySelector('main').innerHTML = html;
            });
    });
});

// Add event listener to login form
document.querySelector('form.login').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.querySelector('input[name="username"]').value;
    var password = document.querySelector('input[name="password"]').value;
    // Authenticate user
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect to dashboard
            window.location.href = '/dashboard';
        } else {
            // Display error message
            document.querySelector('div.error').innerHTML = data.message;
        }
    });
});