// Add event listener to matchmaking links
document.querySelectorAll('.matchmaking-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      var href = link.getAttribute('href');
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    });
  });