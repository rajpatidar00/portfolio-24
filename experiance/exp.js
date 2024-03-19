// Experiance
document.addEventListener("DOMContentLoaded", function() {
    fetch('./experiance/exp.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('exp').innerHTML = html;
      })
      .catch(error => {
        console.error('Error fetching footer:', error);
      });
  });