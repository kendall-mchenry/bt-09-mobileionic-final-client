import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  baseURL: string = "https://localhost:7190/api/tasks";

  constructor(private http: HttpClient) { }

  // POST / create new task
  createTask(newTask: Task): Observable<Task> {
    return this.http.post<Task>(`${this.baseURL}`, newTask);
  }

  // GET / get all tasks
  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseURL}`);
  }

  // GET / get task by id
  getTaskById(taskId: number): Observable<Task> {
    return this.http.get<Task>(`${this.baseURL}/${taskId}`);
  }

  // PUT / edit task by id
  editTask(editTask: Task): Observable<Task> {
    return this.http.put<Task>(`${this.baseURL}/edit/${editTask.taskId}`, editTask);
  }

  // DELETE / delete task by id
  deleteTask(taskId: number): Observable<Task> {
    return this.http.delete<any>(`${this.baseURL}/${taskId}`);
  }
}
