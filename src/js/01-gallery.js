// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

const markUpGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt=${description}/>
    </a>`;
  })
  .join("");

gallery.innerHTML = markUpGallery;

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
// Change code below this line
