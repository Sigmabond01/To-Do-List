import {Project, findProjectIndex} from "./projectManager";

class ToDo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export const TaskObj = (function () {
    function addTask(title, description, dueDate, priority, project) {
        const projectIndex = findProjectIndex(project);
        const task = new ToDo(title, description, dueDate, priority, project);
        Project.addTaskToProject(task, projectIndex);
    }

    function deleteTask(index, taskIndex) {
        Project.removeTaskFromProject(index, taskIndex);
    }

    function replaceTask(title, description, dueDate, priority, project) {
        const [i,j] = findTaskIndex(oldTitle);
        const task = {title, description, dueDate, priority, project};
        Project.replaceTaskFromProject(task, i, j);
    }

    return { addTask, deleteTask, replaceTask};
})();

export function findTaskIndex(title) {
    const arr = Project.getProject();
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].todos.length; j++) {
        if (arr[i].todos[j].title === title) {
          return [i, j];
        }
      }
    }
  }
  
  export function checkTaskTitle(title, currentTitle = null) {
    const arr = Project.getProject();
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].todos.length; j++) {
        const task = arr[i].todos[j];
        if (task.title === title && task.title !== currentTitle) {
          return true;
        }
      }
    }
    return false;
  }