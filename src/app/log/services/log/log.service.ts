import { Socket } from '@/core/classes/socket';
import { SocketEvent } from '@/core/enums';
import { inject, Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class LogService implements OnDestroy {
  private socket = inject(Socket);
  private socketEvents = new Map<SocketEvent, Function>([
    [SocketEvent.LogCreate, this.onCreate.bind(this)],
    [SocketEvent.LogUpdate, this.onUpdate.bind(this)],
  ]);

  constructor() {
    this.socketEvents.forEach((v, k) => {
      this.socket.on(k, v);
    });
  }

  ngOnDestroy() {
    this.socketEvents.forEach((v, k) => {
      this.socket.removeAllListeners(k);
    });
  }

  private onCreate() {
    console.log('onCreate');
  }

  private onUpdate() {
    console.log('onUpdate');
  }
}
