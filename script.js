let animatedMid=document.getElementById("frontAnimated"),imidAnime=document.getElementById("ifrontAnimated"),icaveMountain=document.getElementById("icaveMountain"),icaveBackBack=document.getElementById("icaveBackBack"),icaveBack=document.getElementById("icaveBack"),icaveMid=document.getElementById("icaveMid"),icaveSpikes=document.getElementById("icaveSpikes"),caveMountain=document.getElementById("caveMountain"),caveBackBack=document.getElementById("caveBackBack"),caveBack=document.getElementById("caveBackFront"),caveMid=document.getElementById("caveMid"),caveSpikes=document.getElementById("caveSpikes");window.addEventListener("scroll",(function(){let e=window.scrollY;imidAnime.style.top=.2*e+"px",animatedMid.style.top=1*e+"px",icaveMountain.style.top=.15*e+"px",icaveBackBack.style.top=.12*e+"px",icaveBack.style.top=.1*e+"px",icaveMid.style.top=.13*e+"px",icaveSpikes.style.top=.08*e+"px",caveMountain.style.top=.11*e+"px",caveBackBack.style.top=.2*e+"px",caveBack.style.top=.08*e+"px",caveMid.style.top=.11*e+"px",caveSpikes.style.top=-.02*e+"px"}));const nav=document.querySelector(".nav");let lastScrollY=window.scrollY;window.addEventListener("scroll",(()=>{lastScrollY>=window.scrollY?nav.classList.remove("nav--hidden"):nav.classList.add("nav--hidden"),lastScrollY=window.scrollY}));var modals=document.getElementsByClassName("modal"),btns=document.getElementsByClassName("openmodal"),spans=document.getElementsByClassName("close");for(let e=0;e<btns.length;e++)btns[e].onclick=function(){modals[e].classList.add("modal-open")};for(let e=0;e<spans.length;e++)spans[e].onclick=function(){modals[e].classList.remove("modal-open"),modals[e].classList.add("modals-close")},window.onscroll=function(e){for(let e=0;e<modals.length;e++)modals[e].classList.remove("modal-open"),modals[e].classList.add("modals-close")},window.onclick=function(e){for(let t=0;t<modals.length;t++)e.target==modals[t]&&(modals[t].classList.remove("modal-open"),modals[t].classList.add("modals-close"))};