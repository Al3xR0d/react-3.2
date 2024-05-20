import { TodoObject } from '../helpers';

export type TtodoList = {
  todoData: TodoObject[];
  onDeleted: (id: number) => void;
  onToggleDone: (id: number) => void;
  handleEditTask: (taskId: number) => void;
  handleInputChange: (taskId: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSaveTask: (taskId: number) => void;
};
