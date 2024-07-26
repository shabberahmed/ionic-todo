import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit,OnChanges ,OnDestroy{
  completedTodos: any[] = [];
@Input() flag = false
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    console.log('ngOnInit called');
  if(this.flag){
    this.loadCompletedTodos();
  }
}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called',changes);
    if (changes['flag'].currentValue) {
      this.loadCompletedTodos();
    }
  }

  ionViewDidEnter(){
    console.log("new hook")
  }
  loadCompletedTodos() {
    this.todoService.getTodos().subscribe(
      (data) => {
        this.completedTodos = data.filter((todo: { completed: any }) => todo.completed);
        console.log('completedTodos:', this.completedTodos);
      },
      (error) => {
        console.error('Error fetching completed todos', error);
      }
    );
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
}
