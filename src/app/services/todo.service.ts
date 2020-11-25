import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
    todosLimit: string = '?_limit=5';

    constructor(private http: HttpClient) { }

    // Get Todos
    getTodos(): Observable<Todo[]> {
        // Hardcoded Data (JSON Placeholder mimics pull from database)
        // return [
        //     {
        //         id: 1,
        //         title: 'To Do 1',
        //         complete: true
        //     },
        //     {
        //         id: 2,
        //         title: 'To Do 2',
        //         complete: true
        //     },
        //     {
        //         id: 3,
        //         title: 'To Do 3',
        //         complete: false
        //     }
        // ];

        return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
    } // end getTodos()

    // Delete Todo
    deleteTodo(todo: Todo): Observable<Todo> {
        const url = `${this.todosUrl}/${todo.id}`;
        return this.http.delete<Todo>(url, httpOptions);
    }

    // Add Todo
    addTodo(todo: Todo): Observable<Todo> {
        return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
    }

    // Toggle Completed
    toggleCompleted(todo: Todo): Observable<any> {
        const url = `${this.todosUrl}/${todo.id}`;
        return this.http.put(url, todo, httpOptions);
    } // end toggleCompleted()

}
