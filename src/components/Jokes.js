import React, { useEffect, useState } from 'react'

const Jokes = () => {


	const [joke, setJoke] = useState(null)
	const [loading, setLoading] = useState(true)
	const [chenge, setChenge] = useState(false)

	useEffect(() => {

		fetch('https://official-joke-api.appspot.com/random_joke')
			.then(res => res.json())
			.then(data => {

				setJoke(`${data.setup} ${data.punchline} `)
				setLoading(false)
			})
			.catch(err => console.log(err))

	}, [chenge])

	const chengeJoke = () => {
		setChenge(!chenge)
	}
	return (

		<div className="jokes"  >

			{loading && <img src="Spinner-1s-200px.svg" alt="spiner" style={{ margin: "50px 400px" }} />}
			{joke && <div>
				<h2>{joke}</h2>
				<button onClick={chengeJoke}> Another One ?</button>
			</div>

			}


		</div>
	)
}

export default Jokes
