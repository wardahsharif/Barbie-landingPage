
      document.addEventListener("DOMContentLoaded", function () {
        let mainImage = document.getElementById("main-image");
        let thumbnails = document.querySelectorAll(".thumbnail");

        thumbnails.forEach(function (thumbnail) {
          thumbnail.addEventListener("click", function () {
            mainImage.src = thumbnail.src;

            thumbnails.forEach(function (item) {
              item.classList.remove("selected");
            });

            thumbnail.classList.add("selected");
          });
        });
      });