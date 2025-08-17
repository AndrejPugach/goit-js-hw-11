import{a as c,S as d,i as l}from"./assets/vendor-5YrzWRhu.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u=c.create({baseURL:"https://pixabay.com/api/",params:{key:"51836290-201bf47032d0cc7a32d21d0be",image_type:"photo",orientation:"horizontal",safesearch:!0}});function p(a){return u.get("",{params:{q:a}}).then(s=>s.data)}let i=document.querySelector(".gallery"),y=new d(".gallery a");function f(a){const s=a.map(r=>`<li class="gallery-item">
            <a class="gallery-link" href="${r.largeImageURL}">
            <img
            class="gallery-image"
            src="${r.webformatURL}"
            data-source="${r.largeImageURL}"
            alt="${r.tags}"
            />
            <div class = "gallery-box">
            <p class="gallery-box-text">Likes <span class="gallery-box-span">${r.likes}</span></p>
            <p class="gallery-box-text">Views <span class="gallery-box-span">${r.views}</span></p>
            <p class="gallery-box-text">Comments <span class="gallery-box-span">${r.comments}</span></p>
            <p class="gallery-box-text">Downloads <span class="gallery-box-span">${r.downloads}</span></p>
            </div>
            </a>
            </li>`).join("");i.insertAdjacentHTML("beforeend",s),y.refresh()}function m(){i.innerHTML=""}function g(){document.querySelector(".loader").classList.remove("is-hidden")}function h(){document.querySelector(".loader").classList.add("is-hidden")}const b=document.querySelector(".form");b.addEventListener("submit",async a=>{a.preventDefault();const s=a.target.elements.searchText.value.trim();if(s===""){l.warning({title:"Warning",message:"Empty input field"});return}m(),g();try{const r=await p(s);r.hits.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!"}):f(r.hits)}catch{l.error({message:"An error occurred while fetching images. Please try again."})}finally{h()}});
//# sourceMappingURL=index.js.map
