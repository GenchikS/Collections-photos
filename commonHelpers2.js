import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const b="44770113-cb4279c01992ac20f8c79d080";function c(o,t){return fetch(`https://pixabay.com/api/?key=${b}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${t}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const x=document.querySelector(".photo-gallery");function l(o){const t=o.map(({webformatURL:e,largeImageURL:h,tags:m,likes:p,views:g,comments:f,downloads:d})=>`
        <li class="container-photo">
        <a href="${h}"></a>
        <img src="${e}" alt="${m}" class="img-photo">
            <ul class="list-text relative">
                <li class="list-title"><p class="list-text-img">likes:</br>${p}</p></li>
                <li class="list-title"><p class="list-text-img">views:</br>${g}</p></li>
                <li class="list-title"><p class="list-text-img">comments:</br>${f}</p></li>
                <li class="list-title"><p class="list-text-img">downloads:</br>${d}</p></li>
            </ul>
        </img>
      </li>
    `).join("");x.insertAdjacentHTML("beforeend",t)}const y=document.querySelector(".form"),r=document.querySelector(".photo-gallery"),n=document.querySelector(".button-next");y.addEventListener("submit",$);let i="",s;function $(o){o.preventDefault();const t=o.target;if(i=t.elements.input.value.trim().toLowerCase(),i===""){console.log("Введіть пошук");return}else s=1,c(i,s).then(e=>{if(Number(e.hits.length)===0)return console.log("Фото не знайдені");12>Number(e.hits.length)?(r.innerHTML="",l(e.hits),a()):(r.innerHTML="",l(e.hits),u())}).catch(e=>console.log("error server. Спробуйте ще раз",e));t.reset()}n.addEventListener("click",v);function v(o){s+=1,c(i,s).then(t=>{12>Number(t.hits.length)?(l(t.hits),a()):(l(t.hits),u())}).catch(t=>console.log("error server. Спробуйте ще раз",t))}function u(){n.classList.remove("hidden")}function a(){n.classList.add("hidden")}
//# sourceMappingURL=commonHelpers2.js.map
