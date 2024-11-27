import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header';
import { Socket } from './core/classes/socket';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { SocketStatusSnackbarComponent } from './components/socket-status-snackbar';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fuxxaini-collector-monitor';

  private socket = inject(Socket);
  private snackBar = inject(MatSnackBar);
  private socketStatusSnackBarRef: MatSnackBarRef<SocketStatusSnackbarComponent>;

  constructor() {
    this.socket.isConnect$.pipe(
      filter(v => v !== undefined),
    ).subscribe(this.showSocketStatus.bind(this));
  }

  private showSocketStatus(isSocketConnect: boolean) {
    if (this.socketStatusSnackBarRef) {
      this.socketStatusSnackBarRef.dismiss();
    }

    this.socketStatusSnackBarRef = this.snackBar.openFromComponent(SocketStatusSnackbarComponent, {
      duration: isSocketConnect ? 3000 : undefined,
      data: isSocketConnect,
    });
  }
}
