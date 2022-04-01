class Lightbox {
    constructor(medias, index) {
        this.currentIndex = index;
        this.medias = medias;
        this.init();
    }

    display() {
    let lightBoxMedia = document.getElementById('galleryLightbox-media');
    let lightBoxName = document.getElementById('galleryLightbox-name');
    const isVideo = this.medias [this.currentIndex].video!= null;
    let media;
    if (isVideo) {
        const videoURL = `assets/images/${this.medias [this.currentIndex].photographerId}/${this.medias [this.currentIndex].video}` ;
        media = document.createElement( 'video' );
        media.setAttribute("src", videoURL);
        media.setAttribute("controls","controls");
    }
    else {
        const imageURL = `assets/images/${this.medias [this.currentIndex].photographerId}/${this.medias [this.currentIndex].image}` ;
        media = document.createElement( 'img' );
        media.setAttribute("src", imageURL);  
    }
    console.log(media);

    lightBoxMedia.innerHTML = "";
    lightBoxMedia.appendChild(media);
    lightBoxName.innerHTML = this.medias [this.currentIndex].title
    }

     // Initialization et ouverture lightbox
     init() {
        /*let lightBoxMedia = document.getElementById('galleryLightbox-media');
        let lightBoxName = document.getElementById('galleryLightbox-name');
        const isVideo = this.medias [this.currentIndex].video!= null;
        let media;
        if (isVideo) {
            const videoURL = `assets/images/${this.medias [this.currentIndex].photographerId}/${this.medias [this.currentIndex].video}` ;
            media = document.createElement( 'video' );
            media.setAttribute("src", videoURL);
            media.setAttribute("controls","controls");
        }
        else {
            const imageURL = `assets/images/${this.medias [this.currentIndex].photographerId}/${this.medias [this.currentIndex].image}` ;
            media = document.createElement( 'img' );
            media.setAttribute("src", imageURL);  
        }

        lightBoxMedia.appendChild(media);
        lightBoxName.innerHTML = this.medias [this.currentIndex].title*/

        this.display();

        let gallery = document.getElementById('galleryLightbox')
        gallery.style.display = 'block';

        this.previous(document.querySelector('.leftArrowLightbox'));
        this.next(document.querySelector('.rightArrowLightbox'));
        this.close();
        return this
    }

        // Passage au media suivant
        next(articlePh) {
            articlePh.addEventListener('click', () => {
                this.currentIndex += 1;
                if (this.currentIndex >= this.medias.length) {this.currentIndex = 0};
                this.display()
                console.log(this.currentIndex);
            })
    }

            // Passage au media précedent
            previous(articlePh) {
                /*articlePh.addEventListener('click', () => {
                    this.currentIndex += 1;
                    if (this.currentIndex >= this.medias.length) {this.currentIndex = 0};
                    this.display()
                    console.log(this.currentIndex);
                })*/
        }

           
    close() {
        document.querySelector('.closeLightboxIcon').addEventListener('click', () => {
            let lightbox = document.getElementById('lightbox');
            lightbox.style.display = 'none';
        })
    }
}

