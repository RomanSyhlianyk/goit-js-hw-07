import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");
galleryEl.addEventListener("click", openModalWindow);

function markapGallery(array) {
  return array
    .map(
      ({ preview, description, original }) =>
        `<div class="gallery__item">
            <a class=""gallery__link href="#">
                <img class="gallery__image" src="${preview}" alt="${description}" data-src="${original}" >
            </a>
        </div>`
    )
    .join(" ");
}

galleryEl.insertAdjacentHTML("beforeend", markapGallery(galleryItems));

function openModalWindow(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  console.log(e.target.dataset.src);
  const instance = basicLightbox.create(`
    <div class="modal">
        //  <img src="${e.target.dataset.src}" alt="${e.target.alt}" >
    </div>
`);

  instance.show();
  window.addEventListener("keydown", closeModalWindow);
  function closeModalWindow(e) {
    // if (e.code !== "Escape") {
    //   console.log("kljjhbfjhwbv")
    //   return;
    // }
    if (e.code === "Escape" || "click") {
      instance.close();
      window.removeEventListener("keydown", closeModalWindow);
    }
    console.log(e.code);
  }
}
