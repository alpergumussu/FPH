const navContainer = document.getElementById('navigation');

const pathParts = location.pathname.split('/').filter(Boolean);
const repoDepth = location.hostname.endsWith('github.io') ? 1 : 0;
const basePath = '/' + pathParts.slice(0, repoDepth).join('/') + '/';

if (navContainer) {
    fetch(basePath + 'Models/Shared/Navigation.html')
        .then(r => r.text())
        .then(html => {
            navContainer.innerHTML = html;
        });
}