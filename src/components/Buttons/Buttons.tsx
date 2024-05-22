import React from 'react';

import './Buttons.css';

interface ButtonsTypes {
  onFilterAll: () => void;
  onFilterDone: () => void;
  onFilterActive: () => void;
  activeFilter: string;
  handleDeleteCompletedTasks: () => void;
}

class Buttons extends React.Component<ButtonsTypes> {
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

export { Buttons };
