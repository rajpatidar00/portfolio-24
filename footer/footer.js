// Footer
document.addEventListener("DOMContentLoaded", function() {
    fetch('./footer/footer.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('footer').innerHTML = html;
      })
      .catch(error => {
        console.error('Error fetching footer:', error);
      });
  });