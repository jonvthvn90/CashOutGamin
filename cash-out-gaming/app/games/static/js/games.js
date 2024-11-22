// Add event listener to game links
document.querySelectorAll('.game-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      var href = link.getAttribute('href');
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    });
  });