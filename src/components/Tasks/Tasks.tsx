import { FC } from 'react';

// import { Ttasks } from './types';
import './Tasks.css';

interface Ttasks {
  todo: number;
  done: number;
}

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

export { Tasks };
