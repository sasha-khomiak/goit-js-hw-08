// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

//---------------СТВОРЕННЯ РОЗМІТКИ---------------//

const gallery = document.querySelector('.gallery');

crateGalleryItems(galleryItems);

function crateGalleryItems() {
  const items = [];

  galleryItems.forEach(element => {
    const { preview, original, description } = element;

    const elementLink = document.createElement('a');
    elementLink.href = original;
    elementLink.classList.add('gallery__item');

    const image = document.createElement('img');
    image.src = preview;
    image.alt = description;
    image.classList.add('gallery__image');

    elementLink.append(image);

    items.push(elementLink);
  });

  gallery.append(...items);
}

//---------------ОБРОБНИКИ ПОДІЙ---------------//

var lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
