import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, 'Learn Java fullstack', false, new Date()),
    new Todo(2, 'Practice coding daily', false, new Date()),
    new Todo(3, 'Spend time with family', false, new Date())
    // {id: 1, description: 'Learn Java full stack' },
    // {id: 2, description: 'Practice daily 12 hours coding' },
    // {id: 3, description: 'Spend time with Charvi, Chinnu & Manu' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
