import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-eminem',
  templateUrl: './eminem.component.html',
  styleUrls: ['./eminem.component.css'],
})
export class EminemComponent implements OnInit {
  constructor() {}
  @Input() tasks: any;
  @Input() changeAmount: any;
  @Input() changes: any;

  change = false;
  ngOnInit(): void {}

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((e: { id: number }) => e.id !== id);
    this.changes = this.changes.filter(
      (e: { idTask: number }) => e.idTask !== id
    );
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    localStorage.setItem('changes', JSON.stringify(this.changes));
  }

  changeTask(id: number): void {
    this.change = !this.change;

    this.tasks = this.tasks.map((e: { id: number; change: boolean }) => {
      if (e.id === id) {
        e.change = !e.change;
        return e;
      }
      e.change = false;
      return e;
    });
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  // @ts-ignore
  iputChange(input, id: number): void {
      this.tasks = this.tasks.map(
        (e: { id: number; task: string; change: boolean, title: string }) => {
          if (e.id === id) {
            e.task = input.value;
            this.changeAmount(id, e.title);
            e.change = !e.change;
            return e;
          }
          return e;
        }
      );
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}
