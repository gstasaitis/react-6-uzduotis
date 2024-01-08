import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddPropertyForm = ({ postData }) => {
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (image && city && price && description) {
      const data = {
        image,
        city,
        price: Number(price),
        description,
      };

      postData(data);
    } else {
      alert("Užpildykite visus laukelius");
    }
  };

  return (
    <>
    <h3>Add Property</h3>
    <form>
      <label htmlFor="image">Img:</label>
      <input
        type="text"
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="https://unsplash.com/"
      />

      <label htmlFor="price">Price, Eur:</label>
      <input
        type="text"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="50000"
      />

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        rows="10"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Anything you would like to say?"
      ></textarea>

<label htmlFor="city"></label>
      <select
        id="city"
        name="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      >
        <option value="" disabled defaultValue>
          Miestas
        </option>
        <option value="Vilnius">Vilnius</option>
        <option value="Kaunas">Kaunas</option>
        <option value="Klaipėda">Klaipėda</option>
      </select>

      <button type="submit" onClick={handleSubmit}>
        Add Property+
      </button>
    </form>
    </>
  );
};

const Form = () => {
  const URL = "https://robust-safe-crafter.glitch.me/";

  const postData = (data) => {
    fetch(URL, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(result => {
        alert(result.msg);
        window.location.href = "/";
      })
      .catch(error => console.error(error));
  };

  return (
    <>
      <header>
        <div className="container">
          <h1>Add your property For sale</h1>
          <p>Yes, you can sell where you live and cash!</p>
        </div>
      </header>
      <main id="add">
        <AddPropertyForm postData={postData} Link to="/" className="add-property" />
      </main>
    </>
  );
};

export default Form;
