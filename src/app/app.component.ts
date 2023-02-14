import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  taskList: string[] = ['work text 1', 'work text 2', 'work text 3'];
  deleteTask(taskIndex: number) {
    this.taskList.splice(taskIndex, 1);
  }

}
 