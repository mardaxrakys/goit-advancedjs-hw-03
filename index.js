import{S as m,i as l}from"./assets/vendor-B07T6_gy.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const u=i=>i.reduce((t,r)=>t+`
            <li class="gallery-card">
              <a class="gallery-img-orig" href="${r.largeImageURL}">
                <img class="gallery-img" src="${r.webformatURL}" alt="${r.tags}" />
                <div class="img-data">
                 <div class="img-data-column img-likes">
                  <p class="img-title">Likes</p>
                  <p class="img-value">${r.likes}</p>
                 </div>
                 <div class="img-data-column img-views">
                  <p class="img-title">Views</p>
                  <p class="img-value">${r.views}</p>
                 </div>
                 <div class="img-data-column img-comments">
                  <p class="img-title">Comments</p>
                  <p class="img-value">${r.comments}</p>
                 </div>
                  <div class="img-data-column img-downloads">
                  <p class="img-title">Downloads</p>
                  <p class="img-value">${r.downloads}</p>
                 </div>
                </div>
              </a>
            </li>
           `,""),d=i=>fetch(`https://pixabay.com/api/?${i}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}),g=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),n=document.querySelector(".js-loader");let p=new m(".gallery-card a",{captionsData:"alt",captionDelay:250});const f=i=>{i.preventDefault();const t=i.currentTarget.elements.user_query.value.trim();if(t===""){l.error({message:"Search value should not be empty!",position:"topRight"});return}const r=new URLSearchParams({key:"47600623-616adcc60326fea30dcc03763",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});n.classList.remove("is-hidden"),d(r).finally(()=>{n.classList.add("is-hidden")}).then(a=>{if(a.total===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="";return}c.innerHTML=u(a.hits),p.refresh()}).catch(a=>console.log(a))};g.addEventListener("submit",f);
//# sourceMappingURL=index.js.map
