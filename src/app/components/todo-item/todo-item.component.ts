import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from 'src/app/models/Todo';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

    @Input() todo: Todo;
    @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

    constructor(private todoService: TodoService) { }

    ngOnInit(): void {
    }

    // Set Dynamic Classes
    setClasses() {
        let classes = {
            todo: true,
            'is-complete': this.todo.complete
        };
        return classes;
    }

    onToggle(todo) {
        console.log("toggle");

        // Toggle in UI
        todo.complete = !todo.complete;
        // Toggle on Server
        this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
    }

    onDelete(todo) {
        console.log("delete");

        this.deleteTodo.emit(todo);
    }

}
