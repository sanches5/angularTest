import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Input() pushName: any;
  @Input() sendBE: any;
  @Input() userName: any;
  @Input() titleTask: any;
  @Input() sendTitle: any;

  constructor() { }

  ngOnInit(): void {
  }

}
