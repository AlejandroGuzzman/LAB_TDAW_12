class ModalScreen {
    constructor() {
      this.modalView = document.querySelector('#modal-view');
      this.modalView.addEventListener('click', onModalClick);
    }
  
    show(imageSrc) {
      const image = new ModalPhoto(imageSrc).create();
      document.body.classList.add('no-scroll');
      this.modalView.style.top = window.pageYOffset + 'px';
      this.modalView.appendChild(image);
      this.modalView.classList.remove('hidden');
      document.addEventListener('keydown', nextPhoto);
    }
  
    hide() {
      document.body.classList.remove('no-scroll');
      this.modalView.classList.add('hidden');
      this.modalView.innerHTML = '';
      document.removeEventListener('keydown', nextPhoto);
    }
  }
  