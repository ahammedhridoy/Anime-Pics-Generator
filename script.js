const btn = document.querySelector(".btn");
const animeName = document.querySelector(".anime-name");
const animeImg = document.querySelector(".anime-img");
const animeContainer = document.querySelector(".anime-container");

btn.addEventListener("click", async () => {
  try {
    btn.disabled = true;
    animeImg.src = "spinner.svg";
    const response = await fetch("https://api.catboys.com/img");
    const data = await response.json();
    btn.disabled = false;
    animeContainer.style.display = "block";
    animeImg.src = data.url;
    animeName.innerText = data.artist;
  } catch (error) {
    animeContainer.innerHTML = "<h4>Error Happened</h4>";
    animeContainer.style.display = "block";
    btn.disabled = false;
  }
});
