import{S as u,i as f}from"./assets/vendor-BrddEoy-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function p(l){const s="https://pixabay.com",t="52236687-26797aae28fcaf2822f6b1bf4",a="/api/",e=new URLSearchParams({key:t,q:l,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${s}${a}?${e}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const i=document.querySelector(".gallery"),n=document.querySelector(".loader");function y(l){const s=l.map(t=>`
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
      `).join("");i.insertAdjacentHTML("beforeend",s),m.refresh()}const m=new u(".gallery a",{captionsData:"alt",captionDelay:250});function d(){i.innerHTML=""}function g(){n.classList.add("is-visible")}function h(){n.classList.remove("is-visible")}const c=document.querySelector(".form");c.addEventListener("submit",b);function b(l){l.preventDefault(),g();const s=l.currentTarget.elements["search-text"].value.trim();p(s).then(t=>{if(d(),y(t.hits),h(),t.hits.length===0){f.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!"});return}}).catch(t=>{console.log(t)}).finally(c.reset())}
//# sourceMappingURL=index.js.map
