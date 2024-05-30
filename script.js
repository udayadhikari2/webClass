document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.getElementById('search-icon');
    const searchBar = document.getElementById('search-bar');
    const searchButton = document.getElementById('search-button');

    searchIcon.addEventListener('click', () => {
        if (searchBar.classList.contains('show')) {
            searchBar.classList.remove('show');
        } else {
            searchBar.classList.add('show');
        }
    });
});