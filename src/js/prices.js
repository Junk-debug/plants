const basicsBtn = document.getElementById('basicsBtn');
const standartBtn = document.getElementById('standartBtn');
const proCareBtn = document.getElementById('proCareBtn');

const basics = document.querySelector('.basics');
const standart = document.querySelector('.standart');
const proCare = document.querySelector('.pro-care');

const basicsInfo = document.querySelector('.basicsInfo');
const standartInfo = document.querySelector('.standartInfo');
const proCareInfo = document.querySelector('.proCareInfo');

const toggleSrc = (img) => {
    if (img.src.endsWith('icons/accordion_btn.svg')) {
        img.src = 'icons/accordion_btn-dark-rotated.svg';
    } else if (img.src.endsWith('icons/accordion_btn-dark-rotated.svg')) {
        img.src = 'icons/accordion_btn.svg';
    };
};

const togglePriceInfo = (card, info, button) => {
    info.classList.toggle('price-info__content_active');
    card.classList.toggle('price-info_active');
    toggleSrc(button);
};

const hidePriceInfo = (card, info, button) => {
    info.classList.remove('price-info__content_active');
    card.classList.remove('price-info_active');
    button.src = 'icons/accordion_btn.svg';
};




basicsBtn.addEventListener('click', function() {
    togglePriceInfo(basics, basicsInfo, basicsBtn);
    hidePriceInfo(standart, standartInfo, standartBtn);
    hidePriceInfo(proCare, proCareInfo, proCareBtn);
});

standartBtn.addEventListener('click', function() {
    togglePriceInfo(standart, standartInfo, standartBtn);
    hidePriceInfo(basics, basicsInfo, basicsBtn);
    hidePriceInfo(proCare, proCareInfo, proCareBtn);
});

proCareBtn.addEventListener('click', function() {
    togglePriceInfo(proCare, proCareInfo, proCareBtn);
    hidePriceInfo(basics, basicsInfo, basicsBtn);
    hidePriceInfo(standart, standartInfo, standartBtn);
});