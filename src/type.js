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
   //Slide the info in
   if(document.querySelector('.other').classList.contains('hidden') || document.querySelector('.other').classList.contains('slide-out')){
   }else{
     //Slide the info out
     document.querySelector('.other').className = "other slide-out";
   }
 }
 handleChange(event){
   this.setState({
     type: event.target.value
   });
 }
 handleSubmit(event){
    document.querySelector('.type').className = "hidden type";
    document.querySelector('.price').className = "container price z-depth-2";
   this.props.onTypeSubmit(this.state.type);
 }
 handleOther(){
   //Slide the info in
   if(document.querySelector('.other').classList.contains('hidden') || document.querySelector('.other').classList.contains('slide-out')){
     document.querySelector('.other').className = "other slide-in";
   }else{
     //Slide the info out
     document.querySelector('.other').className = "other slide-out";
   }
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
                    <input type="radio" name="foodGroup"  id="SteakHouse" value="SteakHouse" onClick={(event) =>  this.handleClick(event)}/>
                    <label className="box-label" htmlFor="SteakHouse">Steakhouse</label>
                  </p>
                  <p>
                    <input type="radio" name="foodGroup"  id="vegan" value="vegan" onClick={(event) =>  this.handleClick(event)}/>
                    <label className="box-label" htmlFor="vegan">Vegan</label>
                  </p>
                  <p>
                    <input type="radio" name="foodGroup"  id="sushi" value="sushi" onClick={(event) =>  this.handleClick(event)}/>
                    <label className="box-label" htmlFor="sushi">Sushi</label>
                  </p>
                  <p>
                    <input type="radio" name="foodGroup"  id="breakfast" value="breakfast" onClick={(event) =>  this.handleClick(event)}/>
                    <label className="box-label" htmlFor="breakfast">Breakfast</label>
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
                    <input type="radio" name="foodGroup"  id="burger" value="burger" onClick={(event) =>  this.handleClick(event)}/>
                    <label className="box-label" htmlFor="burger">Burgers</label>
                  </p>
                  <p>
                    <input type="radio" name="foodGroup"  id="rand" value="" onClick={(event) =>  this.handleClick(event)}/>
                    <label className="box-label" htmlFor="rand">Random</label>
                  </p>
                  <p>
                    <input type="radio" name="foodGroup"  id="other" value="" onClick={(event) =>  this.handleOther(event)}/>
                    <label className="box-label" htmlFor="other">Other</label>
                    <input placeholder="Please specify" id="other" type="text" className="validate other hidden" onChange={(event) =>  this.handleChange(event)} />
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
