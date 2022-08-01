import React from 'react';
import Restaurant from './Restaurant';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
const AllRes = (props) => {
  return (
    <div>
        <SearchBar findit={props.searchrestaurent} />
            <div className="allrest">
            {props.restaurant.map((i) => (
              <Restaurant
                id={i.id}
                resName={i.name}
                address={i.address}
                cuisine_type={i.cuisine_type}
                photograph={i.photograph}
                neighborhood={i.neighborhood}
                sendittopage={() => {
                  props.sendittopage(i.id);
                }}
              />
            ))}
            </div>
    </div>
  )
}

export default AllRes