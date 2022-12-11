import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

function markapGallery(array) {
  return array
    .map(
      ({ preview, description, original }) =>
        `
            <a class=""gallery__link href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" data-src="${original}" >
            </a>
        `
    )
    .join("");
}

galleryEl.insertAdjacentHTML("beforeend", markapGallery(galleryItems));

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
