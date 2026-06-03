const navContainer = document.getElementById('navigation');

const base = document.getElementById('base-tag');
const pathParts = location.pathname.split('/').filter(Boolean);
const repoDepth = location.hostname.endsWith('github.io') ? 1 : 0;
base.href = '/' + pathParts.slice(0, repoDepth).join('/') + '/';

if (navContainer) {
    fetch(base.href + 'Models/Shared/Navigation.html')
        .then(r => r.text())
        .then(html => {
            navContainer.innerHTML = html;
        });
}