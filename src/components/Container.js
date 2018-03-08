import React from "react";

const Title = () => (
  <h2 className='title'>Game of Life</h2>
);

const Container = props => (

  <div className="container">
      <Title />
        {props.children}
  </div>
);

export default Container;
