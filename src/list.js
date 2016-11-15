import React from 'react';
import ListLi from './listLi.js';

const List = ({results}) => {
 /****************______Map out all list item and create an LI for each_________***********/
  const list = results.map((result) => {
    const photo = result.icon;
      return (
        <ListLi
          key={result.id}
          result={result}
          photoId={photo}
        />
      )
    });

  return(
    <div className="list hide">
      {list}
  </div>
  )
}

export default List;
