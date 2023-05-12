function setupForm() {
  

const form = document.getElementById("form")
form.addEventListener("submit", (event) => {
event.preventDefault()
document.getElementById("searching").src = "searching.gif"

const keyword = document.getElementById("keyword").value
const genre = document.getElementById("genre").value
const rating = document.getElementById("rating").value
const release = document.getElementById("release").value
const country = document.getElementById("country").value
console.log(keyword, genre, rating, release, country)

const url = "https://online-movie-database.p.rapidapi.com/title/v2/find?title="+ keyword +"&titleType=movie&userRatingMin="+ rating +"&limit=20&sortArg=moviemeter%2Casc&genre="+ genre +"&primaryCountry="+ country +"";
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dc1ed239aemsh9d05b9bb1ffbd80p1a8481jsn7ff1d635901f',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

async function response(url, options) {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    x = Math.floor(Math.random()* result.results.length)
    console.log(x)
      const poster = result.results[x].image.url
      const movie = `<img src="${poster}">`
      const title = result.results[x].title
      console.log(title)
      document.querySelector(`.movieposter`).innerHTML = ""
      document.getElementById("title").innerHTML = ""
      document.getElementById("searching").src = ""
      document.querySelector(`.movieposter`).innerHTML += movie
      document.getElementById("title").innerHTML += title
    return result;
  }
   catch (error) {
    console.error(error);
  }
}

response(url, options);
})
}
document.addEventListener("DOMContentLoaded", setupForm)