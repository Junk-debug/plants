const gardensBtn = document.querySelector(".gardens-btn");
const lawnBtn = document.querySelector(".lawn-btn");
const plantingBtn = document.querySelector(".planting-btn");

const cards = document.querySelectorAll(".service__service-card");
const gardens = document.querySelectorAll(".gardens");
const planting = document.querySelectorAll(".planting");
const lawn = document.querySelectorAll(".lawn");

// переключение кнопки
const toggleButton = (button) => button.classList.toggle('button_active');
//переключение блюра
function turnOnBlurness(el) {
    el.forEach(el => {
        el.classList.add('service__service-card_blured');
    });
}
function disableBlurness(el) {
    el.forEach(el => {
        el.classList.remove('service__service-card_blured');
    });
}
//установка блюра
function setBlur(el, isBlur) {
    if (isBlur) {
        turnOnBlurness(el);
    } else {
        disableBlurness(el);
    };
}

//обновление блюра и кнопок
function updateBlur() {
    let gardensActive = gardensBtn.classList.contains('button_active');
    let lawnActive = lawnBtn.classList.contains('button_active');
    let plantingActive = plantingBtn.classList.contains('button_active');
    //если три кнопочки активны то выключаем их
    if (gardensActive && plantingActive && lawnActive) {
        toggleButton(gardensBtn);
        toggleButton(lawnBtn);
        toggleButton(plantingBtn);
    } else if (!(gardensActive || plantingActive || lawnActive)){
        gardensActive = true;
        plantingActive = true;
        lawnActive = true;
    }

    setBlur(gardens, !gardensActive);
    setBlur(lawn, !lawnActive);
    setBlur(planting, !plantingActive);
}



gardensBtn.addEventListener('click', function(e) {
    toggleButton(gardensBtn);
    updateBlur();
});

lawnBtn.addEventListener('click', function(e) {
    toggleButton(lawnBtn);
    updateBlur();
});

plantingBtn.addEventListener('click', function(e) {
    toggleButton(plantingBtn);
    updateBlur();
});



