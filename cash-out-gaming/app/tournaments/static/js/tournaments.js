// Add event listener to tournament links
document.querySelectorAll('.tournament-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      var href = link.getAttribute('href');
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    });
  });
