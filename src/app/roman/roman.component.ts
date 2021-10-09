import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-roman',
  templateUrl: './roman.component.html',
  styleUrls: ['./roman.component.css']
})
export class RomanComponent implements OnInit {
  @Input() changes: any;

  constructor() { }

  ngOnInit(): void {
  }

}
