import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public sendHistory = new Subject<any>();

  constructor() { }
}
