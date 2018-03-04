import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { completeTodo, deleteTodo } from '../actions/todosAction';

// name iscomplete limit
class Todoitem extends React.Component {  

  handleComplete(id) {
    this.props.completeTodo(id);
  }

  handleDelete(id) {
    this.props.deleteTodo(id)
  }

  render() {
    const todo = this.props.todo;
    const completeStyle = (todo.complete) ? "todoitem complete" : "todoitem";
    const limit = moment(todo.limit).fromNow();
    return (
      <div className={completeStyle}>
        <div onClick={() => this.handleComplete(todo.id)}>{todo.name}</div>
        <div>{limit}</div>
        <div>
          <span onClick={() => this.handleDelete(todo.id)}>&#10005;</span>
        </div>
      </div>
    );
  }
}

export default connect(null, { completeTodo, deleteTodo })(Todoitem);