const toggleContainer = document.getElementById('toggle-container');
const hamburger1 = document.querySelector('.cross-1');
const hamburger2 = document.querySelector('.cross-none');
const hamburger3 = document.querySelector('.cross-2');
const sideNavBackground = document.getElementById('side-nav-section');
const navCloseOverlay = document.getElementById('nav-close-overlay');
const sideNav = document.getElementById('side-nav');
const navCloseBtn = document.querySelector('.close-btn');

toggleContainer.addEventListener('click', function(){
  hamburger1.id = (hamburger1.id === 'hamburger-1') ? '' : 'hamburger-1';
  hamburger2.id = (hamburger2.id === 'hamburger-2') ? '' : 'hamburger-2';
  hamburger3.id = (hamburger3.id === 'hamburger-3') ? '' : 'hamburger-3';
  navCloseOverlay.style.pointerEvents = 'all'
  sideNavBackground.style.opacity = '1'
  sideNavBackground.style.pointerEvents = "all"
  sideNav.style.left = '0%'
})

function navClose(){
  hamburger1.id = (hamburger1.id === 'hamburger-1') ? '' : 'hamburger-1';
  hamburger2.id = (hamburger2.id === 'hamburger-2') ? '' : 'hamburger-2';
  hamburger3.id = (hamburger3.id === 'hamburger-3') ? '' : 'hamburger-3';
  sideNavBackground.style.opacity = '0'
  sideNavBackground.style.pointerEvents = "none"
  sideNav.style.left = '-100%'
  navCloseOverlay.style.pointerEvents = 'none'
}