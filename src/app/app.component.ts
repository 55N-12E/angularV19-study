import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component001Component } from "./component001/component001.component";
import {MyformComponent} from "./myform/myform.component";
import { TodolistComponent } from './todolist/todolist.component';

import {} from "rxjs"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Component001Component, MyformComponent, TodolistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  providers: []
})
export class AppComponent {
  title = 'my-ng-demo';
}
