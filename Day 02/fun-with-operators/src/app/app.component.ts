import { Component, OnInit } from '@angular/core';
import { from, generate, interval, Observer, of, timer } from 'rxjs';
import { bufferCount, filter, groupBy, map, mergeAll, windowCount } from 'rxjs/operators';
import { Market } from './models/market.model';
import { StockService } from './services/stock.service';
import { Notification } from './models/notification.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  history: Market[] = [];

  constructor(private stockService: StockService) { }
  ngOnInit(): void {

    const market$ = this.stockService.getMarket();

    market$.subscribe(val => {
      this.history.push(val);
    });

    const step1$ = market$.pipe(
      map(market => market.stocks),
      mergeAll(),
    );

    const step2$ = step1$.pipe(
      groupBy(stock => stock.id)
    );

    const step3$ = step2$.pipe(
      map(stock$ => stock$.pipe(
        bufferCount(2, 1),
        map(pair => ({ id: pair[0].id, oldValue: pair[0].value, newValue: pair[1].value }) as Notification)
      )), 
      mergeAll()
    );

    const step4$ = step3$.pipe(
      filter(notification => Math.abs(notification.oldValue - notification.newValue) > 5)
    );
      

    step4$.subscribe(this.createConsoleObserver('step 4'));




  }

  createConsoleObserver(id: string): Observer<any> {
    return {
      next: val => console.log(`observer ${id} next: ${JSON.stringify(val)}`),
      complete: () => console.log(`observer ${id} completed`),
      error: err => console.log(`observer ${id} error: ${err}`)
    }
  }

}
