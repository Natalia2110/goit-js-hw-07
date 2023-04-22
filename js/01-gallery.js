import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на ul.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.


// 1. Створити ul та li> img відповідно до елементів масиву
// 2. Задати стилі
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
    
    console.log(murkup[0])
}