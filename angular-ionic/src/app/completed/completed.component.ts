import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit {
  completedTodos: any[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.loadCompletedTodos();
  }

  loadCompletedTodos() {
    this.todoService.getTodos().subscribe(
      (data) => {
        this.completedTodos = data.filter((todo: { completed: any; }) => todo.completed);
      },
      (error) => {
        console.error('Error fetching completed todos', error);
      }
    );
  }
}
