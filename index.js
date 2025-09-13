import{a as p,S as y,i}from"./assets/vendor-Bn-_rAeD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function m(l){return p.get("https://pixabay.com/api/",{params:{key:"52236687-26797aae28fcaf2822f6b1bf4",q:l,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(a=>a.data.hits)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader");function d(l){const s=l.map(t=>`
        <li class="gallery-item">
            <a href="${t.largeImageURL}">
                <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}"/>
            </a>
            <div class="gallery-wrap">
            <ul class="gallery-list">
                <li class="gallery-item-text"><p class="gallery-text"><b>Likes </b></p>
                <p class="info-text">${t.likes}</p></li>
                 <li class="gallery-item-text"><p class="gallery-text"><b>Views </b></p>
                <p class="info-text">${t.views}</p></li>
                 <li class="gallery-item-text"><p class="gallery-text"><b>Comments </b></p>
                <p class="info-text">${t.comments}</p></li>
                 <li class="gallery-item-text"><p class="gallery-text"><b>Downloads </b></p>
                <p class="info-text">${t.downloads}</p></li>
                </ul>
            </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",s),g.refresh()}const g=new y(".gallery a",{captionsData:"alt",captionDelay:250});function h(){c.innerHTML=""}function b(){u.classList.add("is-visible")}function n(){u.classList.remove("is-visible")}const f=document.querySelector(".form");f.addEventListener("submit",L);function L(l){l.preventDefault(),b();const s=l.currentTarget.elements["search-text"].value.trim();if(!s){i.warning({title:"",message:"Please enter a search query!"}),n();return}h(),m(s).then(t=>{if(n(),t.length===0){i.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!"});return}d(t)}).catch(t=>{i.error({title:"Error",message:"Something went wrong. Please try again later!"})}).finally(()=>{n(),f.reset()})}
//# sourceMappingURL=index.js.map
