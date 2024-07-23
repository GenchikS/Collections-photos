const photoGallery = document.querySelector(".photo-gallery");

export function getMarcup(arrey) {
    console.log("arrey", arrey)

    const marcup = arrey.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => `
        <li class="container-photo">
        <a href="${largeImageURL}"></a>
        <img src="${webformatURL}" alt="${tags}" class="img-photo">
            <ul class="list-text relative">
                <li class="list-title"><p class="list-text-img">likes: ${likes}</p></li>
                <li class="list-title"><p class="list-text-img">views: ${views}</p></li>
                <li class="list-title"><p class="list-text-img">comments: ${comments}</p></li>
                <li class="list-title"><p class="list-text-img">downloads: ${downloads}</p></li>
            </ul>
        </img>
      </li>
    `).join(``)
    
    photoGallery.insertAdjacentHTML(`beforeend`, marcup)
}