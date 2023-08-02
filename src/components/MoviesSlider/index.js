import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {children} = props
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  console.log(children)

  return (
    <div className="p-5">
      <Slider {...settings}>
        {children.map(eachMovie => (
          <div>
            <MovieItem key={eachMovie.id} list={eachMovie} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
