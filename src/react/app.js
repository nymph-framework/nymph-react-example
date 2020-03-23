import React from 'react';
import ReactDOM from "react-dom";

import Home from './Home';

document.addEventListener("DOMContentLoaded", () => { 
  const container = document.getElementById("react-container");

  // get backend data
  const message = container.dataset.message;

  // if container does not exists; do not render
  if (!container) {
    return;
  }

  ReactDOM.render(<Home message={message} />, container);
});
