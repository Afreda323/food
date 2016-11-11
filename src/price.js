/*________   Submit Location To State ________*/
import React from 'react';

class Price extends React.Component{
  constructor(props){
     super(props);
     this.state = {
      price: ''
     };
     this.handleClick = this.handleClick.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }
   /*________   Set Price To State ________*/
 handleClick(event){
   this.setState({
     price: event.target.value
   });
 }
 /*________   Submit Price To State ________*/
 handleSubmit(event){
   this.props.onPriceSubmit(this.state.price);
   if (this.state.price !== '') {
     document.querySelector('.price').className = "hidden price";
   }
 }
  render(){
    return(
      <div className="container price z-depth-2 hidden">
        <div className="row">
          <div className="col s12">
            <h1 className="center-align"><i className="large material-icons">attach_money</i></h1>
            <div className="input-field col s12">
              <p className="flow-text">
                What's your budget?
                <span> Select one</span>
              </p>
              <div className="row">
                  <p>
                    <input type="radio" name="priceGroup" id="afford" value="1" onClick={(event) =>  this.handleClick(event)}/>
                    <label className="box-label" htmlFor="afford">$ Affordable</label>
                  </p>
                  <p>
                    <input type="radio" name="priceGroup" id="pricey" value="2" onClick={(event) =>  this.handleClick(event)}/>
                    <label className="box-label" htmlFor="pricey">$$ Pricey</label>
                  </p>
                  <p>
                    <input type="radio" name="priceGroup" id="expensive" value="3" onClick={(event) =>  this.handleClick(event)}/>
                    <label className="box-label" htmlFor="expensive">$$$ Expensive</label>
                  </p>
                  <p>
                    <input type="radio" name="priceGroup" id="very" value="4" onClick={(event) =>  this.handleClick(event)}/>
                    <label className="box-label" htmlFor="very">$$$$ Very Expensive</label>
                  </p>
              </div>
              <div className="center-align">
                <a className="btn red z-depth-3" onClick={(event) =>  this.handleSubmit(this.state.price)}>Submit <i className="material-icons right">send</i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Price;
