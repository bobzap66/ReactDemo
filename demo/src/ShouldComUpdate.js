import React from 'react';
import ReactDOM from 'react-dom/client';

class ShouldComUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  shouldComponentUpdate() {
    return true;
  }
  changeColor = () => {
    this.setState({favoritecolor: "green"});
  }
  render() {
    return (
      <div>
      <h1>Should Component Update Demo </h1>
      <h2>favoriteColor is {this.state.favoritecolor}</h2>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}
export default ShouldComUpdate;