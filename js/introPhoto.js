// intro-photo.js
 document.addEventListener("DOMContentLoaded", function() {
    fetch('./js/introphoto.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('intro-image').innerHTML = html;
      })
      .catch(error => {
        console.error('Error fetching footer:', error);
      });
  });
  