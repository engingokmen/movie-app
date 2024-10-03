const key = process.env.omdbApikey
const { movies } = require('./db-withoutPosters.json')
const fs = require('fs')

const getPoster = async (title) => {
    return await fetch(`http://www.omdbapi.com/?apikey=${key}&t=${title}`)
}

const getPosters = async (movies) => {
    const mp = movies.map(async (movie) => {
        const data = await getPoster(movie.name)
        const json = await data.json()
        return { ...movie, poster: json.Poster }
    })
    const responses = await Promise.all(mp)
    return responses
}

const moviesWithPosters = async () => {
    const mp = await getPosters(movies)
    fs.writeFile('db.json', JSON.stringify({ movies: mp }), (err) => {
        if (err) {
            console.error(err)
        } else {
            // file written successfully
            console.log('file is written')
        }
    })
}

moviesWithPosters()
