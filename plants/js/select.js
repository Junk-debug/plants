let select = document.getElementById("contactsSelect"),
    cityInfo = document.getElementById("cityInfo"),
    phoneInfo = document.getElementById("phoneInfo"),
    adressInfo = document.getElementById("officeAdressInfo"),
    dropdownMenu = document.querySelector(".contacts__dropdown-menu")

let yonkers = {
    city: 'Yonkers, NY',
    phone: '+1	914	678 0003',
    ['office adress']: '511 Warburton Ave',
};

let canandaigua = {
    city: 'Canandaigua, NY',
    phone: '+1	585	393 0001',
    ['office adress']: '151 Charlotte Street',
};

let sherrill = {
    city: 'Sherrill, NY',
    phone: '+1	315	908 0004',
    ['office adress']: '14 WEST Noyes BLVD',
};

let newYorkCity = {
    city: 'New York City',
    phone: '+1	212	456 0002',
    ['office adress']: '9 East 91st Street',
};

const addActiveInfo = () => {
    dropdownMenu.classList.add('contacts__dropdown-menu_active');
};

const addActiveSelect = () => {
    select.classList.add('contacts__select_active');
};

const phoneCall = () => {
    window.open(`tel:${eval(select.value).phone}`);
};

select.addEventListener('change', function(){
  cityInfo.textContent = eval(this.value).city;
  phoneInfo.textContent = eval(this.value).phone;
  adressInfo.textContent = eval(this.value)['office adress'];
  addActiveSelect();
  addActiveInfo();
});




