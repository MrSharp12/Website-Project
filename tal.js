'use strict'

const NAV = document.querySelector('#mainNav');
const TOP_NAV_BAR = NAV.offsetTop; //grabs top of the navbar on page load
let scroll = new SmoothScroll('a[href*="#"]'); //links to smooth-scroll.js
let cartTotal = 0;

const submitInfo = () => document.getElementById('cartCount').value = ++cartTotal;
const stickyNav = ()  => {
    if(window.scrollY >= TOP_NAV_BAR) {
        document.body.style.paddingTop = NAV.offsetHeight + 'px';
        document.body.classList.add('sticky-nav');
    } else {
        document.body.style.paddingTop = 0; //this takes care of the extra space at top, prevents site from jumping up
        document.body.classList.remove('sticky-nav');
    }
}

window.addEventListener('scroll', stickyNav);






    
    

