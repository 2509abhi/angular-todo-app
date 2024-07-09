import { Component,Input,Output,EventEmitter } from '@angular/core';
import {Todo} from "src/app/Todo"
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo = {
    sno: 0,
    title: "",
    desc: "",
    active: false
  };
  @Output() tododelete: EventEmitter<Todo> = new EventEmitter();
  OnClick(todo:Todo){
    this.tododelete.emit(todo);
    console.log("Good");
  }
}
