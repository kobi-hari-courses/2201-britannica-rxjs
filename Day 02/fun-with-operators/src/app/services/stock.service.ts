import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable } from 'rxjs';
import { Market } from '../models/market.model';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private market$ = new BehaviorSubject<Market>(this.createInitialMarket());

  constructor() { 
    interval(1000).subscribe(_ => {
      const newMarket = this.calcNextMarket(this.market$.value);
      this.market$.next(newMarket);
    });
  }

  getMarket(): Observable<Market> {
    return this.market$.asObservable();
  }

  private createInitialMarket(): Market {
    return {
      stocks: [
        {
          id: 'Appl', 
          value: 5000
        }, 
        {
          id: 'Msft', 
          value: 3500
        }, 
        {
          id: 'Amzn', 
          value: 4000
        }, 
        {
          id: 'Otmo', 
          value: 4500 
        }, 
        {
          id: 'Fchi', 
          value: 6000
        }
      ]
    }
  }

  private calcNextMarket(source: Market): Market {
    return {
      stocks: source.stocks.map(stock => ({
        ...stock, 
        value: stock.value + Math.ceil(Math.random() * 20) - 10
      }))
    }
  }
}
