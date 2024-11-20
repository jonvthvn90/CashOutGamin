// Add event listener to blog posts
document.querySelectorAll('.blog-post').forEach(function(post) {
    post.addEventListener('click', function(event) {
        event.preventDefault();
        var postId = post.getAttribute('data-post-id');
        // Load post content
        fetch('/blog/post/' + postId + '/')
            .then(response => response.text())
            .then(html => {
                document.querySelector('.blog-post-content').innerHTML = html;
            });
    });
});

// Add event listener to blog comments
document.querySelectorAll('.blog-comment').forEach(function(comment) {
    comment.addEventListener('click', function(event) {
        event.preventDefault();
        var commentId = comment.getAttribute('data-comment-id');
        // Load comment content
        fetch('/blog/comment/' + commentId + '/')
            .then(response => response.text())
            .then(html => {
                document.querySelector('.blog-comment-content').innerHTML = html;
            });
    });
});