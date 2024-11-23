// Get the elements
const blogContainer = document.getElementById('blog-container');
const postContainer = document.getElementById('post-container');
const commentContainer = document.getElementById('comment-container');

// Add event listeners
blogContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('post-link')) {
        const postId = e.target.dataset.postId;
        fetch(`/posts/${postId}`)
            .then((response) => response.json())
            .then((data) => {
                const postHtml = `
                    <h1>${data.title}</h1>
                    <p>${data.content}</p>
                    <p>Posted by ${data.author.username} on ${data.created_at}</p>
                `;
                postContainer.innerHTML = postHtml;
            });
    }
});

postContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('comment-link')) {
        const commentId = e.target.dataset.commentId;
        fetch(`/comments/${commentId}`)
            .then((response) => response.json())
            .then((data) => {
                const commentHtml = `
                    <p>${data.content}</p>
                    <p>Posted by ${data.author.username} on ${data.created_at}</p>
                `;
                commentContainer.innerHTML = commentHtml;
            });
    }
});

// Create post functionality
const createPostForm = document.getElementById('create-post-form');
createPostForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    fetch('/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            content
        })
    })
        .then((response) => response.json())
        .then((data) => {
            const postHtml = `
                <h1>${data.title}</h1>
                <p>${data.content}</p>
                <p>Posted by ${data.author.username} on ${data.created_at}</p>
            `;
            postContainer.innerHTML = postHtml;
        });
});

// Create comment functionality
const createCommentForm = document.getElementById('create-comment-form');
createCommentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const content = document.getElementById('content').value;
    fetch('/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content
        })
    })
        .then((response) => response.json())
        .then((data) => {
            const commentHtml = `
                <p>${data.content}</p>
                <p>Posted by ${data.author.username} on ${data.created_at}</p>
            `;
            commentContainer.innerHTML = commentHtml;
        });
});