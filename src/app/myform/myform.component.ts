import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-myform',
  imports: [FormsModule, CommonModule],
  templateUrl: './myform.component.html',
  styleUrl: './myform.component.less'
})
export class MyformComponent {
  public formObj: any = {
    userName: "",
    sex: "",
    mark: ""
  };

  doSbumit(){
    console.log(this.formObj)
  }

  changeSex(val: string){
    this.formObj.sex = val;
  }
}
