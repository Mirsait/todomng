import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../actions/todosAction';


class FilterLink extends React.Component {

  handleFilter(filter) {
    this.props.setFilter(filter);
  }

  render() {
    const filter = this.props.filter;
    const activeClass = (filter === this.props.visibleFilter) ? "filter-active" : '';
    return (
      <a className={activeClass} onClick={e => this.handleFilter(filter)}>{this.props.children}</a>
    )
  }
}

const mapStateToProps = (state) =>
  ({
    visibleFilter: state.filter
  })

export default connect(mapStateToProps, { setFilter })(FilterLink);