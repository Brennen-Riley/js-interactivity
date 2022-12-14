// console.log('hello world')
const message = document.querySelector('#message')
document.querySelector("form").addEventListener('submit', addMovie)

function addMovie(e) {
    e.preventDefault()
    let inputField = document.querySelector('input')

    const movie = document.createElement('li')

    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    document.querySelector("ul").appendChild(movie)
    inputField.value = ''
}


function deleteMovie(e) {
    message.textContent = 'Movie deleted!'
    e.target.parentNode.remove()
}

function crossOffMovie(e) {
    e.target.classList.toggle('checked')

    if (e.target.classList.contains('checked') === true) {
        message.textContent = 'Movie watched!'
    } else {
        message.textContent = 'Movie added back!'
    }
}