import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() text: string = '';
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  isTaskSuccessful: boolean = false;

  toggleTaskSuccessful() {
    if (this.isTaskSuccessful) {
      console.log(`${this.text} Successful`);
    }
    else { console.log(`${this.text} Not Successful`); }

  }

  delete() {
    this.onDelete.emit();
  }


}
