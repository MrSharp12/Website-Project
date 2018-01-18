'use strict'

const NAV = document.querySelector('#mainNav');//gets the nav element
const TOP_NAV_BAR = NAV.offsetTop; //gets the distance between top of screen and top of nav element
let scroll = new SmoothScroll('a[href*="#"]'); //links to smooth-scroll.js
let cartTotal = 0;

const submitInfo = () => document.getElementById('cartCount').value = ++cartTotal;//increases cart total by one, prints to DOM
const stickyNav = ()  => {
    if(window.scrollY >= TOP_NAV_BAR) {//once window scrolls down to top of nav bar...
        //eliminates scroll jump by adding padding to the top
        //padding equals viewable height of the NAV const value in pixels
        document.body.style.paddingTop = NAV.offsetHeight + 'px';
        document.body.classList.add('sticky-nav');//adds sticky nav class to nav & logo element
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('sticky-nav');
    }
}

window.addEventListener('scroll', stickyNav);//activates the sticky nav process on scroll






    
    

