import { Component,OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-add-item',
  templateUrl: './todo-add-item.component.html',
  styleUrls: ['./todo-add-item.component.css']
})
export class TodoAddItemComponent{
  title:string = "";
  desc:string = "";
  @Output() todoadd: EventEmitter<Todo> = new EventEmitter();
  OnSubmit(){
    const todo = {
      sno: 12,
      title: this.title,
      desc: this.desc,
      active: true
    };
    console.log(todo);
    this.todoadd.emit(todo);
  }
}
