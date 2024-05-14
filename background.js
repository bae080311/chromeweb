const images = ["1.jpg", "2.jpg", "3.jpg"];
const randomimage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.src = `${randomimage}`;
document.body.appendChild(bgImage);
