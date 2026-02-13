import { useState } from 'react'

const App = () => {
    const [movie, setMovie] = useState({
        id: 1,
        title: 'The Lovely Bones',
        category: 'Comedy'
    })

    const updateMovie = () => {
        setMovie({
            ...movie,
            category: 'Drama'
        })
    }

    return (
        <>
            <div>
                <h2>Movie</h2>
                <span>Title: {movie.title}</span>
                <span>Category: {movie.category}</span>
            </div>
            <button onClick={updateMovie}>Update</button>
        </>
    )
}

export default App
