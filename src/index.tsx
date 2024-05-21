import React from 'react';
import ReactDOM from 'react-dom/client';

import { Buttons } from './components/Buttons/Buttons';
import { Header } from './components/Header/Header';
import { Search } from './components/Search/Search';
import { Tasks } from './components/Tasks/Tasks';
import { TodoList } from './components/TodoList/TodoList';
import { createTodoItem, calculateDiffInMinutes } from './components/helpers';
import { TodoObject } from './components/helpers';
import { Tfiltres } from './components/helpers';

class App extends React.Component<{}, { todoData: TodoObject[]; filter: string; timerID: NodeJS.Timeout | undefined }> {
  constructor(props: any) {
    super(props);
    this.state = {
      todoData: [],
      filter: 'all',
      timerID: undefined,
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleDone = this.onToggleDone.bind(this);
    this.onFilterAll = this.onFilterAll.bind(this);
    this.onFilterDone = this.onFilterDone.bind(this);
    this.onFilterActive = this.onFilterActive.bind(this);
    this.handleEditTask = this.handleEditTask.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSaveTask = this.handleSaveTask.bind(this);
    this.handleDeleteCompletedTasks = this.handleDeleteCompletedTasks.bind(this);
  }

  handleDeleteCompletedTasks() {
    this.setState((prevState) => ({
      todoData: prevState.todoData.filter((task) => !task.done),
    }));
  }

  handleEditTask(taskId: number) {
    this.setState(({ todoData }) => {
      const newArr: TodoObject[] = todoData.map((task) => (task.id === taskId ? { ...task, isEditing: true } : task));
      return { todoData: newArr };
    });
  }

  handleSaveTask(taskId: number) {
    this.setState(({ todoData }) => {
      const newArr: TodoObject[] = todoData.map((task) =>
        task.id === taskId ? { ...task, label: task.newName, isEditing: false } : task
      );
      return { todoData: newArr };
    });
  }

  handleInputChange(taskId: number, e: React.ChangeEvent<HTMLInputElement>) {
    const newName: string = e.target.value;
    this.setState((prevState) => ({
      todoData: prevState.todoData.map((task) => (task.id === taskId ? { ...task, newName } : task)),
    }));
  }

  deleteItem(id: number) {
    this.setState(({ todoData }) => {
      const index: number = todoData.findIndex((item) => item.id === id);
      const newArr: TodoObject[] = [...todoData.slice(0, index), ...todoData.slice(index + 1)];
      return {
        todoData: newArr,
      };
    });
  }

  addItem(text: string) {
    const newItem: TodoObject = createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArr: TodoObject[] = [newItem, ...todoData];
      return { todoData: newArr };
    });
  }

  onToggleDone(id: number) {
    this.setState(({ todoData }) => {
      const index: number = todoData.findIndex((item) => item.id === id);
      const oldItem: TodoObject = todoData[index];
      const newItem: TodoObject = { ...oldItem, done: !oldItem.done };
      const newArr: TodoObject[] = [...todoData.slice(0, index), newItem, ...todoData.slice(index + 1)];
      return {
        todoData: newArr,
      };
    });
  }

  componentDidMount() {
    const timerID: NodeJS.Timeout = setInterval(() => {
      const updatedElements: TodoObject[] = this.state.todoData.map((element) => ({
        ...element,
        diffInMinutes: calculateDiffInMinutes(element.createTime),
      }));

      this.setState({ todoData: updatedElements, timerID: timerID });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.timerID);
  }

  onFilterAll() {
    this.setState({ filter: 'all' });
  }

  onFilterDone() {
    this.setState({ filter: 'done' });
  }

  onFilterActive() {
    this.setState({ filter: 'active' });
  }

  filterTasks() {
    const { todoData, filter } = this.state;
    const filtres: Tfiltres = {
      all: () => true,
      done: (task: TodoObject | undefined) => task!.done,
      active: (task: TodoObject | undefined) => !task!.done,
    };
    return todoData.filter(filtres[filter]);
  }

  render() {
    const filteredTasks = this.filterTasks();
    const doneCount = this.state.todoData.filter((el) => el.done).length;
    const todoCount = this.state.todoData.length;
    const activeFilter = this.state.filter;
    // const data = this.state.todoData;
    return (
      <div>
        <Header />
        <div className="style">
          <Search addItem={this.addItem} />
          <Buttons
            onFilterAll={this.onFilterAll}
            onFilterDone={this.onFilterDone}
            onFilterActive={this.onFilterActive}
            activeFilter={activeFilter}
            handleDeleteCompletedTasks={this.handleDeleteCompletedTasks}
          />
          <Tasks todo={todoCount} done={doneCount} />
          <TodoList
            todoData={filteredTasks}
            onDeleted={this.deleteItem}
            onToggleDone={this.onToggleDone}
            handleInputChange={this.handleInputChange}
            handleSaveTask={this.handleSaveTask}
            handleEditTask={this.handleEditTask}
          />
        </div>
      </div>
    );
  }
}

const rootElement: HTMLElement | null = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(<App />);
