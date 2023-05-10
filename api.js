const url = 'https://online-movie-database.p.rapidapi.com/title/v2/find?title=the&titleType=movie&userRatingMin=7&limit=20&sortArg=moviemeter%2Casc&genre=comedy&primaryCountry=se';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5adf22bb91msh859ed9652f973e0p169d9bjsn56d7027c1f0e',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

async function response(url, options) {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    const poster = result[1].image.url
    return result;
  } catch (error) {
    console.error(error);
  }
}

response(url, options);
