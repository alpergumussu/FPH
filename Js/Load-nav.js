const navContainer = document.getElementById('navigation');

if (navContainer) {
    const depth = location.pathname.split('/').filter(Boolean).length - 1;
    const prefix = depth > 1 ? '../'.repeat(depth - 1) : '';

    fetch(`${prefix}Models/Shared/Navigation.html`)
        .then(r => r.text())
        .then(html => {
            navContainer.innerHTML = html;
        });
}