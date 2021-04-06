import { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel/dist/index';

const Norris = () => {

	const [jokes, setJokes] = useState([])
	const [cat, setCategory] = useState('normal')
	const [loading, setLoading] = useState(true)
	const [breakpoint, setbreak] = useState([
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
		{ width: 850, itemsToShow: 3 },
		{ width: 1150, itemsToShow: 4, itemsToScroll: 2 },
		{ width: 1450, itemsToShow: 5 },
		{ width: 1750, itemsToShow: 6 },
	])

	useEffect(() => {
		fetch('https://api.icndb.com/jokes')
			.then(res => res.json())
			.then(data => {


				setJokes(data.value)
				setLoading(false)
			})
			.catch(err => console.log(err))



	}, [cat])



	return (
		<div className="jokes-norris">
			{loading && <img className="spiner" src="Spinner-1s-200px.svg" alt="spiner" />}

			<div>
				<label htmlFor={cat}> Select Type of Jokes </label>
				<select value={cat} onChange={(e) => {
					setCategory(e.target.value)
				}}>
					<option value='normal'>normal</option>
					<option value='programing'>programing</option>
					<option value='+18' defaultValue >+18</option>
				</select>
			</div>
			{jokes && <Carousel breakPoints={breakpoint} className="jokes-section" >
				{jokes.map(joke => {
					if (cat.includes('normal')) {
						if (!joke.categories.length) {

							return (
								<div key={joke.id} className="joke-cont">
									<p className="chuk-joke">{joke.joke}</p>
								</div>
							)
						}
					}
					if (cat.includes('+18')) {
						if (joke.categories.includes('explicit')) {
							return (
								<div key={joke.id} className="joke-cont">
									<p className="chuk-joke">{joke.joke}</p>
								</div>
							)
						}
					}

					if (cat.includes('programing')) {
						if (joke.categories.includes('nerdy')) {
							return (
								<div key={joke.id} className="joke-cont">
									<p className="chuk-joke">{joke.joke}</p>
								</div>
							)
						}
					}
				})}

			</Carousel>}

		</div>
	)
}

export default Norris
