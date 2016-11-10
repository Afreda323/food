import React from 'react';

class Type extends React.Component{
  constructor(props){
     super(props);
     this.state = {
      type: ''
     };
     this.handleClick = this.handleClick.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }
 handleClick(event){
   this.setState({
     type: event.target.value
   });
 }
 handleSubmit(event){
   if (this.state.type !== '') {
     document.querySelector('.type').className = "hidden";
     document.querySelector('.price').className = "container price z-depth-2";
   }
   this.props.onTypeSubmit(this.state.type);
 }
  render(){
    return(
      <div className="container type z-depth-2 hidden">
        <div className="row">
          <div className="col s12">
            <h1 className="center-align"><i className="large material-icons">restaurant</i></h1>
            <div className="input-field col s12">
              <p className="flow-text">
                What are you in the mood for?
                <span> Choose one</span>
              </p>
              <div className="row">
                <div className="col m6 s12">
                  <p>
                    <input type="radio" name="foodGroup"  id="fast" value="fast-food" onClick={(event) =>  this.handleClick(event)}/>
                    <label className="box-label" htmlFor="fast">Fast-Food</label>
                  </p>
                  <p>
                    <input type="radio" name="foodGroup"  id="pizza" value="pizza" onClick={(event) =>  this.handleClick(event)}/>
                    <label className="box-label" htmlFor="pizza">Pizza</label>
                  </p>
                  <p>
                    <input type="radio" name="foodGroup"  id="american" value="american" onClick={(event) =>  this.handleClick(event)}/>
                    <label className="box-label" htmlFor="american">American</label>
                  </p>
                  <p>
                    <input type="radio" name="foodGroup"  id="vegan" value="vegan" onClick={(event) =>  this.handleClick(event)}/>
                    <label className="box-label" htmlFor="vegan">Vegan</label>
                  </p>
                </div>
                <div className="col m6 s12">
                  <p>
                    <input type="radio" name="foodGroup"  id="italian" value="italian" onClick={(event) =>  this.handleClick(event)}/>
                    <label className="box-label" htmlFor="italian">Italian</label>
                  </p>
                  <p>
                    <input type="radio" name="foodGroup"  id="hispanic" value="hispanic" onClick={(event) =>  this.handleClick(event)}/>
                    <label className="box-label" htmlFor="hispanic">Hispanic</label>
                  </p>
                  <p>
                    <input type="radio" name="foodGroup"  id="asian" value="asian" onClick={(event) =>  this.handleClick(event)}/>
                    <label className="box-label" htmlFor="asian">Asian</label>
                  </p>
                  <p>
                    <input type="radio" name="foodGroup"  id="breakfast" value="breakfast" onClick={(event) =>  this.handleClick(event)}/>
                    <label className="box-label" htmlFor="breakfast">Breakfast</label>
                  </p>
                </div>
              </div>
              <div className="center-align">
                <a className="btn red z-depth-3" onClick={(event) =>  this.handleSubmit(this.state.type)}>Submit <i className="material-icons right">send</i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Type;
