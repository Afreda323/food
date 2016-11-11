import React, { Component } from 'react';
import Nav from './navbar.js';
import Home from './home.js';
import Geo from './geo.js';
import Price from './price.js';
import Type from './type.js';
import Results from './results.js';
import Footer from './footer.js';
import axios from 'axios';

class App extends Component {
  constructor(props){
     super(props);
     this.state={
      location: '',
      lat: '',
      lon: '',
      type: '',
      price: '',
      results: '',
      first: '',
      loading: undefined
     };
     this.handleReset=this.handleReset.bind(this);
     this.handleSubmit=this.handleSubmit.bind(this);
     this.handleTypeSubmit=this.handleTypeSubmit.bind(this);
     this.handlePriceSubmit=this.handlePriceSubmit.bind(this);
   }
   handleReset(){
     this.setState({
       location: '',
       lat: '',
       lon: '',
       type: '',
       price: '',
       results: '',
       first: '',
       loading: undefined
     });
     document.querySelector('.geo').className = "container geo z-depth-2";
     document.querySelector('.type').className = "container type z-depth-2 hidden";
     document.querySelector('.price').className = "container price z-depth-2 hidden";
   }
   handleSubmit(term){
     this.setState({lat: term[0], lon: term[1]});
   }
   handleTypeSubmit(term){
     this.setState({type: term});
   }
   handlePriceSubmit(term){
     this.setState({price: term});
     this.setState({loading: true});
     axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyCYUjdISCd1KAhpstLOJpKPG1EfkXg-Scw&type=restaurant&query=${this.state.type + "+restaurant"}&radius=25000&location=${this.state.lat},${this.state.lon}&minprice=${this.state.price}&maxprice=${this.state.price}&opennow`)
         .then(function (response) {
           this.setState({results: response.data.results});
           /* GET DETAILS OF FIRST PLACE */
           axios.get(`https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyCYUjdISCd1KAhpstLOJpKPG1EfkXg-Scw&placeid=${this.state.results[0].place_id}`)
               .then(function (response) {
                 this.setState({first: response.data.result});
                 this.setState({loading: false});
               }.bind(this))
               .catch(function (error) {
                 console.log(error);
               });
         }.bind(this))
         .catch(function (error) {
           console.log(error);
         });
   }

  render() {
    let loader;
    if(this.state.loading === true){
      loader = <div className="loader">Loading...</div>;
    }
    let resultComp;
    if(this.state.results !== ""){
      resultComp = <Results  results={this.state.results} first={this.state.first} photo="this.state.photo"/>;
    }else{
      resultComp = "";
    };
    return (
      <div className="App">
        <Nav />
        <Home />
        <ResetBtn onReset={this.handleReset}/>
        <Geo onSubmit={(term) => this.handleSubmit(term)} />
        <Type onTypeSubmit={(term) => this.handleTypeSubmit(term)}/>
        <Price onPriceSubmit={(term) => this.handlePriceSubmit(term)}/>
        {loader}
        {resultComp}
        <Footer />
      </div>
    );
  }
}

//Create the reset button
class ResetBtn extends Component{
  constructor(props){
     super(props);
     this.handleClick=this.handleClick.bind(this);
   }
   handleClick(event){
     this.props.onReset();
   }
   render(){
     return(
       <button className="btn-floating btn-large waves-effect waves-light red z-depth-3" onClick={this.handleClick}>
         <i className="material-icons">autorenew</i>
       </button>
     )
   }
}

export default App;
