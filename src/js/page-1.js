import { getSourcePhoto } from "./pixabay_api_page_1";
import { getMarcup } from "./render_getMarcup";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const inputForm = document.querySelector(".form");
const photoGallery = document.querySelector(".photo-gallery");
const buttonNext = document.querySelector(".button-next")


inputForm.addEventListener("submit", inputFormSubmit)

let inputText = "";
let page;

function inputFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    inputText = (form.elements.input.value).trim().toLowerCase(); 
    // console.log("input", inputText);
    if (inputText === "") {
        iziToast.show({
            position: 'topCenter',
            backgroundColor: 'rgba(99, 66, 33, 0.6)',
            messageColor: '#ffffff',
            message: 'Input name photo ... !'
            })
        return
    } else {
        page = 1;
        getSourcePhoto(inputText, page)
            .then((data) => {
                if (Number(data.hits.length) === 0) {
                        iziToast.show({
                        position: 'topCenter',
                        backgroundColor: 'rgba(99, 66, 33, 0.6)',
                        messageColor: '#ffffff',
                        message: 'Photo search did not produce results ... !'
                        });
                    return
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
            .catch((error) => 
                    iziToast.show({
                        position: 'topCenter',
                        backgroundColor: 'rgba(99, 66, 33, 0.6)',
                        messageColor: '#ffffff',
                        message: 'Server error. Please try again later ... !'
                    })
                // console.log("Server error. Please try again later", error)
                )
        }
    form.reset();
}

buttonNext.addEventListener(`click`, nextRenderFoto);

function nextRenderFoto(){
    page += 1;
    getSourcePhoto(inputText, page)
    .then((data) => {
         if( 12 >  Number(data.hits.length)){
                        getMarcup(data.hits);
                        buttonNextPhotoAdd();
                }else{
                       getMarcup(data.hits);
                        buttonNextPhotoRemove();
                    }
                })
            .catch((error) => 
                iziToast.show({
                        position: 'topCenter',
                        backgroundColor: 'rgba(99, 66, 33, 0.6)',
                        messageColor: '#ffffff',
                        message: 'Server error. Please try again later ... !'
                    })
                // console.log("Server error. Please try again later", error)
            )
}


function buttonNextPhotoRemove(){
    buttonNext.classList.remove("hidden")
}

function buttonNextPhotoAdd(){
    buttonNext.classList.add("hidden")
}


    
