/* ================= DADOS DA FROTA ================= */
const vehicles = [
  {cat:'furgoes', catLabel:'Furgão / Van', brand:'Mercedes-Benz', model:'Sprinter 313', sub:'Baú refrigerado com plataforma', year:'2018', img:'img/sprinter-313-2018.jpg',
    specs:[['Quilometragem','220.000 km'],['Implemento','Baú refrigerado 4,20 m'],['Recurso','Plataforma elevatória'],['Uso','Distribuição refrigerada']]},
  {cat:'furgoes', catLabel:'Furgão / Van', brand:'Mercedes-Benz', model:'Sprinter 315', sub:'Furgão extra longo', year:'2024', img:'img/sprinter-315-2024.jpg',
    specs:[['Ano','2024'],['Carroceria','Furgão de fábrica'],['Versão','Extra longo'],['Uso','Carga seca / e-commerce']]},
  {cat:'furgoes', catLabel:'Furgão / Van', brand:'Mercedes-Benz', model:'Sprinter Van 415', sub:'Transporte de passageiros · 16 lugares', year:'2019', img:'img/sprinter-van-415-2019.jpg',
    specs:[['Ano','2019'],['Capacidade','16 lugares'],['Acesso','Adaptada PCD'],['Uso','Fretamento / transporte']]},

  {cat:'leves', catLabel:'Caminhão Leve', brand:'Mercedes-Benz', model:'Accelo 815', sub:'Caçamba basculante', year:'2022', img:'img/accelo-815-2022-cacamba.jpg',
    specs:[['Quilometragem','107.000 km'],['Implemento','Caçamba 4 m'],['Uso','Construção civil'],['Tração','4x2']]},
  {cat:'leves', catLabel:'Caminhão Leve', brand:'Mercedes-Benz', model:'Accelo 817/39', sub:'Baú 6 marchas, completo', year:'2023', img:'img/accelo-817-39-2023.jpg',
    specs:[['Implemento','Baú 5,20 m'],['Câmbio','6 marchas'],['Opcionais','Completo'],['Uso','Distribuição urbana']]},
  {cat:'leves', catLabel:'Caminhão Leve', brand:'Mercedes-Benz', model:'Accelo 815', sub:'Baú de alumínio', year:'2018', img:'img/accelo-815-2018.jpg',
    specs:[['Quilometragem','261.000 km'],['Implemento','Baú 6,2 x 2,2 x 2,2 m'],['Opcionais','Completo'],['Uso','Distribuição urbana']]},
  {cat:'leves', catLabel:'Caminhão Leve', brand:'Volkswagen', model:'Volkswagen 10-160', sub:'Sider com ar condicionado', year:'2016', img:'img/volks-10160-2016.jpg',
    specs:[['Quilometragem','289.000 km'],['Implemento','Sider 5,5 m'],['Conforto','Ar condicionado'],['Uso','Entregas urbanas']]},
  {cat:'leves', catLabel:'Caminhão Leve', brand:'Ford', model:'Ford Cargo 816', sub:'Sider', year:'2018', img:'img/ford-cargo-816-2018.jpg',
    specs:[['Quilometragem','600.000 km'],['Implemento','Sider 5 m'],['Uso','Distribuição urbana'],['Tração','4x2']]},
  {cat:'leves', catLabel:'Caminhão Leve', brand:'Ford', model:'Ford Cargo 816', sub:'Sider novo', year:'2015', img:'img/ford-cargo-816-2015.jpg',
    specs:[['Quilometragem','203.000 km'],['Implemento','Sider (lona nova)'],['Uso','Distribuição urbana'],['Tração','4x2']]},

  {cat:'medios', catLabel:'Caminhão Médio', brand:'Mercedes-Benz', model:'MB 1718', sub:'Sider · 2º dono', year:'2011', img:'img/mb-1718-2011.jpg',
    specs:[['Quilometragem','394.000 km'],['Implemento','Sider 6,5 m'],['Histórico','2º dono'],['Uso','Distribuição regional']]},
  {cat:'medios', catLabel:'Caminhão Médio', brand:'Mercedes-Benz', model:'Atego 1419', sub:'Chassi cabine estendida', year:'2014', img:'img/atego-1419-2014.jpg',
    specs:[['Cabine','Estendida'],['Preparado para','Baú 7,5 m'],['Uso','Distribuição regional'],['Tração','4x2']]},
  {cat:'medios', catLabel:'Caminhão Médio', brand:'Mercedes-Benz', model:'Atego 2426', sub:'Baú', year:'2016', img:'img/atego-2426-2016.jpg',
    specs:[['Implemento','Baú 8,5 m'],['Tração','6x2'],['Uso','Distribuição regional'],['Ano','2016']]},
  {cat:'medios', catLabel:'Caminhão Médio', brand:'Mercedes-Benz', model:'Atego 2425', sub:'Carroceria de carga · único dono', year:'2011', img:'img/atego-2425-2011.jpg',
    specs:[['Quilometragem','478.000 km'],['Implemento','Carroceria 8 m'],['Histórico','Único dono'],['Tração','6x2']]},
  {cat:'medios', catLabel:'Caminhão Médio', brand:'Mercedes-Benz', model:'Atego 2426 6x2', sub:'Caçamba basculante', year:'2019', img:'img/atego-2426-6x2-2019.jpg',
    specs:[['Quilometragem','420.000 km'],['Implemento','Caçamba 12 m³'],['Tração','6x2'],['Uso','Construção civil']]},

  {cat:'pesados', catLabel:'Cavalo Mecânico', brand:'Mercedes-Benz', model:'Actros 2651 S', sub:'Cavalo mecânico', year:'2020', img:'img/actros-2651s-2020.jpg',
    specs:[['Quilometragem','250.000 km'],['Tração','6x4'],['Cabine','Leito teto alto'],['Uso','Transporte rodoviário']]},
  {cat:'pesados', catLabel:'Cavalo Mecânico', brand:'Mercedes-Benz', model:'Axor 2544 LS', sub:'Cavalo mecânico', year:'2022', img:'img/axor-2544ls-2022.jpg',
    specs:[['Quilometragem','290.000 km'],['Tração','6x2'],['Cabine','Leito'],['Uso','Transporte rodoviário']]},
  {cat:'pesados', catLabel:'Cavalo Mecânico', brand:'Mercedes-Benz', model:'Axor 2544', sub:'Cavalo mecânico', year:'2022', img:'img/axor-2544-2022.jpg',
    specs:[['Quilometragem','420.000 km'],['Tração','6x2'],['Cabine','Leito'],['Uso','Transporte rodoviário']]},
  {cat:'pesados', catLabel:'Cavalo Mecânico', brand:'Mercedes-Benz', model:'Actros 2548', sub:'Cavalo mecânico · completo', year:'2023', img:'img/actros-2548-2023.jpg',
    specs:[['Quilometragem','63.000 km'],['Opcionais','Completo'],['Cabine','Leito teto alto'],['Uso','Transporte rodoviário']]},
  {cat:'pesados', catLabel:'Cavalo Mecânico', brand:'Mercedes-Benz', model:'Actros 2653', sub:'Cavalo mecânico 6x4 · completo', year:'2023', img:'img/actros-2653-6x4-2023.jpg',
    specs:[['Quilometragem','113.000 km'],['Tração','6x4'],['Opcionais','Completo'],['Uso','Transporte pesado / rodoviário']]},
];

const catNames = {furgoes:'Furgões e Vans · Sprinter', leves:'Caminhões Leves · Accelo, VW e Cargo 816', medios:'Caminhões Médios · Atego e MB 1718', pesados:'Cavalos Mecânicos · Axor e Actros'};
const catOrder = ['furgoes','leves','medios','pesados'];

/* ================= RENDER ESTOQUE (carrossséis) ================= */
const fleetGroupsEl = document.getElementById('fleetGroups');

function cardHTML(v, idx){
  const specsHTML = v.specs.map(s=>`<li>${s[0]}<b>${s[1]}</b></li>`).join('');
  return `
  <div class="card" data-cat="${v.cat}">
    <div class="thumb" data-idx="${idx}">
      <span class="year">${v.year}</span>
      <img src="${v.img}" alt="${v.model} ${v.year}" loading="lazy">
      <span class="zoom">⤢</span>
    </div>
    <div class="body">
      <h4>${v.model}</h4>
      <p class="sub">${v.sub}</p>
      <ul class="specs">${specsHTML}</ul>
      <div class="foot"><span>${v.brand}</span><a class="whats" href="#contato">Consultar →</a></div>
    </div>
  </div>`;
}

catOrder.forEach(cat=>{
  const items = vehicles.map((v,i)=>({...v, idx:i})).filter(v=>v.cat===cat);
  const group = document.createElement('div');
  group.className = 'fleet-group';
  group.dataset.group = cat;
  group.innerHTML = `
    <div class="fleet-group-title"><h3>${catNames[cat]}</h3><span class="count">${items.length} unidades</span></div>
    <div class="carousel">
      <button class="carousel-btn prev" aria-label="Anterior">‹</button>
      <div class="carousel-track">${items.map(v=>cardHTML(v, v.idx)).join('')}</div>
      <button class="carousel-btn next" aria-label="Próximo">›</button>
    </div>`;
  fleetGroupsEl.appendChild(group);
});

/* filtro por categoria */
const filterBtns = document.querySelectorAll('#filters button');
const groups = document.querySelectorAll('.fleet-group');
filterBtns.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    filterBtns.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.f;
    groups.forEach(g=>{ g.style.display = (f==='all' || g.dataset.group===f) ? '' : 'none'; });
  });
});

/* carrosséis: setas + arrastar com mouse (drag) além do swipe nativo em touch */
document.querySelectorAll('.carousel').forEach(car=>{
  const track = car.querySelector('.carousel-track');
  const prev = car.querySelector('.prev');
  const next = car.querySelector('.next');
  const step = ()=> track.querySelector('.card').offsetWidth + 22;
  prev.addEventListener('click', ()=> track.scrollBy({left:-step()*2, behavior:'smooth'}));
  next.addEventListener('click', ()=> track.scrollBy({left:step()*2, behavior:'smooth'}));

  let isDown=false, startX=0, scrollStart=0, moved=false;
  track.addEventListener('mousedown', e=>{
    isDown=true; moved=false; track.classList.add('dragging');
    startX = e.pageX; scrollStart = track.scrollLeft;
  });
  window.addEventListener('mouseup', ()=>{ isDown=false; track.classList.remove('dragging'); });
  window.addEventListener('mousemove', e=>{
    if(!isDown) return;
    e.preventDefault();
    const dx = e.pageX - startX;
    if(Math.abs(dx)>4) moved=true;
    track.scrollLeft = scrollStart - dx;
  });
  // impede clique no card logo após um arraste
  track.addEventListener('click', e=>{ if(moved){ e.stopPropagation(); e.preventDefault(); moved=false; } }, true);
});

/* ================= HERO SLIDER ================= */
const heroPicks = [7, 15, 4, 10, 16]; // índices: Actros 2548, Actros 2651S, Accelo 817/39, Actros 2653, Axor 2544
const heroSlidesEl = document.getElementById('heroSlides');
const heroDotsEl = document.getElementById('heroDots');
const heroNumEl = document.getElementById('heroNum');

heroPicks.forEach((idx,i)=>{
  const v = vehicles[idx];
  const slide = document.createElement('div');
  slide.className = 'hero-slide' + (i===0 ? ' active' : '');
  slide.innerHTML = `<div class="ph"><img src="${v.img}" alt="${v.model}"></div>`;
  heroSlidesEl.appendChild(slide);
  const dot = document.createElement('button');
  dot.className = i===0 ? 'active' : '';
  dot.addEventListener('click', ()=> goHero(i));
  heroDotsEl.appendChild(dot);
});

let heroIdx = 0;
let heroTimer;
const heroSlideEls = ()=> document.querySelectorAll('.hero-slide');
const heroDotEls = ()=> document.querySelectorAll('.hero-dots button');

function goHero(i){
  const slides = heroSlideEls(), dots = heroDotEls();
  slides[heroIdx].classList.remove('active');
  dots[heroIdx].classList.remove('active');
  heroIdx = (i + heroPicks.length) % heroPicks.length;
  slides[heroIdx].classList.add('active');
  dots[heroIdx].classList.add('active');
  heroNumEl.textContent = String(heroIdx+1).padStart(2,'0');
  restartHeroTimer();
}
function restartHeroTimer(){
  clearInterval(heroTimer);
  heroTimer = setInterval(()=> goHero(heroIdx+1), 5500);
}
document.getElementById('heroPrev').addEventListener('click', ()=> goHero(heroIdx-1));
document.getElementById('heroNext').addEventListener('click', ()=> goHero(heroIdx+1));
restartHeroTimer();

/* swipe no hero (touch) */
(function(){
  const hero = document.getElementById('heroSlider');
  let sx=0;
  hero.addEventListener('touchstart', e=> sx = e.touches[0].clientX, {passive:true});
  hero.addEventListener('touchend', e=>{
    const dx = e.changedTouches[0].clientX - sx;
    if(Math.abs(dx) > 40) goHero(heroIdx + (dx<0?1:-1));
  }, {passive:true});
})();

/* ================= FICHA TÉCNICA TABS ================= */
const techBtns = document.querySelectorAll('#techTabs button');
const panels = document.querySelectorAll('.tech-panel');
techBtns.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    techBtns.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    panels.forEach(p=>p.classList.toggle('active', p.dataset.p===btn.dataset.t));
  });
});

/* ================= LIGHTBOX / GALERIA ESTILO EXPOSIÇÃO ================= */
const lightbox = document.getElementById('lightbox');
const lbSlidesEl = document.getElementById('lbSlides');
const lbCountEl = document.getElementById('lbCount');
let lbIdx = 0;

function lbSlideHTML(v){
  const specsHTML = v.specs.map(s=>`<li>${s[0]}<b>${s[1]}</b></li>`).join('');
  return `
  <div class="lb-slide">
    <div class="lb-photo"><img src="${v.img}" alt="${v.model}"></div>
    <div class="lb-info">
      <span class="cat">${v.catLabel} · ${v.year}</span>
      <h3>${v.model}</h3>
      <p class="sub">${v.sub}</p>
      <ul class="specs">${specsHTML}</ul>
      <a class="btn btn-solid" href="#contato" onclick="closeLightbox()">Consultar disponibilidade</a>
    </div>
  </div>`;
}

function renderLightboxSlide(){
  lbSlidesEl.innerHTML = lbSlideHTML(vehicles[lbIdx]);
  requestAnimationFrame(()=> lbSlidesEl.querySelector('.lb-slide').classList.add('active'));
  lbCountEl.textContent = `${String(lbIdx+1).padStart(2,'0')} / ${String(vehicles.length).padStart(2,'0')} — ${vehicles[lbIdx].model}`;
}

function openLightbox(idx){
  lbIdx = idx;
  renderLightboxSlide();
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox(){
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}
function lbGo(delta){
  lbIdx = (lbIdx + delta + vehicles.length) % vehicles.length;
  renderLightboxSlide();
}

document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbPrev').addEventListener('click', ()=> lbGo(-1));
document.getElementById('lbNext').addEventListener('click', ()=> lbGo(1));
lightbox.addEventListener('click', e=>{ if(e.target===lightbox) closeLightbox(); });
document.addEventListener('keydown', e=>{
  if(!lightbox.classList.contains('open')) return;
  if(e.key==='Escape') closeLightbox();
  if(e.key==='ArrowRight') lbGo(1);
  if(e.key==='ArrowLeft') lbGo(-1);
});
// swipe touch na galeria
(function(){
  let sx=0;
  const stage = document.getElementById('lbStage');
  stage.addEventListener('touchstart', e=> sx = e.touches[0].clientX, {passive:true});
  stage.addEventListener('touchend', e=>{
    const dx = e.changedTouches[0].clientX - sx;
    if(Math.abs(dx) > 50) lbGo(dx<0?1:-1);
  }, {passive:true});
})();

// delega clique nas miniaturas (elas são geradas dinamicamente)
fleetGroupsEl.addEventListener('click', e=>{
  const thumb = e.target.closest('.thumb');
  if(!thumb) return;
  openLightbox(parseInt(thumb.dataset.idx,10));
});