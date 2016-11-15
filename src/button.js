import React from 'react';

class Btn extends React.Component {
  constructor(props) {
    super(props)
 /****************______Create Button to load more requests_________***********/
    this.state = { address: '' , coord: []}
    this.handleClick = this.handleClick.bind(this)
  }
 /****************______Show results on click_________***********/
  handleClick() {
      document.querySelector(".list").className = "list";
      document.querySelector('.showResults').className = "hide";
    }

  render() {
    return (
      <button className="btn showResults red z-depth-3" onClick={this.handleClick}>
        Click to load
      </button>
    )
  }
}

export default Btn;
