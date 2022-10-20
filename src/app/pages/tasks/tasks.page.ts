import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { DialogService } from 'src/app/services/dialog.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  taskList: Task[] = [];

  newTask: Task = new Task();

  constructor(private tasksService: TasksService, private dialogService: DialogService) { }

  ngOnInit(): void {
    this.tasksService.getAllTasks().subscribe(tasks => {
      this.taskList = tasks;
    });
  }

  // Dialog prompt to add a new task
  newTaskPrompt() {
    this.dialogService.showPrompt('Add Task', 'New Task Title').subscribe(response => {
      
      if(response != null) {
        this.newTask.taskTitle = response;

        this.tasksService.createTask(this.newTask).subscribe(() => {
          window.location.reload();
        }, error => {
          console.log("Error: ", error);
        });
      } else {
        return;
      }
        
    });
  }

  // To mark if task is complete/incomplete & reload the page
  toggleCompleted(editTask: Task) {
    // console.log("Clicked: " + editTask.taskTitle);
    
    if(editTask.taskCompleted) {
      editTask.taskCompleted = false;
      this.tasksService.editTask(editTask).subscribe(() => {
        window.location.reload();
      });
    } else {
      editTask.taskCompleted = true;
      this.tasksService.editTask(editTask).subscribe(() => {
        window.location.reload();
      });
    }

  }

  // Delete task by id
  deleteTask(taskId: any) {
    this.tasksService.deleteTask(taskId).subscribe(() => {
      window.location.reload();
    })
  }


}
