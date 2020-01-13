

const movieData = async () => {

    function findMovie (){
        let ieskotiFilmoPavadinimo = document.getElementById('searchMovie').addEventListener("click", function(){
            let movieName = document.getElementById('inputMovieName').value;
            //console.log(movieName);
           
           });
    }
   
    data = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=18c1a865&t='${document.getElementById('inputMovieName').value}`
        //`http://www.omdbapi.com/?i=tt3896198&apikey=18c1a865&t='${movieName}`
    ).then(res => res.json());
    
}


const showData = async () => {
    await movieData();
    console.log(data);
    document.getElementById('mTitle').textContent = data.Title;
    document.getElementById('mYear').textContent = data.Year;
    document.getElementById('mRating').textContent = data.imdbRating;
    document.getElementById('mPlot').textContent = data.Plot;
    document.getElementById('mTime').textContent = data.Runtime
    document.getElementById('mDirector').textContent = data.Director
    
  }





  showData();
  findMovie();