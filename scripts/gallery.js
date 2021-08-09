
function activateGallery() {
  const thumbnails = document.querySelectorAll("#gallery-thumbs img");
  const mainImage = document.querySelector("#gallery-photo > img");
  const imageTitle = document.querySelector(".gallery-info .title");
  const imageDescription = document.querySelector(".gallery-info .description");

  thumbnails.forEach(function(thumbnail) {
    // preload the image
    const imgSrc = thumbnail.dataset.largeVersion
    const preloadLarge = new Image();
    preloadLarge.src = imgSrc;

    thumbnail.addEventListener("click", function() {

      mainImage.src = imgSrc;
      mainImage.alt = thumbnail.alt;
      imageTitle.textContent = thumbnail.dataset.title;
      imageDescription.textContent = thumbnail.dataset.description;

      const currentClass = "current";
      document.querySelector("." + currentClass).classList.remove(currentClass);

      thumbnail.parentElement.classList.add("current");

    });
  });
}

activateGallery();
