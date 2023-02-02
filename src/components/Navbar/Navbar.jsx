import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
	return (
		<nav>
			<FontAwesomeIcon icon={faEarthAmericas} className="nav--icon" />
			<h1 className="nav--title">my travel journal.</h1>
		</nav>
	)
}
