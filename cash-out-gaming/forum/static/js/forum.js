// Get the elements
const forumContainer = document.getElementById('forum-container');
const threadContainer = document.getElementById('thread-container');
const postContainer = document.getElementById('post-container');
const commentContainer = document.getElementById('comment-container');

// Add event listeners
forumContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('post-link')) {
        const postId = e.target.dataset.postId;
        fetch(`/posts/${postId}`)
            .then((response) => response.json())
            .then((data) => {
                const threadHtml = `
                    <h1>${data.title}</h1>
                    <p>${data.content}</p>
                    <p>Posted by ${data.author.username} on ${data.created_at}</p>
                `;
                threadContainer.innerHTML = threadHtml;
            });
    }
});

threadContainer.addEventListener('click', (e) => {
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

postContainer.addEventListener('submit', (e) => {
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

commentContainer.addEventListener('submit', (e) => {
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