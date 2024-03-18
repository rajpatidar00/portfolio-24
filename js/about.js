// aboutjs
document.addEventListener("DOMContentLoaded", function() {
    fetch('./js/about.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('about').innerHTML = html;
      })
      .catch(error => {
        console.error('Error fetching footer:', error);
      });
  });