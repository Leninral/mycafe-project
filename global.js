    // Загрузка header
    fetch('header.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('header').innerHTML = html;
      });
  
    // Загрузка footer
    fetch('footer.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('footer').innerHTML = html;
      });