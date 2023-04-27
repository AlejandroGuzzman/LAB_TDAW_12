let currentIndex = null;

function onThumbnailClick(event) {
  currentIndex = event.currentTarget.dataset.index;
  album.modalScreen.show(event.currentTarget.src);
}

function onModalClick() {
  album.modalScreen.hide();
}

function nextPhoto(event) {
  if (event.key === 'Escape') {
    album.modalScreen.hide();
    return;
  }
  if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
    return;
  }
  let nextIndex = currentIndex;
  if (event.key === 'ArrowLeft') {
    nextIndex--;
  } else {
    nextIndex++;
  }
  if (nextIndex < 0 || nextIndex === PHOTO_LIST.length) {
    return;
  }
  const photoSrc = PHOTO_LIST[nextIndex];
  album.modalScreen.hide();
  album.modalScreen.show(photoSrc);
  currentIndex = nextIndex;
}

const album = new Album(PHOTO_LIST);
album.render();
