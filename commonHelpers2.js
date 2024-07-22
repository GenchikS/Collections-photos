import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const i="44770113-cb4279c01992ac20f8c79d080";function c(e){return fetch(`https://pixabay.com/api/?key=${i}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&per_page=9`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const s=document.querySelector(".photo-gallery");function a(e){console.log("arrey",e);const t=e.map(({webformatURL:o,largeImageURL:r,tags:n})=>`
        <li class="container-photo">
        <a href="${r}"></a>
        <img src="${o}" alt="${n}" class="img-photo">
            <ul class="list-text">
                <li><p class=""></p></li>
                <li><p class=""></p></li>
                <li><p class=""></p></li>
                <li><p class=""></p></li>
            </ul>
        </img>
      </li>
    `).join("");s.insertAdjacentHTML("beforeend",t)}const p=document.querySelector(".form"),u=document.querySelector(".photo-gallery");p.addEventListener("submit",m);let l="";function m(e){e.preventDefault();const t=e.target;if(l=t.elements.input.value.trim(),console.log("input",l),l===""){console.log("Введіть пошук");return}else c(l).then(o=>{if(Number(o.hits.length)===0)return console.log("Фото не знайдені");u.innerHTML="",a(o.hits)}).catch(o=>console.log("error",o));t.reset()}
//# sourceMappingURL=commonHelpers2.js.map
