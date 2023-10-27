import PhotoSwipeLightbox from './../node_modules/photoswipe/dist/photoswipe-lightbox.esm.min.js';

const lightboxTous = new PhotoSwipeLightbox({
  gallery: '#gallery-content',
  children: 'a',
  pswpModule: () => import('./../node_modules/photoswipe/dist/photoswipe.esm.min.js'),
});
lightboxTous.init();
console.log(lightboxTous)



const gallery = document.querySelector('#gallery-content')
const galleryAll = document.querySelectorAll(".gallery-item")
const Concert = document.querySelectorAll(".Concert")
const Entreprises = document.querySelectorAll(".Entreprises")
const Mariages = document.querySelectorAll(".Mariages")
const Portrait = document.querySelectorAll(".Portrait")
const filtersList = document.querySelectorAll(".filter-button")

for (const filter of filtersList) {
  filter.addEventListener("click", function () {
    const activated = document.querySelector(".activated")
    activated.classList.remove("activated")
    filter.classList.add("activated")
    if (filter.value === "Tous") {
      for (const photo of galleryAll) {
        photo.style.display = ""
      }
      lightboxTous.options.children = "a"

    } else {
      for (const photo of galleryAll) {
        photo.style.display = "none"
      }
      const wantedClass = filter.value
      const filteredGallery = document.querySelectorAll("."+ wantedClass)
      console.log(filteredGallery)
      for (const filteredPhoto of filteredGallery){
        filteredPhoto.style.display = ""
      }
      lightboxTous.options.children = "." + wantedClass
    }
  })
}

