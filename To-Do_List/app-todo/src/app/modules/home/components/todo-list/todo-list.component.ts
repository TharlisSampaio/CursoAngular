import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, DoCheck {

  public taskList: Array<TaskList> = [
  ];
  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
      this.taskList.sort( (first, last) => Number(first.checked) - Number(last.checked));
  }

  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList(){
    const confim = window.confirm("Você deseja realmente Deletar toda sua lista?")
    if (confim){
      this.taskList = [];
    }
  }

  public setEmitTaskList(event: string){
    this.taskList.push({task: event, checked: false});
  }

}
