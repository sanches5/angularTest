import {Component, Input, OnInit} from '@angular/core';
import {change, task} from '../app.component';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css', '../body/body.component.css'],
})

export class TasksComponent implements OnInit {
  constructor() { }
  @Input() tasks!: task[];
  @Input() changeAmount!: (id: number, title: string) => void;
  @Input() deleteTask!: (id: number) => task[];

  change = false;

  ngOnInit(): void {
  }

  deleteElem(id: number): void {
    this.tasks = this.deleteTask(id);
  }

  changeTask(id: number): void {
    this.change = !this.change;

    this.tasks = this.tasks.map((item: task) => {
      if (item.id === id) {
        item.change = !item.change;
        return item;
      }
      item.change = false;
      return item;
    });
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  inputChange(input: any, id: number): void {
    this.tasks = this.tasks.map(
      (item: task) => {
        if (item.id === id) {
          item.task = input.target.value;
          this.changeAmount(id, item.title);
          item.change = !item.change;
          return item;
        }
        return item;
      }
    );
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
