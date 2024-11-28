const menuItems = document.querySelectorAll('.nav-menu li a');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove 'active' from all menu items
        menuItems.forEach(link => link.classList.remove('active'));
        
        // Add 'active' to the clicked menu item
        item.classList.add('active');
    });
});