import React, {Component} from 'react';

export default class Main extends Component {

  constructor() {
    super();

  }
  hello = () => {
    return ( <h1> yikeas</h1>);
  }

  render() {
    return (
      <div>Hello
        {this.hello()}
      </div>
    );
  }
}
