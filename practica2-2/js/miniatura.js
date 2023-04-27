class Miniatura {
    constructor(src, index) {
      this.src = src;
      this.index = index;
    }
  
    create() {
      const image = document.createElement('img');
      image.src = this.src;
      image.dataset.index = this.index;
      image.addEventListener('click', onThumbnailClick);
      return image;
    }
  }
  