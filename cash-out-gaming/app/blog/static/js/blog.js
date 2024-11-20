// Add event listener to blog links
document.querySelectorAll('.blog-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      var href = link.getAttribute('href');
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    });
  });