// Add imports above this line
import { galleryItems } from './gallery-items';
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const itemGallery = createMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', itemGallery);

function createMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
<a class="gallery__link" href="${original}">
<img
class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}"

/>
</a>
</li>`
    )
    .join('');
}

const galleryLightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});
