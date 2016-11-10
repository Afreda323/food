import React from 'react';
import List from './list.js';
import Btn from './button.js';

const Results = ({ results, first }) => {
  let photo, alt;
  if(results[0].photos){
    photo = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${results[0].photos[0].photo_reference}&key=AIzaSyCYUjdISCd1KAhpstLOJpKPG1EfkXg-Scw`;
    alt="imported from google";
  }else {
    photo = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png";
    alt="random food photo"
  }
  let numberFix;
  if (first.formatted_phone_number) {
    numberFix = first.formatted_phone_number.replace(" ", "");
  } 
  const number = `tel:${numberFix}`;
  let stars;
  let website;
  if(results[0].rating <= 1){
    stars = <div><i className="fa fa-star" aria-hidden="true"></i></div>;
  }else if(results[0].rating <= 2){
    stars = <div><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></div>;
  }else if(results[0].rating <= 3){
    stars =  <div><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></div>;
  }else if(results[0].rating <= 4){
    stars = <div><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></div>;
  }else if(results[0].rating <= 5){
    stars = <div><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></div>;
  }
  if(first.website){
    website = <a href={first.website} className="btn red">Visit Website</a>
  }
  return(
    <div className="container results z-depth-2">
      <div className="row">
      <div className="col s12">
        <h1 className="center-align"><i className="large material-icons">check</i></h1>
        <h1 className="center-align">{results[0].name}
          <br />
          {stars}
        </h1>
        <p className="flow-text center-align">{results[0].formatted_address.replace(", United States", "")}</p>
        <div className="center-align">
          <a href={number} className="btn red">Call Them</a>
          {website}
        </div>
        <br /><br />
        <div className="center-align">
          <img className="big-pic z-depth-2" src={photo} alt={alt} />
        </div>
        <br /><br /><br />
        <h1 className="center-align"><i className="large material-icons">thumb_down</i></h1>
        <div className="center-align">
          <h3>Unhappy with the result?</h3>
          <p className="flow-text">
            Here's some more suggestions
          </p>
          <Btn />
          <br /><br />
        </div>
        <List results={results}/>
      </div>
    </div>
  </div>
  )
}

export default Results;
