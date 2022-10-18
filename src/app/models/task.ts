export class Task {
    taskId?: number;
    taskTitle?: string;
    taskCompleted?: boolean;

    constructor(taskId?: number, taskTitle?: string, taskCompleted?: boolean) {
        this.taskId = taskId;
        this.taskTitle = taskTitle;
        this.taskCompleted = taskCompleted;
    }
}
