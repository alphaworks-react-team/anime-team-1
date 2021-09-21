import React from 'react'
import AnimeCard from '../fragments/AnimeCard'
import CardImage from '../fragments/CardImage'
import CardDetails from '../fragments/CardDetails'
import TrailerBtn from '../fragments/TrailerBtn'
// import Modal from '../components/Modal'

const AnimeDetails = (props) => {
  return (
    <>
    <AnimeCard>
      <CardImage src={props.img} />
      <CardDetails>
        <h2>{props.title}</h2>
        <h3>{props.ageRating}</h3>
        <h3>Rating: {props.averageRating}</h3>
        {props.videoId && (
          <TrailerBtn
            // onClick={() => setModalOpen(true)}
          >
            Trailer
          </TrailerBtn>
        )}
        <div>{props.synopsis}</div>
      </CardDetails>
    </AnimeCard>
    {/* {modalOpen && <Modal videoId={props.videoId} />} */}
  </>
  )
}

export default AnimeDetails
