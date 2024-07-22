import { getSoursePhoto } from "./pixabay_api_page_1";
import { getMarcup } from "./render_getMarcup";

const inputForm = document.querySelector(".form");
const photoGallery = document.querySelector(".photo-gallery")


inputForm.addEventListener("submit", inputFormSubmit)

let inputText = "";

function inputFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    inputText = (form.elements.input.value).trim(); 
    console.log("input", inputText);
    if (inputText === "") {
        console.log("Введіть пошук")
        return
    } else {
        getSoursePhoto(inputText)
            .then((data) => {
                if (Number(data.hits.length) === 0) {
                    return console.log("Фото не знайдені")
                }
                photoGallery.innerHTML = "";
                getMarcup(data.hits);
                })
            .catch((error) => console.log("error", error))
        }
    form.reset();
}


    
