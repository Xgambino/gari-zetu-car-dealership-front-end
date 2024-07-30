import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Navbar from "../components/Navbar.jsx";
import CatalogueVideo from "../components/CatalogueVideo.jsx";
import { BASE_URL } from "../components/data/data.jsx";
import "../index.css";


function Catalogue() {
  const [catalogue, setCatalogue] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch(`${BASE_URL}/catalogues`)
      .then((response) => response.json())
      .then((data) => setCatalogue(data));
  }, []);

  return (
    <div>
      <Navbar />
      <CatalogueVideo />
      <div className="catalogue-container">
        <h1 className="catalogue-title">Catalogue</h1>
        {/* <button className="catalogue-futuristic-button">
          <a href="/add-to-catalogue">Add to Catalogue</a>
        </button> */}
        <ul className="catalogue-list">
          {catalogue.map((item) => (
            <li key={item.id} className="catalogue-item">
              <div className="catalogue-image-container">
                <img
                  src={item.image_url}
                  alt={item.brand}
                  className="catalogue-image"
                />
              </div>
              <div className="catalogue-details">
                <h2 className="catalogue-brand-model">
                  {item.brand} - {item.model}
                </h2>
                <p className="catalogue-category">Category: {item.category}</p>
                <p className="catalogue-price">Price: {item.price}</p>
                <p className="catalogue-rating">Rating: {item.rating}</p>
                <p className="catalogue-release-date">
                  Release Date: {item.release_date}
                </p>
                <>
                  <Button
                    className="catalogue-futuristic-button"
                    variant="primary"
                    onClick={handleShow}
                  >
                    Buy
                  </Button>
                  <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Body className="catalogue-modal-info">
                      You have successfully booked a viewing session
                    </Modal.Body>
                    <Modal.Footer className="catalogue-modal-info">
                      <Button
                        className="catalogue-modal-futuristic-button"
                        variant="secondary"
                        onClick={handleClose}
                      >
                        Close
                      </Button>
                      {/* <Button
                        className="catalogue-modal-futuristic-button"
                        variant="primary"
                      >
                        bought
                      </Button> */}
                    </Modal.Footer>
                  </Modal>
                </>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Catalogue;