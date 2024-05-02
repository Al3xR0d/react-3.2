import React from 'react';
import ReactDOM from 'react-dom/client';

import { Buttons } from './components/Buttons';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { Tasks } from './components/Tasks';
import { TodoList } from './components/TodoList';
import { createTodoItem, calculateDiffInMinutes } from './components/helpers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: [],
      filter: 'all',
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

  handleEditTask(taskId) {
    this.setState(({ todoData }) => {
      const newArr = todoData.map((task) => (task.id === taskId ? { ...task, isEditing: true } : task));
      return { todoData: newArr };
    });
  }

  handleSaveTask(taskId) {
    this.setState(({ todoData }) => {
      const newArr = todoData.map((task) =>
        task.id === taskId ? { ...task, label: task.newName, isEditing: false } : task
      );
      return { todoData: newArr };
    });
  }

  handleInputChange(taskId, e) {
    const newName = e.target.value;
    this.setState((prevState) => ({
      todoData: prevState.todoData.map((task) => (task.id === taskId ? { ...task, newName } : task)),
    }));
  }

  deleteItem(id) {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((item) => item.id === id);
      const newArr = [...todoData.slice(0, index), ...todoData.slice(index + 1)];
      return {
        todoData: newArr,
      };
    });
  }

  addItem(text) {
    const newItem = createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArr = [newItem, ...todoData];
      return { todoData: newArr };
    });
  }

  onToggleDone(id) {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((item) => item.id === id);
      const oldItem = todoData[index];
      const newItem = { ...oldItem, done: !oldItem.done };
      const newArr = [...todoData.slice(0, index), newItem, ...todoData.slice(index + 1)];
      return {
        todoData: newArr,
      };
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      const updatedElements = this.state.todoData.map((element) => ({
        ...element,
        diffInMinutes: calculateDiffInMinutes(element.createTime),
      }));

      this.setState({ todoData: updatedElements });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
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
    const filtres = {
      all: () => true,
      done: (task) => task.done,
      active: (task) => !task.done,
    };
    return todoData.filter(filtres[filter]);
  }

  render() {
    const filteredTasks = this.filterTasks();
    const doneCount = this.state.todoData.filter((el) => el.done).length;
    const todoCount = this.state.todoData.length;
    const activeFilter = this.state.filter;
    const data = this.state.todoData;
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
          <Tasks onToggleDone={this.onToggleDone} todo={todoCount} done={doneCount} />
          <TodoList
            todoData={filteredTasks}
            onDeleted={this.deleteItem}
            onToggleDone={this.onToggleDone}
            handleInputChange={this.handleInputChange}
            handleSaveTask={this.handleSaveTask}
            handleEditTask={this.handleEditTask}
            data={data}
          />
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
