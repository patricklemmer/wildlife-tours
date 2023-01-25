//Imports
// React imports
import React from 'react'

export default function Card(props) {
  return (
    <div>
      <main className="main--content">
        <div>
          <img
            src={`./assets/${props.card.imageUrl}`}
            className="card--image"
          />
        </div>
        <div className="card--details">
          <div className="card--location--details">
            <img
              src={`./assets/${props.card.locationIcon}`}
              className="card--location--icon"
            />
            <p className="card--location">{props.card.location}</p>
            <a
              href={props.card.googleMaps.url}
              className="card--maps"
              target="_blank"
            >
              {props.card.googleMaps.text}
            </a>
          </div>
          <h3 className="card--title">{props.card.title}</h3>
          <div className="card--dates">
            <p className="card--start--date">{props.card.startDate} -</p>
            <p className="card--end--date">{props.card.endDate}</p>
          </div>
          <p className="card--description">{props.card.description}</p>
        </div>
      </main>
      <hr />
    </div>
  )
}
