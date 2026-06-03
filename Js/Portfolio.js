const PORTFOLIO = [
  {cat:'product',label:'Vleesrolletjes'},
  {cat:'product',label:'Saus & kruiden'},
  {cat:'sport',label:'SC Heerenveen'},
  {cat:'portret',label:'Directieportret'},
  {cat:'groep',label:'Teamfoto 2024'},
  {cat:'video',label:'Bedrijfsfilm'},
  {cat:'product',label:'Accessoires'},
  {cat:'portret',label:'Kinderfoto'},
  {cat:'sport',label:'Wielrennen'},
];

function buildPortfolio(filter){
  const grid=document.getElementById('portfolio-grid');
  const items=filter==='all'?PORTFOLIO:PORTFOLIO.filter(i=>i.cat===filter);
  grid.innerHTML=items.map((item,i)=>`
    <div class="p-item ${i===0&&filter==='all'?'wide':''}">
      <div class="p-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="4" width="18" height="14" rx="2"/><circle cx="12" cy="11" r="3"/></svg></div>
      <div class="p-overlay"><span class="p-label">${item.label}</span></div>
    </div>`).join('');
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
