document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.options-menu-icon');
    const menuContent = document.querySelector('.options-menu-content');

    if (!localStorage.getItem('isAuthenticated')) {
        menuContent.style.display = 'none';
    }

    menuIcon.addEventListener('click', function() {
        if (!localStorage.getItem('isAuthenticated')) {
            alert('You must be logged in to access this menu.');
            return;
        }
        if (menuContent.style.display === 'block') {
            menuContent.style.display = 'none';
        } else {
            menuContent.style.display
