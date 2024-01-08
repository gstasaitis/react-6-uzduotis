import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Loader from './Loader'

const Home = () => {

    const [cards, setCards] = useState()
    const [isLoaded, setIsLoaded] = useState(false)

    const fetchData = async () => {
    try {
    const resp = await fetch('https://robust-safe-crafter.glitch.me/')
    const data = await resp.json()
    setCards(data)
    setIsLoaded(true)
    } catch (error) {
    console.error('Error fetching user data:', error.message)
    setIsLoaded(true)
    }
}

    useEffect(() => {
    fetchData()
    }, [])


    const filterDataByCity = (city, event) => {
        const cityBtns = document.getElementsByClassName("city-btn")

        for (const x of cityBtns) {
            x.classList.remove("active")
        }

        if (city !=="All") {
            const filter = cards.filter((x) => x.city === city)
            setCards(filter)
        }else {
            fetchData()
        }
        event.currentTarget.classList.add("active")
    }

    return (
    <>
    <header>
        <div className="container">
            <h1>Property List</h1>
            <p>See all the houses you want!</p>
        </div>
    </header>

    <main>
        <p>Filter:</p>
        <div className="filter-section">
            <div className="cities">
<button className="city-btn" onClick={(event) => filterDataByCity("Vilnius", event)}>Vilnius</button>
<button className="city-btn" onClick={(event) => filterDataByCity("Kaunas", event)}>Kaunas</button>
<button className="city-btn" onClick={(event) => filterDataByCity("Klaipeda", event)}>Klaipėda</button>
<button className="city-btn active" onClick={(event) => filterDataByCity("All", event)}>All</button>

            </div>
            <Link to="/form" className="add-property">Add Property +</Link>
        </div>
    </main>
    
    <section className="cards">
        {isLoaded && cards.length > 0 ? (
        cards.map((card, index) => (
            <div key={index} className="card">
            <img src={card.image} alt={card.city} />
            <div className="text">
                <h3 className="price">€{card.price}</h3>
                <p className="city">{card.city}</p>
                <p>{card.description}</p>
            </div>
            </div>
        ))
        ) : (
        <Loader/>
        )}
    </section>
    </>
    )
}

export default Home