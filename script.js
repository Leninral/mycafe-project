const siteModel = [
    { type: 'banner', src: 'assets/banner2.webp' },
    { type: 'section', title: 'Добро пожаловать', content: 'Лучшее кафе в городе!' },
];


function createImage(source) {
    const img = document.createElement('img');
    img.src = source;
    return img;
}


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

function renderSite(model, container) {
    container.innerHTML = ''; // очищаем контейнер
    model.forEach(block => {
        let element;
        switch (block.type) {
            case 'section':
                element = createSection(block.title, block.content);
                break;
            case 'banner':
                element = createImage(block.src);
            default:
                element = document.createElement('div');
                element.textContent = 'Неизвестный блок';
        }
        container.appendChild(element);
    });
}

renderSite(siteModel, document.getElementById('site'));