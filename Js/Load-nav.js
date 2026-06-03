const navContainer = document.getElementById('navigation');

if (navContainer) {
    fetch('/Models/Shared/Navigation.html')
        .then(r => r.text())
        .then(html => {
            navContainer.innerHTML = html;
        });
}