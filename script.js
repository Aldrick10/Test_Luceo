const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');

searchButton.addEventListener('click', () => {
    // Toggle visibility
    if (searchInput.classList.contains('hidden')) {
        searchInput.classList.remove('hidden');
        searchInput.classList.add('block');
        searchInput.focus(); // Optional: Focus on the input when shown
    } else {
        searchInput.classList.add('hidden');
        searchInput.classList.remove('block');
    }
});



// Fonction générique pour gérer le menu
function setupMenu(menuButtonId, dropdownMenuId, activeClass, textColor) {
    const menuButton = document.getElementById(menuButtonId);
    const dropdownMenu = document.getElementById(dropdownMenuId);

    // Vérifier si les éléments existent
    if (menuButton && dropdownMenu) {
        menuButton.addEventListener('click', () => {
            dropdownMenu.classList.toggle('hidden');
            const headerHeight = document.querySelector('header').offsetHeight;
            dropdownMenu.style.top = `${headerHeight}px`;

            // Toggle the active state for the menu button
            menuButton.classList.toggle(activeClass);

            // Change the icon dynamically
            if (menuButton.classList.contains(activeClass)) {
                menuButton.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                        stroke="currentColor" class="w-8 h-8 ${textColor}">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M6 18L18 6" />
                    </svg>`;
            } else {
                menuButton.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                        stroke="currentColor" class="w-8 h-8 ${textColor}">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5" />
                    </svg>`;
            }
        });
    } else {
        console.warn(`Menu Button or Dropdown not found for IDs: ${menuButtonId}, ${dropdownMenuId}`);
    }
}

// Configuration pour la première page
setupMenu('menuButtonW', 'dropdownMenuW', 'active', 'text-white');

// Configuration pour la deuxième page
setupMenu('menuButtonB', 'dropdownMenuB', 'active', 'text-black');






const filterToggle = document.getElementById('filterToggle');
const filterMenu = document.getElementById('filterMenu');
const arrowIcon = document.getElementById('arrowIcon');

// Fonctionnalité d'ouverture/fermeture du menu principal
filterToggle.addEventListener('click', () => {
    filterMenu.classList.toggle('hidden');
    arrowIcon.classList.toggle('rotate-180');
});

// Fonctionnalité d'ouverture/fermeture des sous-menus
document.querySelectorAll('[data-toggle="true"]').forEach(button => {
    button.addEventListener('click', () => {
        const sibling = button.nextElementSibling;
        sibling.classList.toggle('hidden');
    });

});
// Réinitialiser les champs
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
    // Réinitialiser tous les champs de texte
    document.getElementById('priceMin').value = '';
    document.getElementById('priceMax').value = '';

    // Décocher toutes les cases à cocher
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
});


function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.classList.toggle('hidden');
}