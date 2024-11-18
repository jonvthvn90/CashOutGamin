// Get the elements
const blogContainer = document.getElementById('blog-container');

// Add event listeners
blogContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('post')) {
        const postId = e.target.dataset.postId;
        window.location.href = `/post/${postId}`;
    }
});