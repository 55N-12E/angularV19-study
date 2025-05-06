import { Component, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-life-cycle',
  imports: [FormsModule, CommonModule],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.less'
})
export class LifeCycleComponent {
  public count: number = 0;
  public inpText: string = '';
  @Input() testMsg!: string;
  @Input() testNum!: number;

  constructor(){
    
  };
  ngOnChanges(changes: any){ // 父组件传值给子组件 值发生改变时，才会调用
    /* 
      testMsg 是一个会改变的父传子
      testNum 是一个固定的
      changes 只会显示 testMsg 因为它发生了改变才会触发这个方法
    */
    console.log('我是ngOnChanges', changes);
  };
  ngOnDestroy(){
    console.log('我是ngOnDestroy');
  };


  changeData(){
    this.count = Math.random();
  };

  onSubmit(f: NgForm) {
    console.log(f.value); // { first: '', last: '' }
    console.log(f.valid); // false
  }
}
