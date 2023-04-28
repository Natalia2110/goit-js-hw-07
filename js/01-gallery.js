import { galleryItems } from './gallery-items.js';

console.log(galleryItems);


const galleryList = document.querySelector('.gallery');
const galleryItemMurkup = createGalleryItemsMarkup (galleryItems);

galleryList.insertAdjacentHTML('beforeend', galleryItemMurkup)


console.log(createGalleryItemsMarkup (galleryItems));

function createGalleryItemsMarkup (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>  
        </li>
        `;
    }).join('')
    
}

galleryList.addEventListener('click', createModalWindom);

function createModalWindom (event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return
    }
    event.target.src = event.target.dataset.source;
    createImglightBox(event.target.src)
}

function createImglightBox (image) {
    const instance = basicLightbox.create(`
    <img src=${image} width="800" height="600">
    `)

    instance.show();
}
