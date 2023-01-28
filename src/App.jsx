import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Card from './components/Card/Card.jsx'
import data from './data.js'

export default function App() {
	const cards = data.map(card => {
		return <Card key={card.id} card={card} />
	})

	return (
		<main>
			<Navbar />
			<section className="cards-list">{cards}</section>
			<Footer />
		</main>
	)
}
