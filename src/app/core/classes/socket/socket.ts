import { Injectable, signal } from '@angular/core';
import { Socket as SocketIoSocket } from 'ngx-socket-io';
import { environment as env } from '@/env';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Socket extends SocketIoSocket {
  readonly isConnect$: Observable<boolean | undefined>;

  private readonly isConnect = signal<boolean | undefined>(undefined);

  constructor() {
    super({
      url: env.socket.url,
      options: {
        autoConnect: false,
        transports: ['websocket'],
      },
    });

    this.isConnect$ = toObservable(this.isConnect);
  }

  init() {
    this.on('connect', (...args: any[]) =>{ 
      console.info('connect', ...args);

      this.isConnect.set(true);
    });
    this.on('connect_error', (...args: any[]) =>{ 
      console.error('connect_error', ...args);

      this.isConnect.set(false);
    });
    this.on('disconnect', (...args: any[]) =>{ 
      console.info('disconnect', ...args);

      this.isConnect.set(false);
    });

    this.connect();
  }
}
