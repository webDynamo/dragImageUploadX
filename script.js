const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imgView = document.getElementById("img-view");

// Load saved image from localStorage
let saveLink = localStorage.getItem("URL");
if (saveLink) {
  dropArea.style.backgroundImage = `url(${saveLink})`;
  imgView.style.display = "none";
} else {
  dropArea.style.backgroundImage = "";
}

// Handle file input
inputFile.addEventListener("change", uploadImage);

function uploadImage() {
  const file = inputFile.files[0];
  console.log("upload file", file);

  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      const imageBase64 = reader.result;
      dropArea.style.backgroundImage = `url(${imageBase64})`;
      localStorage.setItem("URL", imageBase64);
      imgView.style.display = "none";
    };
    reader.readAsDataURL(file);
  }
}

dropArea.addEventListener("drop", function (e) {
  e.preventDefault();
  inputFile.files = e.dataTransfer.files;
  uploadImage();
});

dropArea.addEventListener("dragover", function (e) {
  e.preventDefault();
  dropArea.classList.add("dragover-active");
});
