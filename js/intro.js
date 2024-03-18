 // into.js
document.addEventListener("DOMContentLoaded", function() {
    fetch('./js/intro.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('intro').innerHTML = html;
      })
      .catch(error => {
        console.error('Error fetching footer:', error);
      });
  });
  