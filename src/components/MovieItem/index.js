import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {list} = props
  const {thumbnailUrl, videoUrl} = list

  return (
    <Popup
      modal
      trigger={
        <img className="w-100 p-2 imgs" src={thumbnailUrl} alt="thumbnail" />
      }
    >
      {close => (
        <div className="bg-light p-3 w-100 rounded">
          <div className="text-end">
            <button
              className="rounded-circle"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
          </div>
          <div className="pt-4">
            <ReactPlayer url={videoUrl} />
          </div>
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
