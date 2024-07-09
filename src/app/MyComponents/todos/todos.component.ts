import { Component,Input,Output } from '@angular/core';
import {Todo} from "../../Todo"
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: Todo[] = [];
  deletetodo(todo:Todo){
    console.log(todo);
    this.todos = this.todos.filter(function (i){
      if(JSON.stringify(i) === JSON.stringify(todo))
        return 0;
      else
        return 1;
    });
  }
  addtodo(todo:Todo){
    this.todos.push(todo);
    console.log(this.todos);
  }
  constructor(){
    this.todos = [
      
      {
        sno:1,
        title:"This is title",
        desc:"todo description",
        active: true
      },
      {
        sno:2,
        title:"This is title2",
        desc:"todo description",
        active: true
      },
      {
        sno:3,
        title:"This is title3",
        desc:"todo description",
        active: true
      },
    ]
  }

}
