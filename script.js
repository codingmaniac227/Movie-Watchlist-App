const movies = [
  { id: 1, title: "Dragon Ball Super: Broly", director: "Tatsuya Nagamine", price: 14.99 },
  { id: 2, title: "Naruto Shippuden: The Lost Tower", director: "Masahiko Murata", price: 12.99 },
  { id: 3, title: "My Hero Academia: Two Heroes", director: "Kenji Nagasaki", price: 16.50 },
  { id: 4, title: "One Piece: Stampede", director: "Takashi Otsuka", price: 13.75 },
  { id: 5, title: "Demon Slayer: Mugen Train", director: "Haruo Sotozaki", price: 17.99 }
];

const watchlist = [];

// Function that loops over the movies array
function movies_to_choose() {
    // Grabs the html element using DOM
    let moviesEl = document.getElementById("movie-list")

    for (let i = 0; i < movies.length; ++i) {
        // Creates a new div 
        let newDiv = document.createElement('div')
        newDiv.classList.add('movie-card')

        // Set the contents of newDiv(Our newly created div)
        newDiv.innerHTML = `
            <strong>${movies[i].title}:<strong> <em>${movies[i].director}(${movies[i].price})</em>

            <button class="add-btn" onclick="addToWatchList(${movies[i].id})">Add To Watchlist</button>
        `
        
        moviesEl.appendChild(newDiv)
    }

}

movies_to_choose()

function addToWatchList(movieId) {
    const existing = watchlist.find(m => m.id === movieId)

    if (existing) {
        alert("Movie is already in the watchlist")
    } else {
        const movie = movies.find(m => m.id === movieId)
        if (movie) {
        watchlist.push(movie)
        renderWatchList()
        }
    }

}


function renderWatchList() {
    let total = 0
    // Grabs the HTML watchlist element using DOM
    const watchlistEl = document.getElementById("movie-watchlist")
    const totalCostEl = document.getElementById("total-cost")
    // Clear previous list
    watchlistEl.innerHTML = ""

    // Loops through the watchlist
    for (let i = 0; i < watchlist.length; ++i) {
        // Creates a new div for the watch list to render
        const newDiv = document.createElement('div')
        newDiv.classList.add('movie-card')

        // Sets the content of newDiv
        newDiv.innerHTML = `
            💿 <strong>${watchlist[i].title}</strong> - <em>${watchlist[i].director}</em> ($${watchlist[i].price})
        `

        watchlistEl.appendChild(newDiv)
        total += watchlist[i].price
    }

    totalCostEl.innerText = `$${total.toFixed(2)}`
}
