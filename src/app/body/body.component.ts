import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Input() pushName!: (s: string) => void;
  @Input() createTask!: () => void;
  @Input() userName!: string;
  @Input() titleTask!: string;
  @Input() sendTitle!: (s: string) => void;

  constructor() { }
  clearFields(): void {
      this.pushName('');
      this.sendTitle('');
      this.userName = '';
      this.titleTask = '';
  }

  createTaskAndClear(): void {
    this.createTask();
    this.clearFields();
  }

  ngOnInit(): void {
  }
}
