import React from 'react';
import {connect} from 'react-redux';
import {createTodo} from '../actions/todosAction';


class Todoform extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const todo = {
      name: this.state.name,
      limit:this.state.limit,
    }
    this.props.createTodo(todo);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value });
  }


  render(){
    return (
      <form className="wrapper todoform" onSubmit={this.handleSubmit}>
        <div className="control"> 
          <label htmlFor="name">Todo</label>
          <input type="text" name="name" onChange={this.handleChange}
            placeholder=" new todo title" required/>
        </div>
        <div className="control">
          <label htmlFor="limit">Limit Date</label>
          <input type="date" name="limit"  onChange={this.handleChange}
           required/> 
        </div>
        <div className="control">
          <input type="submit" value="Create" className="btn" />
        </div>
      </form>
    );
  }
}

export default connect(null, {createTodo} )(Todoform);