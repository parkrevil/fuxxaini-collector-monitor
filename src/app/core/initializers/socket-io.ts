import { inject } from '@angular/core';
import { Socket } from '../classes/socket';

export const socketIoInitializer = () => {
  inject(Socket).init();
};
