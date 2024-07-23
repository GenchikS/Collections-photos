import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const h="44770113-cb4279c01992ac20f8c79d080";function g(o){return fetch(`https://pixabay.com/api/?key=${h}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const f=document.querySelector(".photo-gallery");function l(o){const t=o.map(({webformatURL:e,largeImageURL:n,tags:c,likes:a,views:u,comments:m,downloads:p})=>`
        <li class="container-photo">
        <a href="${n}"></a>
        <img src="${e}" alt="${c}" class="img-photo">
            <ul class="list-text relative">
                <li class="list-title"><p class="list-text-img">likes:</br>${a}</p></li>
                <li class="list-title"><p class="list-text-img">views:</br>${u}</p></li>
                <li class="list-title"><p class="list-text-img">comments:</br>${m}</p></li>
                <li class="list-title"><p class="list-text-img">downloads:</br>${p}</p></li>
            </ul>
        </img>
      </li>
    `).join("");f.insertAdjacentHTML("beforeend",t)}const d=document.querySelector(".form"),s=document.querySelector(".photo-gallery"),r=document.querySelector(".button-next");d.addEventListener("submit",b);let i="";function b(o){o.preventDefault();const t=o.target;if(i=t.elements.input.value.trim().toLowerCase(),i===""){console.log("Введіть пошук");return}else g(i).then(e=>{if(Number(e.hits.length)===0)return console.log("Фото не знайдені");12>Number(e.hits.length)?(s.innerHTML="",l(e.hits),y()):(s.innerHTML="",l(e.hits),x())}).catch(e=>console.log("error server. Спробуйте ще раз",e));t.reset()}function x(){r.classList.remove("hidden")}function y(){r.classList.add("hidden")}
//# sourceMappingURL=commonHelpers2.js.map
