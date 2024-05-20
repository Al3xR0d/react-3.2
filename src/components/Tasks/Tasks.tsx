import React, { FC } from 'react';
// import PropTypes from 'prop-types';
import { Ttasks } from './types';

import './Tasks.css';

const Tasks: FC<Ttasks> = ({ todo, done }) => {
  return (
    <div className="tasks">
      <span className="allTasks tasksStyle">
        Всего задач
        <div className="allTasksNumber tasksNumbers">{todo}</div>
      </span>
      <span className="finishedTasks tasksStyle">
        Завершено
        <div className="finishedTasksNumbers tasksNumbers">
          <span>
            {done} из {todo}
          </span>
        </div>
      </span>
    </div>
  );
};

// Tasks.propTypes = {
//   todo: PropTypes.number.isRequired,
//   done: PropTypes.number.isRequired,
// };

export { Tasks };
