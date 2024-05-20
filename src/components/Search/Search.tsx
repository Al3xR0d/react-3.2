import React from 'react';
// import PropTypes from 'prop-types';
import './Search.css';

type TProps = {
  addItem: (text: string) => void;
};

class Search extends React.Component<TProps, { label: string }> {
  constructor(props: TProps) {
    super(props);
    this.state = {
      label: '',
    };
    this.onLabelChange = this.onLabelChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onLabelChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      label: event.target.value,
    });
  }

  onSubmit(event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) {
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
        <button type="button" className="search-button" onClick={this.onSubmit}>
          Добавить
        </button>
      </form>
    );
  }
}

// Search.propTypes = {
//   addItem: PropTypes.func.isRequired,
// };

export { Search };
