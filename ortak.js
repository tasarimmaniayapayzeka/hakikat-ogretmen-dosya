(function(){
  var d=document.documentElement; d.classList.add('js');
  // Bölümler paneli
  var b=document.getElementById('bolBtn'), p=document.getElementById('bolPanel');
  if(b&&p){
    function kapat(){p.hidden=true;b.setAttribute('aria-expanded','false')}
    b.addEventListener('click',function(e){e.stopPropagation();var acik=p.hidden;p.hidden=!acik;b.setAttribute('aria-expanded',String(acik));if(acik){var a=p.querySelector('a[aria-current]')||p.querySelector('a');a&&a.focus()}});
    document.addEventListener('click',function(e){if(!p.hidden&&!p.contains(e.target))kapat()});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!p.hidden){kapat();b.focus()}});
  }
  // Ekran altındaki öğeler girince süzülür; ilk ekrandakiler hiç gizlenmez
  var az=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!az&&'IntersectionObserver' in window){
    var els=[].slice.call(document.querySelectorAll('.rv'));
    var h=window.innerHeight;
    els.forEach(function(el){if(el.getBoundingClientRect().top>h*0.92)el.classList.add('bekle')});
    var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.remove('bekle');io.unobserve(en.target)}})},{rootMargin:'0px 0px -8% 0px'});
    els.forEach(function(el){if(el.classList.contains('bekle'))io.observe(el)});
  }
})();
