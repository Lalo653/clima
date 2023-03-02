let songMusic = document.getElementById("cancion")
let albumMusic = document.getElementById("artista")
let fragment = document.createDocumentFragment()
let topChart = []

    document.addEventListener('DOMContentLoaded',() => {
        loadChart()

    })
 const loadChart = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3df050ebe5mshf309c9997c7b7cap1d63abjsnd8a7c3cd5387',
            'X-RapidAPI-Host': 'billboard-api5.p.rapidapi.com'
        }
    };
    
    fetch('https://billboard-api5.p.rapidapi.com/api/charts/hot-100?week=2022-10-08', options)
        .then(response => response.json())
        .then(response => {
            topChart = response
            createCartelera()

        })
        .catch(err => console.error(err));
 }

 const createCartelera = () => {
    topChart.forEach((artist) =>{
        console.log(artist)
        albumMusic.querySelector('img').setAtrribute('src', )
    })
 }



