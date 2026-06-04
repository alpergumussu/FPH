const pathParts = location.pathname.split('/').filter(Boolean);
const base = pathParts.length > 1 ? '/' + pathParts[0] : '';

const navContainer = document.getElementById('navigation');

if (navContainer) {
    fetch(`${base}/Models/Shared/Navigation.html`)
        .then(r => r.text())
        .then(html => {
            navContainer.innerHTML = html.replaceAll('href="/', `href="${base}/`);

            document.getElementById('nav-toggle')?.addEventListener('click', () => {
                document.querySelector('.nav-links').classList.toggle('open');
            });
        });
}

document.querySelectorAll('a[href^="/Models/"]').forEach(a => {
    a.href = base + a.getAttribute('href');
});