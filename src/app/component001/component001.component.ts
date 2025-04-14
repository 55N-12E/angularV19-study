import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import { MyPipeClass } from './component001.pipe';

@Component({
  selector: 'app-component001',
  imports: [CommonModule, MyPipeClass, FormsModule],
  templateUrl: './component001.component.html',
  styleUrl: './component001.component.less'
})
export class Component001Component {
  public pubVal = "公共";
  private priVal = "私有";
  protected proVal = "当前和子";
  
  public arr: Array<string> = ["1", "2", "3"];

  public switchNum: number = 0;

  public inpText: string = "";

  constructor(){
    
  }

  test(event: any){
    console.log(event)
    console.log(this)
  }

  clickSwitchBtn(){
    this.switchNum += 1;
  }

  clearInpText(){
    this.inpText = "";
  }
}
