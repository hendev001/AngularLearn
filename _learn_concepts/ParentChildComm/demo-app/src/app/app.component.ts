import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Component communication';
  tasks: string[] = ['Task 1', 'Task 2', 'Task 3'];
  
  deleteTask(task: string) {
    this.tasks = this.tasks.filter(
      t => t !== task
    )
  }

}
