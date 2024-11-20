// Add event listener to forum threads
document.querySelectorAll('.forum-thread').forEach(function(thread) {
    thread.addEventListener('click', function(event) {
        event.preventDefault();
        var threadId = thread.getAttribute('data-thread-id');
        // Load thread content
        fetch('/forum/thread/' + threadId + '/')
            .then(response => response.text())
            .then(html => {
                document.querySelector('.forum-thread-content').innerHTML = html;
            });
    });
});

// Add event listener to forum posts
document.querySelectorAll('.forum-post').forEach(function(post) {
    post.addEventListener('click', function(event) {
        event.preventDefault();
        var postId = post.getAttribute('data-post-id');
        // Load post content
        fetch('/forum/post/' + postId + '/')
            .then(response => response.text())
            .then(html => {
                document.querySelector('.forum-post-content').innerHTML = html;
            });
    });
});