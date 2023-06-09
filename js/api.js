function setupForm() {
  const form = document.getElementById("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector(`.movieposter`).innerHTML = "";
    document.getElementById("title").innerHTML = "";
    const searching = document.createElement("img");
    searching.src = "../Images/searching.gif";
    searching.style.width = "12vw";
    document.querySelector(`.movieposter`).appendChild(searching);

    const keyword = document.getElementById("keyword").value;
    const genre = document.getElementById("genre").value;
    const rating = document.getElementById("rating").value;
    const release = document.getElementById("release").value;
    const country = document.getElementById("country").value;

    const url =
      "https://online-movie-database.p.rapidapi.com/title/v2/find?title=" +
      keyword +
      "&titleType=movie&userRatingMin=" +
      rating +
      "&limit=20&sortArg=moviemeter%2Casc&genre=" +
      genre +
      "&primaryCountry=" +
      country +
      "&releaseDateMin=" +
      release +
      "";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "dc1ed239aemsh9d05b9bb1ffbd80p1a8481jsn7ff1d635901f",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };

    async function apiResponse(url, options) {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        x = Math.floor(Math.random() * result.results.length);

        let poster;
        if (result.results[x].image && result.results[x].image.url) {
          poster = result.results[x].image.url;
        } else {
          poster = "../Images/noImg.png";
        }
        const title = result.results[x].title;
        const movie = `<img src="${poster}" alt="${title}">`;

        document.querySelector(`.movieposter`).innerHTML = "";
        document.getElementById("title").innerHTML = "";
        document.querySelector(`.movieposter`).innerHTML += movie;
        document.getElementById("title").innerHTML += title;
        return result;
      } catch (error) {
        console.error(error);
        document.getElementById("title").innerHTML = "Couldn't found the movie";
      }
    }

    apiResponse(url, options);
  });
}

document.addEventListener("DOMContentLoaded", setupForm);
