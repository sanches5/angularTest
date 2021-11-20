import { Component } from '@angular/core';
import {BodyComponent} from './body/body.component';
import {TasksComponent} from './tasks/tasks.component';
import {ListCheckComponent} from './listCheck/listCheck.component';

export type change = {
  id: number
  idTask: number
  change: number
  title: string
};

export type task = {
  id: number
  change: boolean
  title: string
  task: string
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angularTest';
  text: string = localStorage.getItem('value') || '';
  tasks: task[] = JSON.parse(localStorage.getItem('tasks') as string) || [];
  changes: change[] = JSON.parse(localStorage.getItem('changes') as string) || [];
  titleTask: string = localStorage.getItem('title') || '';
  deleteElemTask: (id: number) => task[] = this.deleteTask.bind(this);

  send = (value: string): void => {
    this.text = value;
    localStorage.setItem('value', value);
    console.log('send value input to local', value);
  }

  sendTitle = (value: string): void => {
    this.titleTask = value;
    localStorage.setItem('title', value);
    console.log('send value input to local', value);
  }

  createTask = (): void => {
    console.log('set value text', this.text);
    const tasksLocal: task[] = JSON.parse(localStorage.getItem('tasks') as string) || [];
    const id = this.tasks[this.tasks.length - 1 ]?.id + 1;
    this.tasks = [...tasksLocal, {id: id || 1, task: this.text, change: false, title: this.titleTask}];
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  deleteTask(id: number): task[] {
    console.log(this.tasks, id, this.changes);

    this.tasks = this.tasks?.filter((item: task) => item.id !== id);

    this.changes = this.changes.filter(
      (item: change) => item.idTask !== id
    );
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    localStorage.setItem('changes', JSON.stringify(this.changes));
    return this.tasks;
  }

  changeAmount = (idTask: number, name: string) => {
    const id = this.changes[this.changes.length - 1 ]?.id + 1;
    const state = this.changes.some(
      (item: change) => item.idTask === idTask
    );

    if (this.changes.length && state) {
      this.changes = this.changes.map(
        (item: change) => {
          if (item.idTask === idTask) {
            item.change++;
            return item;
          }
          return item;
        }
      );
      localStorage.setItem('changes', JSON.stringify(this.changes));
      return;
    }
    this.changes = [...this.changes, {id: id || 1, idTask, change: 1, title: name}];
    localStorage.setItem('changes', JSON.stringify(this.changes));
  }

  onChildLoaded = (component: Body) => {
    if (component instanceof BodyComponent) {
      component.textTask = this.text;
      component.pushName = this.send;
      component.createTask = this.createTask;
      component.sendTitle = this.sendTitle;
      component.titleTask = this.titleTask;
    }

    if (component instanceof TasksComponent) {
      component.tasks = this.tasks  ;
      component.changeAmount = this.changeAmount;
      component.deleteTask = this.deleteElemTask;
    }

    if (component instanceof ListCheckComponent) {
      component.changes =  JSON.parse(localStorage.getItem('changes') as string) || [];
    }
  }
}

