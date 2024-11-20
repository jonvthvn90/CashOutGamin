// Add event listener to user profiles
document.querySelectorAll('.user-profile').forEach(function(profile) {
    profile.addEventListener('click', function(event) {
        event.preventDefault();
        var profileId = profile.getAttribute('data-profile-id');
        // Load profile content
        fetch('/user/profile/' + profileId + '/')
            .then(response => response.text())
            .then(html => {
                document.querySelector('.user-profile-content').innerHTML = html;
            });
    });
});

// Add event listener to user avatars
document.querySelectorAll('.user-avatar').forEach(function(avatar) {
    avatar.addEventListener('click', function(event) {
        event.preventDefault();
        var avatarId = avatar.getAttribute('data-avatar-id');
        // Load avatar content
        fetch('/user/avatar/' + avatarId + '/')
            .then(response => response.text())
            .then(html => {
                document.querySelector('.user-avatar-content').innerHTML = html;
            });
    });
});