import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  name: string = '';
  todos: any[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe(
      (data) => {
        this.todos = data.filter((todo: any) => !todo.completed);
      },
      (error) => {
        console.error('Error fetching todos', error);
      }
    );
  }

  addTodo() {
    if (!this.name.trim()) return; // Avoid adding empty tasks

    const newTodo = { id: Date.now(), title: this.name, completed: false, category: 'general' };
    this.todoService.addTodo(newTodo).subscribe(
      (data) => {
        this.todos.push(data);
        this.name = ''; // Clear the input field
      },
      (error) => {
        console.error('Error adding todo', error);
      }
    );
  }

  markAsCompleted(id: number) {
    this.todoService.updateTodo(id, true).subscribe(
      () => {
        this.todos = this.todos.filter(todo => todo.id !== id);
      },
      (error) => {
        console.error('Error marking todo as completed', error);
      }
    );
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(
      () => {
        this.todos = this.todos.filter(todo => todo.id !== id);
      },
      (error) => {
        console.error('Error deleting todo', error);
      }
    );
  }
}
