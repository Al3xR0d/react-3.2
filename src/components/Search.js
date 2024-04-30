import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
    };
    this.onLabelChange = this.onLabelChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onLabelChange(event) {
    this.setState({
      label: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.state.label.trim() === '') {
      return;
    }
    this.props.addItem(this.state.label);
    this.setState({
      label: '',
    });
  }

  render() {
    return (
      <form className="search" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="search-panel"
          onChange={this.onLabelChange}
          placeholder="Добавить новую задачу..."
          value={this.state.label}
        />
        <button
          type="button"
          className="search-button"
          onClick={this.onSubmit}
          //   onClick={() => {
          //     this.props.addItem('Hi');
          //   }}
        >
          Добавить
        </button>
      </form>
    );
  }
}

Search.propTypes = {
  addItem: PropTypes.func.isRequired,
};

// const Search = () => {
//   return (
//     <div className="search">
//       <input className="search-panel" placeholder="Добавить новую задачу..." />
//       <button type="button" className="search-button">
//         Добавить
//       </button>
//     </div>
//   );
// };

// export default Search;
