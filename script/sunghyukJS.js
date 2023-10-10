
    const svgButton = document.querySelector('.svg-button');
    const name2 = document.querySelector('.name2');

    svgButton.addEventListener('mouseenter', () => {
        name2.style.display = 'block';
    });

    svgButton.addEventListener('mouseleave', () => {
        name2.style.display = 'none';
    });

