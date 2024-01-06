import { Link } from 'react-router-dom'

const Form = () => {
  return (
    <>
      <header>
        <div className="container">
          <h1>Add your property For sale</h1>
          <p>Yes, you can sell where you live and cash!</p>
        </div>
      </header>
      <main id="add">
        <form id="htmlForm" action="index.html">
          <h3>Add Property</h3>
          <label htmlFor="image">Img</label>
          <input id="image" type="text" placeholder="https://unsplash.com/" />

          <label htmlFor="price">Price, Eur</label>
          <input id="price" type="text" placeholder="50000" />

          <label htmlFor="description">Description</label>
          <textarea id="description" rows="10" placeholder="anything you would like to say?"></textarea>

          <label htmlFor="cities"></label>
          <select id="cities" name="city">
            <option value="" disabled defaultValue>Miestas</option>
            <option value="Vilnius">Vilnius</option>
            <option value="Kaunas">Kaunas</option>
            <option value="Klaipėda">Klaipėda</option>
          </select>
          <Link to="/" className="add-property">Add Property +</Link>
        </form>
      </main>
    </>
  );
}

export default Form
