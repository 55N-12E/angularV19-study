import { Component, Input, Output, output, EventEmitter } from '@angular/core';
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

  @Input(/* {
    alies: string | udf, 
    required: boolean | udf, 
    transform: (val: any) => {
      return val
    }
  } */) testMsg!: string;

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

  checkFatherVal(){
    console.log(this.testMsg)
  }

  @Output() private outer = new EventEmitter();
  sendParent(){
    this.outer.emit("我是使用@Output装饰器+new EventEmitter创建")
  }
  public outputFNC = output<string>();
  sendParent2(){
    this.outputFNC.emit("我是output函数创建")
  }
}
