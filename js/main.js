const cartBtn = document.querySelector('#cartBtn');
const modal = document.querySelector('.modal');
const close = document.querySelector('.modal_close');

cartBtn.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal(){
	modal.classList.toggle('is-open');
}

new WOW().init();