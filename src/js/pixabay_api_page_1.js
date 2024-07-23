const KEY_API = `44770113-cb4279c01992ac20f8c79d080`;

export function getSourcePhoto(inputText, page) {
    return fetch(`https://pixabay.com/api/?key=${KEY_API}&q=${inputText}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
}