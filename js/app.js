let inputForm = document.querySelector("#input");
let searchForm = document.querySelector('#searchForm');
let output = document.querySelector('#output');
let inputResult;
let showOutput = "";
 searchForm.addEventListener('submit',(event)=>{
     inputResult = inputForm.value;
     fetchMovie(inputResult);
     event.preventDefault();
 })

//fetching the movies using the search value from inputForm
function fetchMovie(searchValue) {
    fetch('http://api.tvmaze.com/search/shows?q='+searchValue)
        .then((res) =>{
        return res.json();
        })
        .then((data) =>{
           data.map((value) =>{
               let shows = value.show;
                creatElement(shows.image.original,shows.name,shows.url);
           })
        })
        .catch((err)=>{
            console.log(err);
        })
}

function creatElement(poster, title, url){
     let div = document.createElement('div');
     div.setAttribute("class","col-md-3");
     let innerDiv = document.createElement('div');
     innerDiv.setAttribute("class","text-center");
    let img = document.createElement('img');
     img.setAttribute("src",poster);
     img.setAttribute("class","poster");
     let h = document.createElement('h6');
     h.innerHTML = title;
     h.setAttribute("class","movie-title");
    let movieUrl = document.createElement('a');
     movieUrl.setAttribute("href",url);
    movieUrl.setAttribute("class","movie-url");
    movieUrl.innerHTML = "More details";
    div.append(innerDiv);
    innerDiv.append(img)
    innerDiv.append(h)
    innerDiv.append(movieUrl)
    output.append(div);
}