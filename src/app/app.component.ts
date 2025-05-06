import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from "@angular/common";
import { FormsModule } from '@angular/forms';

import { Component001Component } from "./component001/component001.component";
import {MyformComponent} from "./myform/myform.component";
import { TodolistComponent } from './todolist/todolist.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';

import {} from "rxjs"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, Component001Component, MyformComponent, TodolistComponent, LifeCycleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  providers: []
})
export class AppComponent {
  title = 'my-ng-demo';
  public show: boolean = true;
  public lifeCycelInp: string = '';

  constructor(){

  };
  ngOnInit(){
    console.log('我是ngOnInit');
  };
  ngDoCheck(){
    console.log('我是ngDoCheck');
  };
  ngAfterContentInit(){
    console.log('我是ngAfterContentInit');
  };
  ngAfterContentChecked(){
    console.log('我是ngAfterContentChecked');
  };
  ngAfterViewInit(){
    console.log('我是ngAfterViewInit');
  };
  ngAfterViewChecked(){
    console.log('我是ngAfterViewChecked');
  };
  afterNextRender(){
    console.log('我是afterNextRender');
  };
  afterRender(){
    console.log('我是afterRender');
  };


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
