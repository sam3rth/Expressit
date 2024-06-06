document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.options-menu-icon');
    const menuContent = document.querySelector('.options-menu-content');

    menuIcon.addEventListener('click', function() {
        if (menuContent.style.display === 'block') {
            menuContent.style.display = 'none';
        } else {
            menuContent.style.display = 'block';
        }
    });

    document.addEventListener('click', function(event) {
        if (!menuIcon.contains(event.target) && !menuContent.contains(event.target)) {
            menuContent.style.display = 'none';
        }
    });
});
