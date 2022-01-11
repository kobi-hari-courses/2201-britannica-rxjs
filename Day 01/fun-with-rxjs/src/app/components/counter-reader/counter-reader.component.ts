import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter-reader',
  templateUrl: './counter-reader.component.html',
  styleUrls: ['./counter-reader.component.scss']
})
export class CounterReaderComponent implements OnInit {

  counterValue$!: Observable<number>;


  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.counterValue$ = this.counterService.getValue();
  }

}
