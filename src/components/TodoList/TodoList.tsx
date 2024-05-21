import { FC } from 'react';

import { EditPic } from '../Edit/Edit';
import { TodoListItem } from '../TodoListItem/TodoListItem';
import { Tooltip } from '../Tooltip/Tooltip';
import { TrashPic } from '../TrashPic/TrashPic';
import { getMinutesText } from '../helpers';

import { TtodoList } from './types';
import './TodoList.css';

const TodoList: FC<TtodoList> = ({
  todoData,
  onDeleted,
  onToggleDone,
  handleEditTask,
  handleInputChange,
  handleSaveTask,
}) => {
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
      const checkboxId: string = `done-${id}`;
      const minutesText: string = getMinutesText(item.diffInMinutes);
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
                  handleInputChange={handleInputChange}
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

export { TodoList };
