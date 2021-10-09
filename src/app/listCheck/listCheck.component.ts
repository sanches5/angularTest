import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ListCheck',
  templateUrl: './listCheck.component.html',
  styleUrls: ['./listCheck.component.css']
})
export class ListCheckComponent implements OnInit {
  @Input() changes: any;

  constructor() { }

  ngOnInit(): void {
  }

}
