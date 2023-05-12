import { Component } from '@angular/core';

import { ItemService } from './item/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public ids: ItemService) {}

  addTodo() {
    const description = window.prompt('Description:');
    if (description) {
      this.ids.addItem({ description, completed: false });
    }
  }
}
