



const btnMenu = document.querySelector(".hamburger");
const menuItem = document.querySelectorAll('.nav-menu__list-item')
const menu = document.querySelector(".nav-menu");
const toggleMenu = function () {
    menu.classList.toggle("nav-menu_active");
    btnMenu.classList.toggle('hamburger_active');
}

btnMenu.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
});

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        toggleMenu();
    })
})

document.addEventListener("click", function (e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == btnMenu;
    const menu_is_active = menu.classList.contains("nav-menu_active");

    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu();
    }
});