
const inputForm = document.querySelector(".form");


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
        .then((data) => {console.log("data.hits", data.hits)})
        .catch((error) => console.log("error", error))
        }
    form.reset();
}

const KEY_API = `44770113-cb4279c01992ac20f8c79d080`;

function getSoursePhoto(inputText) {
    return fetch(`https://pixabay.com/api/?key=${KEY_API}&q=${inputText}&image_type=photo&orientation=horizontal&safesearch=true&per_page=10`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
}
    
