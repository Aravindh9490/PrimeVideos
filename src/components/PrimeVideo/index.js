import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const comedyMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )
  const actionMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )

  return (
    <div className="bg">
      <div>
        <img
          className="w-100 img"
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
        />
      </div>
      <div className="p-2">
        <h1 className="text-light">Action Movies</h1>
        <MoviesSlider>{actionMovies}</MoviesSlider>
      </div>
      <div className="p-2">
        <h1 className="text-light">Comedy Movies</h1>
        <MoviesSlider>{comedyMovies}</MoviesSlider>
      </div>
    </div>
  )
}

export default PrimeVideo
