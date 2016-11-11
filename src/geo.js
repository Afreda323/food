/*________   Imports________*/
import React from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';

class Geo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { address: '' , coord: []}
    this.onChange = (address) => this.setState({ address })
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }
/*________   Submit Location To State ________*/
  handleFormSubmit(event) {
    event.preventDefault();
    const { address } = this.state
    if (this.state.address !== '') {
      document.querySelector('.geo').className = "hidden geo";
      document.querySelector('.type').className = "container type z-depth-2";
    }

    /*________   Get Coordinates________*/
    geocodeByAddress(address,  (err, { lat, lng }) => {
      if (err) {
        console.log('Oh no!', err)
      }
      this.setState({coord: [lat, lng]});
      this.props.onSubmit(this.state.coord);
    })
  }

  render() {
    const AutocompleteItem = ({ suggestion }) => (<div><i className="fa fa-map-marker"/> {suggestion}</div>)
    return (
      <div className="container geo z-depth-2">
        <div className="row">
          <div className="col s12">
            <h1 className="center-align"><i className="large material-icons">place</i></h1>
            <div className="input-field col s12">
              <p className="flow-text">Where are you?</p>
              <form onSubmit={this.handleFormSubmit}>
                <PlacesAutocomplete
                  className="validate"
                  value={this.state.address}
                  onChange={this.onChange}
                  autocompleteItem={AutocompleteItem}
                />
                <div className="center-align">
                <button className="btn red z-depth-3" type="submit">Submit <i className="material-icons right"  >send</i></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Geo;
