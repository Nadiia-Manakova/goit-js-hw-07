import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryList = document.querySelector(`.gallery`);

function createGallery(arr) {
    return arr.map(({ preview, original, description }) => `
   <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('');
}

galleryList.insertAdjacentHTML(`afterbegin`, createGallery(galleryItems));
galleryList.addEventListener(`click`, handlerClick);

function handlerClick(evt) {
  const target = evt.target;
  if (target.classList.contains('gallery__image')) {
    
    const modalImage = target.dataset.source;
       const instance = basicLightbox.create(`
    <img src="${modalImage}"  width="800" height="600">
`)

    instance.show();
  document.addEventListener('keydown', keyDown);
    function keyDown(event) {
      if (event.code === 'Escape') {
        instance.close();
      }
    }
  }
}
