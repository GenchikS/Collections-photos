import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const p="44770113-cb4279c01992ac20f8c79d080";function u(e){return fetch(`https://pixabay.com/api/?key=${p}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const m=document.querySelector(".photo-gallery");function g(e){console.log("arrey",e);const t=e.map(({webformatURL:l,largeImageURL:i,tags:s,likes:r,views:n,comments:c,downloads:a})=>`
        <li class="container-photo">
        <a href="${i}"></a>
        <img src="${l}" alt="${s}" class="img-photo">
            <ul class="list-text relative">
                <li class="list-title"><p class="list-text-img">likes: ${r}</p></li>
                <li class="list-title"><p class="list-text-img">views: ${n}</p></li>
                <li class="list-title"><p class="list-text-img">comments: ${c}</p></li>
                <li class="list-title"><p class="list-text-img">downloads: ${a}</p></li>
            </ul>
        </img>
      </li>
    `).join("");m.insertAdjacentHTML("beforeend",t)}const h=document.querySelector(".form"),f=document.querySelector(".photo-gallery");h.addEventListener("submit",y);let o="";function y(e){e.preventDefault();const t=e.target;if(o=t.elements.input.value.trim(),console.log("input",o),o===""){console.log("Введіть пошук");return}else u(o).then(l=>{if(Number(l.hits.length)===0)return console.log("Фото не знайдені");f.innerHTML="",g(l.hits)}).catch(l=>console.log("error",l));t.reset()}
//# sourceMappingURL=commonHelpers2.js.map
