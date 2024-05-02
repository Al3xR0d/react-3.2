import React from 'react';
import PropTypes from 'prop-types';

import './TodoList.css';
import { EditPic } from './Edit';
import { TodoListItem } from './TodoListItem';
import { Tooltip } from './Tooltip';
import { TrashPic } from './TrashPic';
import { getMinutesText } from './helpers';

const TodoList = ({ todoData, onDeleted, onToggleDone, handleEditTask, handleInputChange, handleSaveTask }) => {
  const elements = [...todoData]
    .sort((a, b) => {
      if (a.done && !b.done) {
        return 1;
      } else if (!a.done && b.done) {
        return -1;
      } else {
        return 0;
      }
    })
    .map((item) => {
      const { id, done, ...itemProps } = item;
      const checkboxId = `done-${id}`;
      const minutesText = getMinutesText(item.diffInMinutes);
      return (
        <li key={item.id} className="todo-list-item">
          <Tooltip text={`Создана ${item.diffInMinutes} ${minutesText} назад`}>
            <div className="checkbox-todo">
              <input
                type="checkbox"
                className="custom-checkbox"
                id={checkboxId}
                onChange={() => onToggleDone(id)}
                checked={item.done}
              />
              <label htmlFor={checkboxId}>
                <TodoListItem
                  {...itemProps}
                  done={item.done}
                  id={item.id}
                  newName={item.newName}
                  onToggleDone={() => onToggleDone(id)}
                  handleInputChange={(e) => handleInputChange(id, e)}
                  handleSaveTask={() => handleSaveTask(id)}
                />
              </label>
            </div>
          </Tooltip>
          <div className="pictures">
            {!done && <EditPic handleEditTask={() => handleEditTask(id)} />}
            <TrashPic
              onDeleted={() => {
                onDeleted(id);
              }}
            />
          </div>
        </li>
      );
    });

  return (
    <div className="todo">
      <ul className="todo-list">{elements}</ul>
    </div>
  );
};

TodoList.propTypes = {
  todoData: PropTypes.array.isRequired,
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  handleEditTask: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSaveTask: PropTypes.func.isRequired,
};

export { TodoList };
