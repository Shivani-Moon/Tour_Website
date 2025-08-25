import { useState } from "react";
import data from "./data";
import { FaRupeeSign } from "react-icons/fa";
import './App.css'

function App() {
  const [places, setPlaces] = useState(data);

  const removePlace = (id) => {
    setPlaces(places.filter((place) => place.id !== id));
  };

  if (places.length === 0) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <h2 className="mb-4">No Tours Left</h2>
        <button className="btn btn-primary" onClick={() => setPlaces(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="container m-auto">
      <h1 className="text-center mb-5 fw-bold" id="head">Tour Website</h1>
      <div className="row g-4">
        {places.map((place) => (
          <PlaceCard key={place.id} place={place} removePlace={removePlace} />
        ))}
      </div>
    </div>
  );
}

function PlaceCard({ place, removePlace }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="col-md-6 col-lg-4">
      <div className="card h-100 shadow">
        <img
          src={place.image}
          className="card-img-top"
          alt={place.name}
          style={{ height: "250px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{place.name}</h5>

          <p className="card-text flex-grow-1">
            {readMore ? place.info : `${place.info.substring(0, 120)}... `}
            <button
              className="btn btn-link p-0"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Show Less" : "Read More"}
            </button>
          </p>

          <p className="fw-bold text-success">
            <FaRupeeSign /> {place.price}
          </p>

          <button
            className="btn btn-danger mt-2"
            onClick={() => removePlace(place.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;