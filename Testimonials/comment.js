//testimonials
document.addEventListener("DOMContentLoaded", function() {
    fetch('./Testimonials/comment.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('test').innerHTML = html;
      })
      .catch(error => {
        console.error('Error fetching footer:', error);
      });
  });