// Mengambil semua foto
const photos = document.querySelectorAll(".photo");

// Mengambil lightbox
const lightbox = document.getElementById("lightbox");

// Mengambil gambar besar
const bigImage = document.getElementById("bigImage");

// Mengambil tombol close
const close = document.getElementById("close");

// Membuka foto saat diklik
photos.forEach((photo) => {
  photo.addEventListener("click", () => {
    const image = photo.querySelector("img");

    bigImage.src = image.src;

    lightbox.style.display = "flex";
  });
});

// Menutup foto
close.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Menutup ketika klik area luar foto
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.style.display = "none";
  }
});
