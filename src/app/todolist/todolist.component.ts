import { Component, ElementRef, ViewChild } from '@angular/core';
import {CommonModule} from "@angular/common";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  imports: [CommonModule, FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.less'
})
export class TodolistComponent {
  public searchVal: string = "";
  public historyArr: Array<{name: string, status: boolean}> = [];
  public finishArr: Array<{name: string, status: boolean}> = [];

  constructor(){}
  @ViewChild("searchInput") searchInputEle!: ElementRef;

  searchBtn(){
    this.historyArr.push({
      name: this.searchVal,
      status: false
    });

    this.searchVal = "";
    this.searchInputEle.nativeElement.focus()
  }

  confirmBtn(){
    this.finishArr = this.historyArr.filter((item: any) => item.status);
    this.historyArr = this.historyArr.filter((item: any) => !item.status);
  }

  delHistory(key: number){
    this.historyArr.splice(key, 1)
  }

  check(){
    console.log(this.historyArr)
    console.log(this.finishArr)
  }
}
