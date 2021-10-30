import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryDiv = document.querySelector(".gallery");


const galleryItemHtml = galleryItems.map((galItem) => 
    `<a class="gallery__item" href="${galItem.original}">
  <img class="gallery__image" src="${galItem.preview}" alt="${galItem.description}" />
</a>`).join("");

// galleryDivHtml
galleryDiv.insertAdjacentHTML("beforeend", galleryItemHtml);

// Create LightBox 
const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, captionPosition: 'bottom'});
//

console.log(galleryItems);

