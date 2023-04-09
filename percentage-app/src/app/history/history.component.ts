import { Component, Input } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  history: any = [];
  constructor(
    private sharedService:StateService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.sharedService.sendHistory.subscribe((res: any) => {
      this.history = res;
    });
  }
  cacheClear() {
    this.sharedService.sendHistory.next([]);
  }
}
