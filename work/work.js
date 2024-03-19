document.addEventListener("DOMContentLoaded", function() {
    fetch('./work/work.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('work').innerHTML = html;
      })
      .catch(error => {
        console.error('Error fetching footer:', error);
      });
  });