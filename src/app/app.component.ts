import { Component, ElementRef, ViewChild } from '@angular/core';
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

  appTest(){
    console.log('this is app')
  }

  @ViewChild("child001") appComponent001!: ElementRef;
  getChildEle(){
    console.log(this.appComponent001)
  }

  getChildVal(e: any){
    console.log(e)
  }
  getChildVal2(e: any){
    console.log(e)
  }
}
