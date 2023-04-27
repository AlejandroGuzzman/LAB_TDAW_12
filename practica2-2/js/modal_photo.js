class ModalPhoto {
    constructor(src) {
      this.src = src;
    }
  
    create() {
      const image = document.createElement('img');
      image.src = this.src;
      return image;
    }
  }
  