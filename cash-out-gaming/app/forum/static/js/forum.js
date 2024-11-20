// Add event listener to forum links
document.querySelectorAll('.forum-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      var href = link.getAttribute('href');
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    });
  });