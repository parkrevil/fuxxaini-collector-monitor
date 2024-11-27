import { LogService } from '@/log/services/log';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [],
  providers: [
    LogService,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit, OnDestroy {
  private logService = inject(LogService);

  constructor() {
    console.log('ListComponent destroy')
  }

  ngOnInit() {
    console.log('ListComponent init')
  }

  ngOnDestroy() {
    console.log('ListComponent destroy')
  }
}
