import './Card.css'

export default function Card(props) {
	console.log(props)
	return (
		<div className="card">
			<div className="card--img-box">
				<img className="card--img" src={props.card.imageUrl} alt={props.card.title} />
			</div>

			<div className="card--infos">
				{/* <FontAwesomeIcon icon={faLocationDot} className="card--location-icon" /> */}
				<h2 className="card--location">{props.card.location}</h2>
				<a className="card--location-url" href={props.card.googleMapsUrl}>
					View on Google Maps
				</a>

				<h3 className="card--title">{props.card.title}</h3>
				<p className="card--date">
					{props.card.startDate} - {props.card.endDate}
				</p>
				<p className="card--description">{props.card.description}</p>
			</div>
		</div>
	)
}
