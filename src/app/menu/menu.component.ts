import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})


export class MenuComponent implements OnInit {
  products: { name: string }[];



  constructor() {
    this.products = [{ name: 'bob' }, { name: 'eminem' }, { name: 'roman' }];
  }
  setUrl = (e = '') => {
    console.log(e);
    window.history.replaceState(e, e, e);
  }
  ngOnInit(): void {}
}
