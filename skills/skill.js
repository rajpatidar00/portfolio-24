// skills 
 document.addEventListener("DOMContentLoaded", function() {
    fetch('./skills/skill.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('skills').innerHTML = html;
      })
      .catch(error => {
        console.error('Error fetching footer:', error);
      });
  });
  