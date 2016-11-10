import React from 'react';

class Btn extends React.Component {
  constructor(props) {
    super(props)
    this.state = { address: '' , coord: []}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
      document.querySelector(".list").className = "list";
    }

  render() {
    return (
      <button className="btn red z-depth-3" onClick={this.handleClick}>
        Click to load
      </button>
    )
  }
}

export default Btn;
