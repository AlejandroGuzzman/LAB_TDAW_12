class Album {
    constructor(photoList) {
      this.photoList = photoList;
      this.albumView = document.querySelector('#album-view');
      this.modalScreen = new ModalScreen();
    }
  
    render() {
      for (let i = 0; i < this.photoList.length; i++) {
        const photoSrc = this.photoList[i];
        const thumbnail = new Miniatura(photoSrc, i).create();
        this.albumView.appendChild(thumbnail);
      }
    }
  }
  