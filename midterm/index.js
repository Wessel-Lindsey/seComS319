
fetch("lkwessel_Activity09_movies.json")
.then(response=>response.json())
.then(myMovies=>loadMovies(myMovies));

function loadMovies(myMovies){
    var mainContainer = document.getElementById("goodmovies");
    console.log(myMovies);
    for(var i = 0; i < myMovies.movies.length; i++){
        let title = myMovies.movies[i].title;
        let year = myMovies.movies[i].year;
        let url = myMovies.movies[i].url;

        //DOM
        let div = document.createElement("div");
        div.innerHTML = ` 
        <h3>${title}</h3> <br>
        ${year} <br>
        <img src=${url} width="200"> </img> <br><br>
        `;

        mainContainer.appendChild(div);
    }

}
