import React from 'react';
import PropTypes from 'prop-types';

import './TodoList.css';
import TodoListItem from './TodoListItem';
import TrashPic from './TrashPic';
import EditPic from './Edit';

const TodoList = ({ todoData, onDeleted, onToggleDone }) => {
  // const TodoList = ({ todoData, onDeleted, onToggleDone, onEdit }) => {
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
      return (
        <li key={item.id} className="todo-list-item">
          <div className="checkbox-todo">
            <input
              type="checkbox"
              className="custom-checkbox"
              id={checkboxId}
              value="yes"
              onChange={() => onToggleDone(id)}
            />
            <label htmlFor={checkboxId}>
              <TodoListItem
                //   label={item.label}
                {...itemProps}
                done={item.done}
                onToggleDone={() => onToggleDone(id)}
                // onDeleted={() => {
                //   onDeleted(id);
                // }}
                // onToggleDone={() => {
                //   onToggleDone(id);
                // }}
              />
            </label>
          </div>
          <div className="pictures">
            {/* {!done && (
              <EditPic
                onEdit={() => {
                  onEdit(id);
                }}
              />
            )} */}
            {!done && <EditPic />}
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
};

export default TodoList;
