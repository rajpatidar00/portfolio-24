//getInTouch
document.addEventListener("DOMContentLoaded", function() {
    fetch('./getInTouch/get.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('get').innerHTML = html;
      })
      .catch(error => {
        console.error('Error fetching footer:', error);
      });
  });