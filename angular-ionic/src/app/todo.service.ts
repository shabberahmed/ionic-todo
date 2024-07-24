import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:3001/todos';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addTodo(newTodo: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, newTodo);
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  updateTodo(id: number, completed: boolean): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, { completed });
  }
}
