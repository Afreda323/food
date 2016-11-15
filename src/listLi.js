import React from 'react';

const ListLi = ({result, photoId}) => {
 /****************______Concat address and shorten it_________***********/
    const direct = `https://www.google.com/maps/place/${result.formatted_address.replace(", United States", "").replace(/ /g, "+")}`;

      return (
        <div className="listItem z-depth-1">
          <div className="row">
            <div className="col m3 center-align">
              <i className="large material-icons">restaurant</i>
            </div>
            <div className="col m9 s12">
              <h4>
                {result.name}
                <hr />
              </h4>
              <p className="flow-text">
                <i className="fa fa-star" aria-hidden="true"></i> Rating: {result.rating}
                <br />
                <a href={direct} className="direct">
                  <i className="fa fa-map-marker" aria-hidden="true"></i> {result.formatted_address.replace(", United States", "")}
                </a>
              </p>
            </div>
          </div>
        </div>
      )
    }

export default ListLi;
