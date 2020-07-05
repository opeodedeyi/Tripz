var toggleButton = document.querySelector('.openNav');
var mobileNav = document.querySelector('.mobile-navigation');
var backdrop = document.querySelector('.backdrop');
var closeButton = document.querySelector('.close-mobile-nav');
var today = new Date();
var year = today.getFullYear();


toggleButton.addEventListener('click', function() {
    console.log('clicked toggle')
    mobileNav.style.display = 'flex';
    backdrop.style.display = 'block';
})

backdrop.addEventListener('click', function() {
    console.log('clicked backdrop')
    mobileNav.style.display = 'none';
    backdrop.style.display = 'none';
})

closeButton.addEventListener('click', function() {
    console.log('clicked cancle button')
    mobileNav.style.display = 'none';
    backdrop.style.display = 'none';
})

