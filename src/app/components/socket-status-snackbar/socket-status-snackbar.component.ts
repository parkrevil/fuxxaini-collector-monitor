import { Component, inject, signal } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-socket-status-snackbar',
  imports: [
    MatIconModule,
  ],
  templateUrl: './socket-status-snackbar.component.html',
  styleUrl: './socket-status-snackbar.component.scss'
})
export class SocketStatusSnackbarComponent {
  isConnect = signal(inject(MAT_SNACK_BAR_DATA));
}
