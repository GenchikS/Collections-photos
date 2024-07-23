import { getSoursePhoto } from "./pixabay_api_page_1";
import { getMarcup } from "./render_getMarcup";

const inputForm = document.querySelector(".form");
const photoGallery = document.querySelector(".photo-gallery");
const buttonNext = document.querySelector(".button-next")


inputForm.addEventListener("submit", inputFormSubmit)

let inputText = "";

function inputFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    inputText = (form.elements.input.value).trim().toLowerCase(); 
    // console.log("input", inputText);
    if (inputText === "") {
        console.log("Введіть пошук")
        return
    } else {
        getSoursePhoto(inputText)
            .then((data) => {
                if (Number(data.hits.length) === 0) {
                    return console.log("Фото не знайдені")
                }else if( 12 >  Number(data.hits.length)){
                        photoGallery.innerHTML = "";
                        getMarcup(data.hits);
                        buttonNextPhotoAdd();
                }else{
                        photoGallery.innerHTML = "";
                        getMarcup(data.hits);
                        buttonNextPhotoRemove();
                    }
                })
            .catch((error) => console.log("error server. Спробуйте ще раз", error))
        }
    form.reset();
}


function buttonNextPhotoRemove(){
    buttonNext.classList.remove("hidden")
}

function buttonNextPhotoAdd(){
    buttonNext.classList.add("hidden")
}


    
