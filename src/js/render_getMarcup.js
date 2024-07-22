const photoGallery = document.querySelector(".photo-gallery");

export function getMarcup(arrey) {
    console.log("arrey", arrey)

    const marcup = arrey.map(({webformatURL, largeImageURL, tags}) => `
        <li class="container-photo">
        <a href="${largeImageURL}"></a>
        <img src="${webformatURL}" alt="${tags}" class="img-photo">
            <ul class="list-text">
                <li><p class=""></p></li>
                <li><p class=""></p></li>
                <li><p class=""></p></li>
                <li><p class=""></p></li>
            </ul>
        </img>
      </li>
    `).join(``)
    
    photoGallery.insertAdjacentHTML(`beforeend`, marcup)
}