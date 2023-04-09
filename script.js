let menuBtn = document.querySelector('.menu-btn');
let mobileMenu= document.querySelector('.mobile-menu');
menuBtn.addEventListener('click', function(){
	mobileMenu.classList.toggle('active');
})