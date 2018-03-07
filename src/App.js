import React from "react";
import ReactDOM from "react-dom";
import './style.scss';

import Container from "./components/Container";
import Main from "./components/Main";

// Creating an App component which renders a ListContainer inside of a Container
const App = () => (
  <Container>
    <Main />
  </Container>
);


ReactDOM.render(<App />, document.getElementById("app"));
