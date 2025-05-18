## 📂 Drag-and-Drop Image Upload with LocalStorage
This project allows users to upload an image via file input or drag-and-drop. The selected image is previewed as 
a background in the drop area and saved in localStorage so it persists even after page refresh.

## 🚀 Features
Upload image using file input or drag & drop.

Image preview as drop area background.

Image saved in localStorage (base64 format).

Image persists across page reloads.

Smooth UI interaction.

## 🧰 Technologies Used

HTML

JavaScript (Vanilla)

FileReader API

localStorage

## 📁 Project Structure

/dragImageUploadX
│
├── index.html
├── script.js
└── style.css (optional)

## 🔧 How It Works

User selects an image via file input or drops it onto the drop area.

JavaScript reads the image as a Base64 string using FileReader.

The image is displayed as a background in the drop area.

The image is stored in localStorage under the key "URL".

On page load, if an image is found in localStorage, it is automatically set as the background.

## ✅ To Do / Optional Enhancements


Add a remove/reset button to clear the image from localStorage.

Add a drag-and-drop highlight effect.

Add image size/type validation.
