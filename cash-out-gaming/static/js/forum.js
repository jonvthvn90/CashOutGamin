// Get the elements
const forumContainer = document.getElementById('forum-container');
const forumHeader = document.getElementById('forum-header');
const forumPosts = document.getElementById('forum-posts');

// Add event listeners
forumContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('forum-post-button')) {
        const postId = e.target.dataset.postId;
        fetch(`/forum/posts/${postId}`)
            .then((response) => response.json())
            .then((data) => {
                const postHtml = `
                    <h2>${data.title}</h2>
                    <p>${data.content}</p>
                `;
                forumPosts.innerHTML = postHtml;
            });
    }
});

forumHeader.addEventListener('click', (e) => {
    if (e.target.classList.contains('forum-header-button')) {
        const categoryId = e.target.dataset.categoryId;
        fetch(`/forum/categories/${categoryId}`)
            .then((response) => response.json())
            .then((data) => {
                const categoryHtml = `
                    <h1>${data.name}</h1>
                    <p>${data.description}</p>
                `;
                forumHeader.innerHTML = categoryHtml;
            });
    }
});