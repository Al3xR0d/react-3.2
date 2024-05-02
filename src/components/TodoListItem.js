import React from 'react';
import PropTypes from 'prop-types';

import './TodoListItem.css';

class TodoListItem extends React.Component {
  render() {
    const { label, done, handleInputChange, handleSaveTask, isEditing, id } = this.props;
    let classNames = 'todoListItem';
    if (done) {
      classNames += ' done';
    }
    return (
      <div className="todoList">
        <div className="text">
          {isEditing ? (
            <input
              className="inputEdit"
              type="text"
              onChange={handleInputChange}
              onBlur={handleSaveTask}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSaveTask(id);
              }}
              autoFocus
            />
          ) : (
            <span className={classNames}>
              <span>{label}</span>
            </span>
          )}
        </div>
      </div>
    );
  }
}

TodoListItem.propTypes = {
  label: PropTypes.string.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSaveTask: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export { TodoListItem };
