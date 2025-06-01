const siteModel = [
    { type: 'section', title: 'Добро пожаловать', content: 'Лучшее кафе в городе!' },
    { type: 'footer', text: '© 2025 MyCafe' }
  ];

 
  
 
  
  function createSection(title, content) {
    const section = document.createElement('section');
    const h2 = document.createElement('h2');
    h2.textContent = title;
    const p = document.createElement('p');
    p.textContent = content;
    section.appendChild(h2);
    section.appendChild(p);
    return section;
  }
  
  function createFooter(text) {
    const footer = document.createElement('footer');
    footer.textContent = text;
    return footer;
  }

  function renderSite(model, container) {
    container.innerHTML = ''; // очищаем контейнер
    model.forEach(block => {
      let element;
      switch(block.type) {
        case 'section':
          element = createSection(block.title, block.content);
          break;
        case 'footer':
          element = createFooter(block.text);
          break;
        default:
          element = document.createElement('div');
          element.textContent = 'Неизвестный блок';
      }
      container.appendChild(element);
    });
  }
  
  renderSite(siteModel, document.getElementById('site'));