// This is the main JavaScript file that initializes the application and handles general functionality.

document.addEventListener('DOMContentLoaded', () => {
    console.log('OmniHub is ready!');

    // Initialize theme switcher
    initThemeSwitcher();

    // Initialize search functionality
    initSearch();

    // Load user preferences
    loadUserPreferences();
});

function initThemeSwitcher() {
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        saveUserPreference('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });
}

function initSearch() {
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', () => {
        const query = searchInput.value;
        // Call search function from search.js
        performSearch(query);
    });
}

function loadUserPreferences() {
    const theme = localStorage.getItem('theme') || 'light';
    document.body.classList.toggle('dark-mode', theme === 'dark');
}

function saveUserPreference(key, value) {
    localStorage.setItem(key, value);
}