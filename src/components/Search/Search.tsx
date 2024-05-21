import React from 'react';
import './Search.css';

import { TProps } from './types';

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

export { Search };
