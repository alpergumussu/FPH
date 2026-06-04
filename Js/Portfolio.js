const PORTFOLIO = [
  { cat: 'sport', label: 'SC Heerenveen', image:'../../Assets/Images/SCH1.png' }
];

function buildPortfolio(filter){
  const grid = document.getElementById('portfolio-grid');
  const items = filter === 'all'
    ? PORTFOLIO
    : PORTFOLIO.filter(i => i.cat === filter);

  grid.innerHTML = items.map(item => `
    <div class="p-item">
      <img class="p-img" src="${item.image}" alt="${item.label}">

      <div class="p-overlay">
        <span class="p-label">${item.label}</span>
      </div>
    </div>
  `).join('');
}

function filterPortfolio(cat,btn){
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  buildPortfolio(cat);
}

function submitForm(){
  document.getElementById('form-success').classList.add('show');
  setTimeout(()=>document.getElementById('form-success').classList.remove('show'),5000);
}

buildPortfolio('all');
