const pageName = window.parent.location.pathname.match(/\/(\w+)\.html$/)[1]
const navName = pageName.startsWith('solution') ? 'solutions' : pageName;

document
    .getElementById('nav')
    .setAttribute('class', pageName === 'start' ? 'dark' : 'light');

document
    .getElementById(navName)
    .classList
    .add('current-nav-item');