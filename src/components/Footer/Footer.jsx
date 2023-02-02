import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
	return (
		<footer>
			<a
				href="https://github.com/stephanlamoureux/react-travel-journal"
				target="_blank"
				className="footer--link"
			>
				<FontAwesomeIcon icon={faGithub} className="footer--icon" />
			</a>
		</footer>
	)
}
