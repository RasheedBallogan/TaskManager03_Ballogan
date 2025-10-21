import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Enables *ngIf and date pipe
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-filter',
  standalone: true,
  imports: [CommonModule], // ✅ Required for template features
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent {
  currentFilter: 'all' | 'active' | 'completed' = 'all';

  constructor(private taskService: TaskService) {}

  setFilter(filter: 'all' | 'active' | 'completed') {
    this.currentFilter = filter;
    this.taskService.setFilter(filter);
  }
}
