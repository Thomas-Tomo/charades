document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.getElementById("generate-btn");
  const rulesButton = document.getElementById("rules-btn");
  const rulesDiv = document.getElementById("rules-div");
  const movieContent = document.getElementById("movie");
  const musicContent = document.getElementById("music");
  const tvContent = document.getElementById("tv");
  const bookContent = document.getElementById("book");

  generateButton.addEventListener("click", function () {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => {
        const movies = data.movies;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        movieContent.textContent = `${randomMovie}`;

        return fetch("music.json");
      })
      .then((response) => response.json())
      .then((data) => {
        const music = data.music;
        const randomMusic = music[Math.floor(Math.random() * music.length)];
        musicContent.textContent = `${randomMusic}`;

        return fetch("tv.json");
      })
      .then((response) => response.json())
      .then((data) => {
        const tv = data.tv;
        const randomTV = tv[Math.floor(Math.random() * tv.length)];
        tvContent.textContent = `${randomTV}`;

        return fetch("books.json");
      })
      .then((response) => response.json())
      .then((data) => {
        const books = data.books;
        const randomBook = books[Math.floor(Math.random() * books.length)];
        bookContent.textContent = `${randomBook}`;
      })
      .catch((error) => console.error("Error fetching data:", error));
  });

  rulesButton.addEventListener("click", function () {
    if (rulesDiv.style.display === "none") {
      rulesDiv.style.display = "block";
      rulesButton.textContent = "Hide Rules";
    } else {
      rulesDiv.style.display = "none";
      rulesButton.textContent = "Rules";
    }
  });
});


 // Function to copy URL to clipboard
 function copyURL() {
  var urlInput = document.createElement('input');
  urlInput.setAttribute('value', window.location.href);
  document.body.appendChild(urlInput);
  urlInput.select();
  document.execCommand('copy');
  document.body.removeChild(urlInput);
  alert('URL copied to clipboard!');
}

// Attach click event listener to copy URL button
document.getElementById('copy-url-btn').addEventListener('click', copyURL);