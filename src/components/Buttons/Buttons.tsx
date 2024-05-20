import React from 'react';
// import PropTypes from 'prop-types';

import './Buttons.css';

class Buttons extends React.Component<{
  onFilterAll: () => void;
  onFilterDone: () => void;
  onFilterActive: () => void;
  activeFilter: string;
  handleDeleteCompletedTasks: () => void;
}> {
  render() {
    const { onFilterAll, onFilterDone, onFilterActive, activeFilter, handleDeleteCompletedTasks } = this.props;
    return (
      <div className="buttons">
        <button type="button" className="buttons-tasks btn" onClick={onFilterAll}>
          Все задачи
        </button>
        <button type="button" className="buttons-enable btn" onClick={onFilterDone}>
          Завершенные
        </button>
        <button type="button" className="buttons-active btn" onClick={onFilterActive}>
          В процессее
        </button>
        {activeFilter == 'done' ? (
          <button
            style={{ marginLeft: 'auto' }}
            className="buttons-delete btn"
            type="button"
            onClick={handleDeleteCompletedTasks}
          >
            Очистить
          </button>
        ) : null}
      </div>
    );
  }
}

// Buttons.propTypes = {
//   onFilterAll: PropTypes.func.isRequired,
//   onFilterDone: PropTypes.func.isRequired,
//   onFilterActive: PropTypes.func.isRequired,
//   activeFilter: PropTypes.string.isRequired,
//   handleDeleteCompletedTasks: PropTypes.func.isRequired,
// };

export { Buttons };
