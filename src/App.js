import React, { Component } from 'react';
import Nav from './navbar.js';
import Home from './home.js';
import Geo from './geo.js';
import Price from './price.js';
import Type from './type.js';
import Footer from './footer.js';
import Results from './results.js';
/****************______Create App Component _________***********/
class App extends Component {
  constructor(props){
     super(props);
     /****************______Set State  _________***********/
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
     /****************______Bind events to *This* _________***********/
     this.handleReset=this.handleReset.bind(this);
     this.handleSubmit=this.handleSubmit.bind(this);
     this.handleTypeSubmit=this.handleTypeSubmit.bind(this);
     this.handlePriceSubmit=this.handlePriceSubmit.bind(this);
   }
   /****************______Reset state of app_________***********/
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
     /****************______Re-render components_________***********/
     document.querySelector('.geo').className = "container geo z-depth-2";
     document.querySelector('.type').className = "container type z-depth-2 hidden";
     document.querySelector('.price').className = "container price z-depth-2 hidden";
   }
   /****************______Set location on form submit_________***********/
   handleSubmit(term){
     this.setState({lat: term[0], lon: term[1]});
   }
    /****************______Set food type _________***********/
   handleTypeSubmit(term){
     this.setState({type: term});
   }
    /****************______Set price on form submit_________***********/
   handlePriceSubmit(term){
     this.setState({price: term});
     this.setState({loading: true});
 /****************______Once form is competed, make call to Google API_________***********/

  /****************Google Maps API call_________***********/
     var self = this;
        var location = new window.google.maps.LatLng(this.state.lat, this.state.lon);
        var service;
        if(self.state.type === ""){
          var query = "restaurant";
        }else {
          var query = self.state.type + "+restaurant";
        }

        var map = document.getElementById("map");

         /****************______Import state to search ________***********/
        var request = {
         query: query,
         type: 'restaurant',
         location: location,
         radius: '20000',
         minprice: self.state.price,
         maxprice: self.state.price
       };
      service = new window.google.maps.places.PlacesService(map);
       /****************______Make Call_________***********/
      service.textSearch(request, callback);
      function callback(results, status) {
       if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          /****************______Send results to state_________***********/
         self.setState({results: results});

          /****************______Make new request for details of most relevant result_________***********/
         var service2;
         var request2 = {
            placeId: self.state.results[0].place_id
          };

          service2 = new window.google.maps.places.PlacesService(map);
          service2.getDetails(request2, callback2);
 /****************______Send Request_________***********/
          function callback2(place, status) {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
/****************______send place details to state_________***********/
              self.setState({first: place});
              self.setState({loading: false});
            }
          }
       }
    }
}

    /*  */

  render() {
     /****************______Loader animation_________***********/
    let loader;
    if(this.state.loading === true){
      loader = <div className="loader">Loading...</div>;
    }

     /****************______If results, show results_________***********/
    let resultComp;
    if(this.state.results !== ""){
      resultComp = <Results  results={this.state.results} first={this.state.first} photo="this.state.photo"/>;
    }else{
      resultComp = "";
    };
     /****************______Render the APP________***********/
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
