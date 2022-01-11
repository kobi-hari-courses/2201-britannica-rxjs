import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter-reader',
  templateUrl: './counter-reader.component.html',
  styleUrls: ['./counter-reader.component.scss']
})
export class CounterReaderComponent implements OnInit, OnDestroy {

  counterValue = 0;
  private sub!: Subscription;


  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.sub = this.counterService.getValue().subscribe(val => {
      this.counterValue = val;
      console.log('the counter value changed to ' + val);
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
