//hamburger nemu
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#menu').onclick = () => {navbarNav.classList.toggle('active');
};

//search form
const searchForm = document.querySelector('.search-form');
const serchBox = document.querySelector('#search-box');

document.querySelector('#search-btn') .onclick = (e) => {
    searchForm.classList.toggle('active');
    serchBox.focus();
    e.preventDefault();
};

//shop cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-btn').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
};


// tutup 
const menu = document.querySelector('#menu');
const sb = document.querySelector('#search-btn');
const sc = document.querySelector('#shopping-cart-btn');
document.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
});


// modal box
const itemModal = document.querySelector('#item-detail-modal');
const itemButton = document.querySelector('.detail-btn');

itemButton.onclick = (e) => {
    itemModal.style.display = 'flex';
    e.preventDefault();
};

//close modal
document.querySelector('.close-icon').onclick = (e) => {
    itemModal.style.display = 'none';
    e.preventDefault();
};

const modal = document.querySelector('#item-detail-modal');
window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
};