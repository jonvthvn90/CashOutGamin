// Get the elements
const forumContainer = document.getElementById('forum-container');
const threadContainer = document.getElementById('thread-container');

// Add event listeners
forumContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('thread')) {
        const threadId = e.target.dataset.threadId;
        window.location.href = `/thread/${threadId}`;
    }
});

threadContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('post')) {
        const postId = e.target.dataset.postId;
        window.location.href = `/post/${postId}`;
    }
});