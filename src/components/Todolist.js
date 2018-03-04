import React from 'react';
import PropTypes from 'prop-types';
import Todoitem from './Todoitem';
import {Filters} from '../constants';


const Todolist = ({ data, visibleFilter }) => {

  let filterdata = [];
  switch(visibleFilter){
    case Filters.ACTIVE:
      filterdata = data.filter(p => !p.complete); 
      break;
    case Filters.COMPLETE:
      filterdata = data.filter(p => p.complete); 
      break;
    default:
      filterdata = data;
  }

  let items = filterdata.map(p => <Todoitem key={p.id} todo={p} />);
  const count = items.length;

  return (
    <div className="wrapper todolist">
      <p>count: {count}</p>
      {items}
    </div>
  );
}
Todolist.propTypes = {
  data: PropTypes.array.isRequired
}


export default Todolist;