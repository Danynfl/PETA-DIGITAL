import React from "react";
import { style } from "react-bootstrap";

function maps() {
  return (
    <div class="mapswrapper">
      <iframe
        width="100%"
        height="550"
        loading="lazy"
        allowfullscreen
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=indonesian%2CLampung%2CPolinela&zoom=10&maptype=satellite"
      ></iframe>
    </div>
  );
}

export default maps;
