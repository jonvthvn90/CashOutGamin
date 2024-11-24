// Get the elements
const blogContainer = document.getElementById('blog-container');
const blogHeader = document.getElementById('blog-header');
const blogPosts = document.getElementById('blog-posts');
const blogCategories = document.getElementById('blog-categories');
const blogTags = document.getElementById('blog-tags');

// Add event listeners
blogContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('blog-post-button')) {
        const postId = e.target.dataset.postId;
        fetch(`/blog/posts/${postId}`)
            .then((response) => response.json())
            .then((data) => {
                const postHtml = `
                    <h2>${data.title}</h2>
                    <p>${data.content}</p>
                `;
                blogPosts.innerHTML = postHtml;
            });
    }
});

blogHeader.addEventListener('click', (e) => {
    if (e.target.classList.contains('blog-header-button')) {
        const categoryId = e.target.dataset.categoryId;
        fetch(`/blog/categories/${categoryId}`)
            .then((response) => response.json())
            .then((data) => {
                const categoryHtml = `
                    <h1>${data.name}</h1>
                    <p>${data.description}</p>
                `;
                blogHeader.innerHTML = categoryHtml;
            });
    }
});

blogCategories.addEventListener('click', (e) => {
    if (e.target.classList.contains('blog-category-button')) {
        const categoryId = e.target.dataset.categoryId;
        fetch(`/blog/categories/${categoryId}/posts`)
            .then((response) => response.json())
            .then((data) => {
                const postsHtml = data.map((post) => `
                    <h2>${post.title}</h2>
                    <p>${post.content}</p>
                `).join('');
                blogPosts.innerHTML = postsHtml;
            });
    }
});

blogTags.addEventListener('click', (e) => {
    if (e.target.classList.contains('blog-tag-button')) {
        const tagId = e.target.dataset.tagId;
        fetch(`/blog/tags/${tagId}/posts`)
            .then((response) => response.json())
            .then((data) => {
                const postsHtml = data.map((post) => `
                    <h2>${post.title}</h2>
                    <p>${post.content}</p>
                `).join('');
                blogPosts.innerHTML = postsHtml;
            });
    }
});

// Add event listener for search form
const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchQuery = document.getElementById('search-query').value;
    fetch(`/blog/search?q=${searchQuery}`)
        .then((response) => response.json())
        .then((data) => {
            const postsHtml = data.map((post) => `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
            `).join('');
            blogPosts.innerHTML = postsHtml;
        });
});

// Add event listener for pagination buttons
const paginationButtons = document.querySelectorAll('.pagination-button');
paginationButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const pageNumber = e.target.dataset.pageNumber;
        fetch(`/blog/posts?page=${pageNumber}`)
            .then((response) => response.json())
            .then((data) => {
                const postsHtml = data.map((post) => `
                    <h2>${post.title}</h2>
                    <p>${post.content}</p>
                `).join('');
                blogPosts.innerHTML = postsHtml;
            });
    });
});