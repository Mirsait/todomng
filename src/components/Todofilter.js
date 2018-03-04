import React from 'react';
import FilterLink from './Filterlink';
import { Filters } from '../constants';

const Todofilter = () => (
  <div className="wrapper todofilter">
    filter:
    <FilterLink filter={Filters.ALL} >ALL</FilterLink>
    <FilterLink filter={Filters.ACTIVE}>ACTIVE</FilterLink>
    <FilterLink filter={Filters.COMPLETE}>COMPLETE</FilterLink>
  </div>
)

export default Todofilter;
