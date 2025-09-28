/* VEE CONTENT CONFIG
Place this <script> BEFORE the big VEE embed <script> so the DOM is ready before init.
Only edit the arrays. No code changes needed.
*/
(function(d){
  // ---- EDIT BELOW ----
  const heroSlides=[
    {href:"https://tictacbets.co.za/app/en-ZA/page/Promotions/deposit_bonus_&_free_spins",
     img_d:"https://img.tictacbets.co.za/GameTiles/RotatingBanners/100depositbonus.webp",
     img_m:"https://img.tictacbets.co.za/GameTiles/RotatingBanners/Mobile/tictacbets-mobile-100%25-deposit-bonus-banner-1600x500.webp",
     alt:"100% Deposit Bonus", active:false},
    {href:"https://tictacbets.co.za/page/Promotions/azeeche",
     img_d:"https://img.tictacbets.co.za/SlideshowBanners/tictacbets-web-azeeche-tournament-banner-1600x500.webp",
     img_m:"https://img.tictacbets.co.za/SlideshowBanners/Mobile/tictacbets-mobile-azeeche-tournament-banner-1600x500.webp",
     alt:"Azeeche", active:true},
    {href:"https://tictacbets.co.za/app/en-ZA/page/Promotions/drop_and_win_promo",
     img_d:"https://img.tictacbets.co.za/SlideshowBanners/tictacbets-web-drops-and-wins.webp",
     img_m:"https://img.tictacbets.co.za/GameTiles/RotatingBanners/Mobile/tictacbets-mobile-drops-and-wins%20(2).webp",
     alt:"Drops & Wins", active:false}
    // Add more objects with same keys...
  ];

  const rows={
    top10:[
      {href:"https://tictacbets.co.za/casino/slots/5402/game/pragmatic_vs20olympgold",img:"https://img.tictacbets.co.za/GameTiles/Top10Games/GOOS-no1-Top-10-games-tiles.webp",alt:"GOOS"},
      {href:"https://tictacbets.co.za/casino/slots/8009/game/vs5joker",img:"https://img.tictacbets.co.za/GameTiles/Top10Games/JJ-no2-Top-10-games-tiles.webp",alt:"JJ"}
      // ...
    ],
    newgames:[
      {href:"https://tictacbets.co.za/casino/slots/new-games",img:"https://img.tictacbets.co.za/GameTiles/NewGames/GOO1000.png",alt:"GOO 1000"},
      {href:"https://tictacbets.co.za/casino/slots/new-games",img:"https://img.tictacbets.co.za/GameTiles/NewGames/GOOSuperScatter.png",alt:"GOO Super Scatter"}
      // ...
    ],
    crash:[
      {href:"https://tictacbets.co.za/casino/slots/new-games",img:"https://img.tictacbets.co.za/GameTiles/CrashGames/Aviator.png",alt:"Aviator"},
      {href:"https://tictacbets.co.za/casino/slots/new-games",img:"https://img.tictacbets.co.za/GameTiles/CrashGames/BigBassCrash.png",alt:"Big Bass Crash"}
      // ...
    ],
    sports:[
      {href:"https://tictacbets.co.za/sportsbook/match/football",img:"https://img.tictacbets.co.za/GameTiles/Sports-Tile/Soccer.png",alt:"Soccer"},
      {href:"https://tictacbets.co.za/sportsbook/match/tennis",img:"https://img.tictacbets.co.za/GameTiles/Sports-Tile/Tennis.png",alt:"Tennis"}
      // ...
    ],
    providers:[
      {href:"https://tictacbets.co.za/casino/slots/providers/spribe",img:"https://img.tictacbets.co.za/GameTiles/ProvidersTile/Spribe.png",alt:"Spribe"},
      {href:"https://tictacbets.co.za/casino/slots/providers/pragmatic",img:"https://img.tictacbets.co.za/GameTiles/ProvidersTile/Pragmatic.png",alt:"Pragmatic"}
      // ...
    ]
  };

  const promos={
    newCustomer:[
      {href:"https://tictacbets.co.za/app/en-ZA/page/Promotions/deposit_bonus_&_free_spins",img:"https://img.tictacbets.co.za/Banners/Promotions_Page_FirstDeposit_Thumbnail.webp",alt:"100% First Deposit Bonus"},
      {href:"https://tictacbets.co.za/app/en-ZA/page/Promotions/refer_a_friend",img:"https://raw.githubusercontent.com/Tictacbets/promotions-images/main/Refer%20a%20Friend.png",alt:"Refer-a-Friend"}
      // ...
    ],
    existing:[
      {href:"https://tictacbets.co.za/page/promotions/sizzling-september",img:"https://img.tictacbets.co.za/Promotions/Sizzlingseptember_Thumbnail.jpg",alt:"Sizzling September"},
      {href:"https://tictacbets.co.za/page/Promotions/bells-of-fortune",img:"https://img.tictacbets.co.za/Promotions/Thumbnail_BELLS_OF_FORTUNE.jpg",alt:"Bells Of Fortune"}
      // ...
    ]
  };
  // ---- EDIT ABOVE ----

  function el(tag,html){const e=d.createElement(tag); e.innerHTML=html; return e.firstElementChild;}

  function renderHero(){
    const host=d.querySelector('#ve-hero .ve-slides'); if(!host) return;
    host.innerHTML='';
    heroSlides.forEach((s)=>{
      const node=el('div',`<div class="ve-slide${s.active?' is-active':''}"><a href="${s.href}"><img class="ve-img-d" src="${s.img_d}" alt="${s.alt||''}"><img class="ve-img-m" src="${s.img_m||s.img_d}" alt="${s.alt||''}"></a></div>`);
      host.appendChild(node);
    });
  }

  function renderRow(selector,items){
    const row=d.querySelector(selector); if(!row) return;
    row.innerHTML = items.map(i=>`<a class="ve-card" href="${i.href}"><img src="${i.img}" alt="${i.alt||''}"></a>`).join('');
  }

  function renderPromos(){
    const grids=d.querySelectorAll('#ve-promotions .ve-grid'); if(grids.length<2) return;
    grids[0].innerHTML = promos.newCustomer.map(i=>`<a class="ve-card ve-promo" href="${i.href}"><img src="${i.img}" alt="${i.alt||''}"></a>`).join('');
    grids[1].innerHTML = promos.existing.map(i=>`<a class="ve-card ve-promo" href="${i.href}"><img src="${i.img}" alt="${i.alt||''}"></a>`).join('');
  }

  // Build immediately on parse so main embed picks it up
  try{
    renderHero();
    renderRow('#ve-home .ve-section:nth-of-type(1) .ve-row', rows.top10);     // TOP 10
    renderRow('#ve-home .ve-section:nth-of-type(2) .ve-row', rows.newgames);  // NEW GAMES
    renderRow('#ve-home .ve-section:nth-of-type(3) .ve-row', rows.crash);     // CRASH
    renderRow('#ve-home .ve-section:nth-of-type(4) .ve-row', rows.sports);    // SPORTS
    renderRow('#ve-home .ve-section:nth-of-type(5) .ve-row', rows.providers); // PROVIDERS
    renderPromos();
  }catch(_){/* no-op */}
})(document);
