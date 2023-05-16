function searchForm() {
    const search = document.getElementById("searchmovie");
    search.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
  
        const searchWord = document.getElementById("search").value;
        console.log(searchWord);
        const url =
          "https://online-movie-database.p.rapidapi.com/title/v2/find?title=" +
          searchWord +
          "&limit=20&sortArg=moviemeter%2Casc";
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "dc1ed239aemsh9d05b9bb1ffbd80p1a8481jsn7ff1d635901f",
            "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
          },
        };
  
        // Flytta async/await funktionen utanför addEventListener callbacken
        async function response(url, options) {
          try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            console.log(result.results.length);
  
            const tableHead = document.createElement("thead");
            const tableHeadRow = document.createElement("tr");
            const tableTitle = document.createElement("th");
            const tableTitleType = document.createElement("th");
            const tableYear = document.createElement("th");
            tableTitle.textContent = "Movie Title";
            tableYear.textContent = "Release Year";
            tableTitleType.textContent = "Title Type";
            tableHeadRow.appendChild(tableTitle);
            tableHeadRow.appendChild(tableTitleType);
            tableHeadRow.appendChild(tableYear);
            tableHead.appendChild(tableHeadRow);
  
            const tableBody = document.createElement("tbody");
  
            for (let i = 0; i < result.results.length; i++) {
              const title = result.results[i].title;
              const titleType = result.results[i].titleType;
              const year = result.results[i].year;
              console.log(title, titleType, year);
              const movieTable = document.createElement("tr");
              const titleTable = document.createElement("td");
              const titleTypeTable = document.createElement("td");
              const yearTable = document.createElement("td");
              titleTable.textContent = title;
              titleTypeTable.textContent = titleType;
              yearTable.textContent = year;
  
              movieTable.appendChild(titleTable);
              movieTable.appendChild(titleTypeTable);
              movieTable.appendChild(yearTable);
  
              console.log(movieTable);
              tableBody.appendChild(movieTable);
            }
  
            const table = document.createElement("table");
            table.appendChild(tableHead);
            table.appendChild(tableBody);
            document.getElementById("table-container").innerHTML = "";
            document.getElementById("table-container").appendChild(table);
          } catch (error) {
            console.error(error);
          }
        }
        // Anropa response() utanför addEventListener callbacken
        response(url, options);
      }
    });
  }
  
  document.addEventListener("DOMContentLoaded", searchForm);
  