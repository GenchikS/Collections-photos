import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as r}from"./assets/vendor-ad859c2f.js";const y="44770113-cb4279c01992ac20f8c79d080";function c(t,o){return fetch(`https://pixabay.com/api/?key=${y}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${o}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const C=document.querySelector(".photo-gallery");function i(t){const o=t.map(({webformatURL:e,largeImageURL:m,tags:p,likes:h,views:g,comments:b,downloads:d})=>`
        <li class="container-photo">
        <a href="${m}"></a>
        <img src="${e}" alt="${p}" class="img-photo">
            <ul class="list-text relative">
                <li class="list-title"><p class="list-text-img">likes:</br>${h}</p></li>
                <li class="list-title"><p class="list-text-img">views:</br>${g}</p></li>
                <li class="list-title"><p class="list-text-img">comments:</br>${b}</p></li>
                <li class="list-title"><p class="list-text-img">downloads:</br>${d}</p></li>
            </ul>
        </img>
      </li>
    `).join("");C.insertAdjacentHTML("beforeend",o)}const x=document.querySelector(".form"),a=document.querySelector(".photo-gallery"),l=document.querySelector(".button-next");x.addEventListener("submit",$);let s="",n;function $(t){t.preventDefault();const o=t.target;if(s=o.elements.input.value.trim().toLowerCase(),s===""){r.show({position:"topCenter",backgroundColor:"rgba(99, 66, 33, 0.6)",messageColor:"#ffffff",message:"Input name photo ... !"});return}else n=1,c(s,n).then(e=>{if(Number(e.hits.length)===0){r.show({position:"topCenter",backgroundColor:"rgba(99, 66, 33, 0.6)",messageColor:"#ffffff",message:"Photo search did not produce results ... !"});return}else 12>Number(e.hits.length)?(a.innerHTML="",i(e.hits),f()):(a.innerHTML="",i(e.hits),u())}).catch(e=>r.show({position:"topCenter",backgroundColor:"rgba(99, 66, 33, 0.6)",messageColor:"#ffffff",message:"Server error. Please try again later ... !"}));o.reset()}l.addEventListener("click",v);function v(){n+=1,c(s,n).then(t=>{12>Number(t.hits.length)?(i(t.hits),f()):(i(t.hits),u())}).catch(t=>r.show({position:"topCenter",backgroundColor:"rgba(99, 66, 33, 0.6)",messageColor:"#ffffff",message:"Server error. Please try again later ... !"}))}function u(){l.classList.remove("hidden")}function f(){l.classList.add("hidden")}
//# sourceMappingURL=commonHelpers2.js.map
