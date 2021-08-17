import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [
    //new Todo('this is a test!', false),
    //new Todo('Lionel Andrés Messi, also known as Leo Messi, is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team', true)
  ]

  constructor() { }
 
  getAllTodos() {
    return this.todos 
  }
  addTodo(todo: Todo) {
    this.todos.push(todo)
  }
  updateTodo(index: number, updatedTodo:Todo) {
    this.todos[index] = updatedTodo
  }
  deleteTodo(index: number) {
    this.todos.splice(index, 1)
  }
}
