import React from 'react';
import {connect} from 'react-redux';
import {Todoform, Todolist } from './components';
import Todofilter from './components/Todofilter';


class App extends React.Component {

  render(){
    const {todos, filter} = this.props;
    return (
      <div className="app">
        <Todoform />
        <Todofilter />
        <Todolist data={todos} visibleFilter={filter} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    todos: state.todos,
    filter: state.filter
  }
}

export default connect(mapStateToProps, null)(App);