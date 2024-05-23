import React from 'react';
import './Search.css';

interface State {
  label: string;
}

interface Props {
  addItem: (text: string) => void;
}

class Search extends React.Component<Props, State> {
  constructor(props: Props) {
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
